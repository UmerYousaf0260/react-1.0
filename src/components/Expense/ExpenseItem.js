import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expense = ({ date, name, price }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-description">
          <h2>{name}</h2>
          <p>$ {price}</p>
        </div>
      </Card>
    </li>
  );
};

export default Expense;
