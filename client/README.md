# Project Structure

```
src/
    components/
        Reusable components, props and dispatch actions 
        are bounded via containers found in src/containers.

        Components in this folder are "dumb/presentational", they
        don't have any understanding of how data is fetched or handled
    containers/
        These are the "smart" components, they pass data/functions to child
        "dumb/presentational" components. Often done via the `connect` function
        in redux.
    entites/
        Simple models for the business logic
    layouts/
        Reusable presentational layouts, i.e. a resuable Material Card implmenetation.
    middleware/
        Redux middleware implementations
    store/
        Redux actions, action creators and reducers
```

## How do I handle async calls?

Firstly, in `src/store/actionCreators` and `src/store/actions`, you can see descriptions of `API` and `todo` events.
An API_ACTION consists of details about the API call to be made (method, url, headers), but most importantly, it all has 
callback functions that are executed on API relevant events. I.e. onSuccess -> the API call completed successfully, and 
onFailure -> the API call had some sort of error. The callback functions passed here need to be able to handle data 
returned from the specific API calls being made.

As an example in `src/store/actionCreators/todos` we have a `getTodos` method, this returns a API_ACTION to be dispatched
via redux. This action describes the URL to hit and with what method, but most importantly it defined the callback function
to be executed on a successful API call. 

Here, it is the `updateTodos` action. How is this action dispatched? In the `src/middleware/api` implementation, there is a 
custom redux middleware. In it, `axios` is used to execute API requests. 

Within the `.then` callback of the `request` function, you can see that the redux `dispatch` function is called, with the 
data from the response passed to `onSuccess`, `onSuccess` is really just a action creator, with the resulting action
dispatched via redux. 

So, the workflow of the `getTodos` example is. 
- in `App.tsx`, within a `useEffect` hook, an API (`getTodos`) action is dispatched. This is only done once on app startup.
- This action is intercepted via the api middleware
    - The api middleware uses axios to send the API request
    - The api middleware dispatches the event created from the `onSuccess` call
        - Here, this action is a `updateTodos` action
        - This `updateTodos` action is handled by the `todos` reducer (`src/store/reducers/todos`)
    - The `ListTodos` component (`src/components/ListTodos`) renders the updated redux store state
        - The "dumb" `ListTodos` component has the Todos array passed via a "smart" container (`src/containers/list-todos`)
            - The container uses redux to `mapStateToProps`, whenever the store is updated, the "dumb" component will present
              automatically. Multiple "dumb" components can now render the result of a single API call.
            - If components are deconstructed, it doesn't matter as the API response is now persisted in the redux store
             
 