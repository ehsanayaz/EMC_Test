import { useDispatch } from "react-redux";
import { AUTH_LOGOUT_USER } from "store/auth/authSagaActions";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(AUTH_LOGOUT_USER());
  };

  return <div onClick={logout}>Logout</div>;
};
