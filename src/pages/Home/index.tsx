import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { IAccount, ITransactionData } from "../../interfaces";
import { transactionSchema } from "../../schemas";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { TransactionsContext } from "../../providers/Transactions";
import { baseAPI } from "../../constants/api";
import axios from "axios";
import { UsersContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import {
  Balance,
  Card,
  CardList,
  Container,
  Content,
  DateBtn,
  Select,
} from "./style";
import { Form, Input, SendBtn, Wrapper } from "../../styles/Form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Home = (): JSX.Element => {
  const { createTransaction, transactions, getTransaction } =
    useContext(TransactionsContext);
  const { token } = useContext(UsersContext);

  const [account, setAccount] = useState<IAccount>({} as IAccount);
  const [balanceChanged, setBalanceChanged] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [transactionsToShow, setTransactionsToShow] = useState(transactions);
  const [filterDate, setFilterDate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getBalance = async () => {
      await axios
        .get(`${baseAPI}accounts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setAccount(res.data);
        })
        .catch((err) => {
          err.response.data.message === "Unauthorized" &&
            navigate(routes.login);
        });
    };
    localStorage["@token"] ? getBalance() : navigate(routes.login);
    setTransactionsToShow(transactions);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  useEffect(() => {
    localStorage["@token"] ? getTransaction() : navigate(routes.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITransactionData>({
    resolver: yupResolver(transactionSchema),
  });

  const onSubmit = (formData: ITransactionData) => {
    confirmAlert({
      title: "Confirm transfer?",
      message: `Transfer R$${formData.value.toFixed(2)} to ${
        formData.creditedUsername
      }?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            createTransaction(formData);
            setBalanceChanged(!balanceChanged);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const filterByType = (value: string) => {
    if (value === "cashin") {
      setTransactionsToShow(transactions.filter((elem) => elem.value >= 0));
    } else if (value === "cashout") {
      setTransactionsToShow(transactions.filter((elem) => elem.value < 0));
    } else {
      setTransactionsToShow(transactions);
    }
  };

  const filterByDate = () => {
    setFilterDate(!filterDate);

    setTransactionsToShow([...transactionsToShow].reverse());
  };

  return (
    <Container>
      <Balance>
        Balance: ${" "}
        {showBalance ? (
          <span>{account.balance.toFixed(2)}</span>
        ) : (
          <span>••••</span>
        )}
        {!showBalance ? (
          <AiFillEye onClick={toggleBalance} />
        ) : (
          <AiFillEyeInvisible onClick={toggleBalance} />
        )}
      </Balance>
      <Content>
        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>New Transaction</h2>
            <Wrapper>
              <label>Username</label>
              <Input {...register("creditedUsername")} />
              <span>{errors.creditedUsername?.message}</span>
            </Wrapper>
            <Wrapper>
              <label>Value</label>
              <Input {...register("value")} />
              <span>{errors.value?.message}</span>
            </Wrapper>
            <SendBtn type="submit">Transfer</SendBtn>
          </Form>
        </section>
        <section>
          <CardList>
            <div>
              <h2>Transaction History</h2>
              <label>Filters: </label>
              <DateBtn onClick={filterByDate}>
                {filterDate ? "Date ↑" : "Date ↓"}
              </DateBtn>
              <Select
                onChange={(event) => {
                  filterByType(event.target.value);
                }}
              >
                <option value="all">All</option>
                <option value="cashin">Cash in</option>
                <option value="cashout">Cash out</option>
              </Select>
            </div>
            {transactionsToShow?.map((elem) => (
              <Card key={elem.id} amount={elem.value}>
                <div>Type: {elem.value < 0 ? "Cash out" : "Cash in"}</div>
                <div>
                  $ <span>{elem.value.toFixed(2)}</span>
                </div>
                <div>Date: {String(elem.createdAt).split("T")[0]}</div>
              </Card>
            ))}
          </CardList>
        </section>
      </Content>
    </Container>
  );
};
