import React from "react";
import Expenses from "./component/Expenses/expenses";
import NewExpense from "./component/Forms/NewExpense/newExpense";


function App() {
  const expenses = [
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
  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},"Let's get Started!"),
  //   React.createElement(Expenses,{items:expenses})
  //   );

  const addExpenseHandler=(expense)=>{ //here is a function is receive data from child to parent component
    console.log('app.js')
    console.log(expense)
  }
  return (
   <div>
    {/* here recive props form child i named here onAddExpenseData and sends arguements too from NewExpense component */}
    <NewExpense onAddExpenseData={addExpenseHandler}/> 
    <Expenses items={expenses}/>
   </div>
  );
}

export default App;
