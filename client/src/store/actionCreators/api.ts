import { ActionTypes, API_ACTION } from '../actions/api';

export const apiAction = ({
    url = "",
    method = "GET",
    data = null,
    onSuccess = (response: any) => {},
    onFailure = (error: any) => {},
    headers = {}
                          }): API_ACTION => ({
    type: ActionTypes.API,
    payload: {
        url,
        method: method as any,
        data,
        onSuccess,
        onFailure,
        headers
    }
})