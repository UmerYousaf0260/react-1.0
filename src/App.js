import Expense from "./components/Expense/ExpenseItem";
import Card from "./components/UI/Card";
import "./App.css";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // Behind the scene
  // return React.createElement(
  //   "div",
  //   { className: "expense-tracker" },
  //   React.createElement("h1", {}, "Expense Tracker"),
  //   React.createElement(Expense, {
  //     date: expenses[0].date,
  //     name: expenses[0].title,
  //     price: expenses[0].amount,
  //   })
  // );

  return (
    <div className="expense-tracker">
      <h1>Expense tracker</h1>

      <NewExpense />

      <Card className="expenses">
        <Expense
          date={expenses[0].date}
          name={expenses[0].title}
          price={expenses[0].amount}
        />

        <Expense
          date={expenses[1].date}
          name={expenses[1].title}
          price={expenses[1].amount}
        />

        <Expense
          date={expenses[2].date}
          name={expenses[2].title}
          price={expenses[2].amount}
        />
      </Card>
    </div>
  );
}

export default App;
