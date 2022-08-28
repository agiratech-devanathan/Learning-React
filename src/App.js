import React, { useState } from "react";
import Expenses from "./component/Expenses/expenses";
import NewExpense from "./component/Forms/NewExpense/newExpense";
// initial expense items array
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  // to add new expense data into initial expenses array using useState
  const [expenses, setExpense] = useState(INITIAL_EXPENSES);

  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},"Let's get Started!"),
  //   React.createElement(Expenses,{items:expenses})
  //   );

  const addExpenseHandler = (expense) => { //here is a function is receive data from child to parent component 
    //and updating a new value into old list of expenses useing useState setExpense Method
    setExpense((previousExpense) => {
      return [expense, ...previousExpense]
    });
  }
  return (
    <div>
      {/* here recive props form child i named here onAddExpenseData and sends arguements too from NewExpense component */}
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
