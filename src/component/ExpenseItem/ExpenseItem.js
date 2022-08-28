import './ExpenseItem.css';
import React from 'react';
 import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/card';
function ExpenseItem(props) {
//here using state method for updating the value user interface and 
//it takes like an array it has two arguements one is old value, others update function.

//const [title,setTitle]=useState(props.title);
//    const clickHandler=()=>{
//     // And here we don't update a new value like this const title="new value";
//     // Instead of we updated by using state method's updte function like 
//     // Here we using setTile function to update the new title
//     //It act specific single single 
//     setTitle('updated!...')
//     console.log(title)
//    }
    return (
        <Card className="expense-item">
             <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{'$'+props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Click Me</button> */}
        </Card>
    );
}

export default ExpenseItem;