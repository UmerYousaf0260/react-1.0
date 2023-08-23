import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (prop) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 1000).toString(),
      ...newExpenseData,
    };

    prop.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
