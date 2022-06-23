import React,{useState} from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [openAddForm, setOpenAddForm] = useState(false);

    const openFormHandler = () => {
        setOpenAddForm(true);
    }

    const closeOpenFormHandler = () =>{
        setOpenAddForm(false);
    }

    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setOpenAddForm(false);
    };

    return <div className='new-expense'>
        {!openAddForm && <button onClick={openFormHandler}>Add Expense Item</button>}
        {openAddForm && <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler} cancel={closeOpenFormHandler}/>}
    </div>
}

export default NewExpense;