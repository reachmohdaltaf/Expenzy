import { useState, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";
import OutputContainer from "../components/OutputContainer";
import TopBoard from "../components/TopBoard";
import toast from "react-hot-toast";


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
    if (expenses.length >= 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses)); 
    }
  }, [expenses]);

  const handleBudget = (budget) => {
    if (isNaN(budget.amount) || budget.amount < 0) {
      toast.error("Please Amount in numbers")
      return;
    }
    setBudget(Number(budget.amount));
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
      return updatedExpenses;
    })
  }

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = budget - totalExpenses;

  useEffect(() => {
    if (balance === 0  && totalExpenses > 0 && !alertShown) {
      toast.success("Payissa khatm !");
      setAlertShown(true);
    }else if(balance < 0){
      toast.success("Your Account Balance is Zero Now !")
    }
  }, [balance]);

  const resetBtn = ()=>{
       setBudget(0)
       toast.success("Your Account Balance is Zero !")

       
  }

  return (
    <div className="w-[80%] overflow-y-scroll relative shadow-sm bg-gray-200">
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div className="Container p-4">
        <TopBoard resetBtn={resetBtn} today={today} onBudgetSubmit={handleBudget}  onExpenseSubmit={handleExpense} budget={budget} />
        <OutputContainer budget={budget} expenses={expenses} balance={balance} />
        <ExpenseList deleteBtnHandler={deleteBtnHandler} today={today} expenses={expenses} budget={budget} />
      </div>
    </div>
  );
};

export default Home;
