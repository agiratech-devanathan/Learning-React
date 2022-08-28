import './expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/card';
import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/expenseFilter';
function Expenses (props){
  const [filteredYear, setFilteredYear]=useState('2020');
  const filterChangedHandler=(selectedYear)=>{
   setFilteredYear(selectedYear)
  }
return(
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
    <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}/>
    
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}/>
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}/>
    <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}/>
  </Card>
)
}

export default Expenses;