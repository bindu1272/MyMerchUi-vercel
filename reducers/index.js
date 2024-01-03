import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { LOGOUT_REQUEST } from '../constants/actionTypes';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import entitiesReducer from './entitiesReducer';
import userReducer from './userReducer';
import bannerReducer from './bannerReducer';
import enquiryProductReducer from './enquiryProductReducer';

const appReducer = combineReducers({
    entities: entitiesReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userReducer,
    banners: bannerReducer,
    enquiryProducts: enquiryProductReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_REQUEST) {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')

        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;
