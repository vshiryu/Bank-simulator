import { createContext, useState } from "react";
import {
  ILoginData,
  IRegisterData,
  IPropsProvider,
  IUserProvider,
} from "../../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseAPI } from "../../constants/api";
import {
  getUserToken,
  setLocalStorageData,
} from "../../constants/localStorage";
import { routes } from "../../constants/routes";

export const UsersContext = createContext<IUserProvider>({} as IUserProvider);

export const UsersProvider = ({ children }: IPropsProvider) => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(getUserToken);

  const toastSucess = (message: string, route: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        navigate(route);
      },
    });
  };

  const toastError = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const register = async (registerData: IRegisterData) => {
    await axios
      .post(`${baseAPI}users`, registerData)
      .then((res) => {
        console.log(res.data);
        toastSucess("Sucessfull registration, redirecting...", routes.login);
      })
      .catch((err) => {
        toastError(err.response.data.message);
      });
  };

  const login = async (loginData: ILoginData) => {
    await axios
      .post(`${baseAPI}users/login`, loginData)
      .then((res) => {
        console.log(res.data);
        const { token, userId, accountId } = res.data;
        setLocalStorageData(token, userId, accountId);
        setToken(token);
        toastSucess("Successful login, redirecting...", routes.home);

        setUser(res.data);
        setLogged(true);
      })
      .catch((err) => {
        toastError(err.response.data.message);
      });
  };

  const logout = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@userId");
    localStorage.removeItem("@accountId");
    setToken("");
    setUser({});
    setLogged(false);

    toastSucess("Logging out...", routes.login);
  };

  return (
    <UsersContext.Provider
      value={{ register, user, logged, logout, login, token, setLogged }}
    >
      {children}
    </UsersContext.Provider>
  );
};
