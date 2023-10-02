
import { createStore, combineReducers } from "redux";
import { 
	requestUrlReducer, 
	requestMethodReducer, 
	responseReducer, 
	requestBodyReducer, 
	requestHeadersReducer,
	requestParamsReducer,
	responseLoadingReducer,
} from "./reducers";

const reducers = combineReducers({
	requestUrl: requestUrlReducer,
	requestMethod: requestMethodReducer,
	response: responseReducer,
	requestBody: requestBodyReducer,
	requestHeaders: requestHeadersReducer,
	requestParams: requestParamsReducer,
	responseLoading: responseLoadingReducer,
});

export default createStore(reducers);