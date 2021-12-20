import { combineReducers } from "redux";
import { authReducer } from "store/auth/authSlice";
import { profileReducer } from "store/profile/profileSlice";
import { locationsReducer } from "store/locations/locationsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  locations: locationsReducer,
  profile: profileReducer
});

export default rootReducer;
