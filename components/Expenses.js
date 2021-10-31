
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from './Card'
function Expense(props)
{
    return <Card className="expenses">
         <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount}
      date={props.items[0].date}></ExpenseItem>
      <ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount}
      date={props.items[1].date}></ExpenseItem>
    </Card>
}
export default Expense;