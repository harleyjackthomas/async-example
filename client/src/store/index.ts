import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

// Middleware
import apiMiddleware from "src/middleware/api";

const store = createStore(reducer, applyMiddleware(apiMiddleware));

export default store;
