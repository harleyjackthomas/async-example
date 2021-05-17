import React, {useEffect} from 'react';

// Redux
import { useDispatch } from "react-redux";
import { getTodos } from "./store/actionCreators";

// Components
import ListTodos from "./containers/list-todos";

function App() {

    const dispatch = useDispatch();

    // Fetch Todo's from the API only ONCE on app init
    useEffect(() => {
        dispatch(getTodos())
    });

    return (
        <div className="App">
          <ListTodos />
        </div>
    );
}

export default App;
