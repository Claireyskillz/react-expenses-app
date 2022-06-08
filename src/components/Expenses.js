import ExpenseItem from './ExpenseItem';
import ExpenseDate from './ExpenseDate';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div className="expenses">
        <ExpenseDate 
        date={props.date}/>
        <ExpenseItem
        title={props.title}
        amount={props.amount}
        />
        </div>
    );
   
   }
   
   export default Expenses;
   