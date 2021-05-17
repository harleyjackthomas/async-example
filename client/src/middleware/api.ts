// Redux
import { Middleware } from "redux";

// Store
import { State } from "src/store/reducers";
import { ActionTypes, API_ACTION } from "src/store/actions/api";

// Axios
import axios from "axios";

const middleware: Middleware<{}, State> = ({ dispatch }) => next => (action: API_ACTION) => {
    next(action);

    // Only handle `API` actions in this middleware
    if ( action.type !== ActionTypes.API) return;

    // Deconstruct the payload
    const {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        headers
    } = action.payload;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    // Add axios configurations, i.e. bearer-tokens if needed
    axios.defaults.baseURL = "http://localhost:3001";

    // Execute the request
    axios.request({
        url,
        method,
        headers,
        [dataOrParams]: data
    }).then(({ data }) => {
        // On Successful Request, execute a predefined callback to handle response
        dispatch(onSuccess(data))
    }).catch(error => {
        // On Failure, execute a predefined callback to handle the error
        dispatch(onFailure(error));
    });
}

export default middleware;