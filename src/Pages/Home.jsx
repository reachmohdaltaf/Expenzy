import { useState, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";
import OutputContainer from "../components/OutputContainer";
import TopBoard from "../components/TopBoard";
import toast from "react-hot-toast";
import ExpenseChart from "../components/ExpenseChart";



const Home = () => {
  const today = new Date().toISOString().split("T")[0];

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [alertShown, setAlertShown] = useState(false);

//  yha hai local storage 
  useEffect(() => {
    const storedBudget = localStorage.getItem("budget");
    const storedExpenses = localStorage.getItem("expenses");

    if (storedBudget) {
      setBudget(Number(storedBudget)); 

    }
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses)); 
    }
  }, []);




  useEffect(() => {
    if (budget) {
      localStorage.setItem("budget", budget); 
    }
  }, [budget]);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses)); 
    }
  }, [expenses]);

  const handleBudget = (budget) => {
    if (isNaN(budget.amount) || budget.amount < 0) {
      toast.error(" Enter your new budget !")
    }
    setBudget(Number(budget.amount));
    {budget.amount? toast.success(`Your budget is ${budget.amount}`) : 
    toast.success("your budget is reset to 0")}

  };

  const handleExpense = (expense) => {
    if (isNaN(expense.amount) || expense.amount < 0) {
      toast.error("Please enter a Amount");
      return;
    }
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteBtnHandler = (index)=>{
    setExpenses((prevExpenses)=>{
      const updatedExpenses = prevExpenses.filter((_,i)=> i!==index);
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); 
      console.log(updatedExpenses)
      return updatedExpenses;
    })
  }

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = budget - totalExpenses;

  useEffect(() => {
    if (balance === 0  && totalExpenses > 0 && !alertShown) {
      toast.success("Payissa khatm !");
      setAlertShown(true);
    }
  }, [alertShown, balance, totalExpenses]);

  const resetBtn = ()=>{
       setBudget(0)
 localStorage.removeItem("budget"); // Remove the budget from localStorage
  }

  const resetList =()=>{
    setExpenses([])
    localStorage.removeItem("expenses"); // Remove the expennses from localStorage
    toast.success('your Expenses are cleared')

  }

  return (
    <div className="lg:w-[80%] sm:w-[100%] overflow-y-scroll relative shadow-sm bg-gray-200">
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div className="Container p-4">
        <TopBoard resetBtn={resetBtn} today={today} onBudgetSubmit={handleBudget}  onExpenseSubmit={handleExpense} budget={budget} />
        <OutputContainer budget={budget} expenses={expenses} balance={balance} />
        <ExpenseList resetList={resetList} totalExpenses={totalExpenses} deleteBtnHandler={deleteBtnHandler} today={today} expenses={expenses} budget={budget} />
        <ExpenseChart budget={budget} expenses={expenses} />
        </div>
    </div>
  );
};

export default Home;
