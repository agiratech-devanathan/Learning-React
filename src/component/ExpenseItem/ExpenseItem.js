import './ExpenseItem.css';
import React from 'react';
 import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/card';
function ExpenseItem(props) {
   const clickHandler=()=>{
    console.log('Clicked......')
   }
 console.log(typeof(props.date))
    return (
        <Card className="expense-item">
             <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    );
}

export default ExpenseItem;