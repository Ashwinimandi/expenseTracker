import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);

  const clickHandler=()=>
  {
    setTitle('Updated!');
    console.log(title);
  };
  /*const deleteExpense=()=>
  {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
  }*/

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button >Delete</button>
    </Card>
  );
}

export default ExpenseItem;