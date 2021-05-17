export enum ActionTypes {
    API = "API",
};

export interface API_ACTION {
    type: ActionTypes.API,
    payload: {
        url: string,
        method: "GET" | "POST",
        data: any,
        onSuccess: Function,
        onFailure: Function,
        headers: {}
    }
}