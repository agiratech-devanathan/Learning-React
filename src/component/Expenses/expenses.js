import './expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/card';
import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/expenseFilter';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  //here Filtered the expense data based specific year
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />

      {/* looping the expenseItem using map function to display a list of data dynamically */}

      {/* Alternative way of display expense data conditionally */}

      {filteredExpenses.length===0 && <p>No Expense Found.</p> }
      {filteredExpenses.length>0 && 
       filteredExpenses.map((expense) => (
        //here Filtering data and display based on filtered specific year and

        // showing custom message if expense not found for soecific year
        //method -1 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      ))}  
  
    </Card>
  )
}

export default Expenses;