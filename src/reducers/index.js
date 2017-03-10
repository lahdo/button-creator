import {combineReducers} from 'redux';
import {recorderReducer as recorder} from 'react-recorder-redux';
import MainReducer from "./MainReducer";

export default combineReducers({
    MainReducer,
    recorder
});
