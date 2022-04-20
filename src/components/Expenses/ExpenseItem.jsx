import React from 'react';
import Expensedate from './ExpenseDate';
import './ExpenseItem.css';

const Expenseitem = (props) => {
    return (
        <div className='expense-item'>
            <Expensedate date={props.date} />
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$249.67</div>
            </div>
        </div>
    );
}

export default Expenseitem;