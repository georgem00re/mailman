
import { createStore, combineReducers } from "redux";
import { requestUrlReducer, requestMethodReducer, responseReducer } from "./reducers";

const reducers = combineReducers({
	requestUrl: requestUrlReducer,
	requestMethod: requestMethodReducer,
	response: responseReducer,
});

export default createStore(reducers);