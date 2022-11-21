import {
  IPropsProvider,
  ITransactionAccount,
  ITransactionData,
  ITransactionProvider,
} from "../../interfaces";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { baseAPI } from "../../constants/api";
import axios from "axios";
import { UsersContext } from "../Users";

export const TransactionsContext = createContext<ITransactionProvider>(
  {} as ITransactionProvider
);

export const TransactionsProvider = ({ children }: IPropsProvider) => {
  const [transactions, setTransactions] = useState<ITransactionAccount[]>([]);
  const { token } = useContext(UsersContext);
  const toastSucess = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {},
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

  const getTransaction = async () => {
    await axios
      .get(`${baseAPI}transactions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setTransactions(res.data);
      })
      .catch((err) => {
        console.error(err);
        toastError(err.response.data.message);
      });
  };

  const createTransaction = async (transactionData: ITransactionData) => {
    await axios
      .post(`${baseAPI}transactions`, transactionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toastSucess("Successful transaction");
        getTransaction();
      })
      .catch((err) => {
        console.error(err);
        toastError(err.response.data.message);
      });
  };

  return (
    <TransactionsContext.Provider
      value={{ getTransaction, createTransaction, transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
