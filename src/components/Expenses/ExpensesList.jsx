import React from 'react';
import Expenseitem from './ExpenseItem';
import './ExpenseList.css';

const style = {
    textAlign: 'center',
    color: 'white'
}
const Expenseslist = (props) => {
    return (
        <ul className='expenses-list'>
            {
                props.filteredExpenses.length > 0 ? props.filteredExpenses.map(item =>
                    <Expenseitem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                    ) : <h2 style={style}>No Expenses to show</h2>
            }
        </ul>
    );
}

export default Expenseslist;
