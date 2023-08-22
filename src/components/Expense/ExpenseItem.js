import React, { useState } from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expense = ({ date, name, price }) => {
  const [amount, setAmount] = useState(price);

  const handleIncrement = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const handleDecrement = () => {
    setAmount((prevAmount) => prevAmount - 1);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-description">
        <h2>{name}</h2>
        <p>$ {amount}</p>

        <div>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </Card>
  );
};

export default Expense;
