import { createContext, useState } from "react";
import { ILoginData, IRegisterData, IPropsProvider } from "../../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseAPI } from "../../constants/api";
import { setLocalStorageData } from "../../constants/localStorage";
import { routes } from "../../constants/routes";

export const UsersContext = createContext({});

export const UsersProvider = ({ children }: IPropsProvider) => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

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
      .post(baseAPI, registerData)
      .then((res) => {
        toastSucess("Sucessfull registration, redirecting...", routes.login);
      })
      .catch((err) => {
        toastError("Register failed, try again!");
      });
  };

  const login = async (loginData: ILoginData) => {
    await axios
      .post(baseAPI, loginData)
      .then((res) => {
        const { token, userId, accountId } = res.data;
        setLocalStorageData(token, userId, accountId);
        toastSucess("Successful login, redirecting...", routes.home);

        setUser(res.data);
        setLogged(true);
      })
      .catch((err) => {
        toastError("Login failed, try again!");
      });
  };

  const logout = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@userId");
    localStorage.removeItem("@accountId");
    setLogged(false);

    toastSucess("Logging out...", routes.login);
  };

  return (
    <UsersContext.Provider value={{ register, login, user, logged, logout }}>
      {children}
    </UsersContext.Provider>
  );
};
