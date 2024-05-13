import {legacy_createStore} from 'redux';
import {rootReducer} from '../redux/Reducers'

export const store = legacy_createStore(rootReducer);