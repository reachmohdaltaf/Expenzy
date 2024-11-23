    /* eslint-disable react/prop-types */

    const ExpenseList = ({expenses, deleteBtnHandler, totalExpenses, today}) => {
    const deleteBtn = (index)=>{
        deleteBtnHandler(index)
    }
    return (
        <div className="flex justify-center">
        <div className="ExpenseList p-3 bg-white shadow-sm mt-10  w-[70%]">
            <h3 className="font-bold">Expense List</h3>
            <ul className="">
                {expenses.map((expense, index)=>(
                    <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
                    <span className="w-[200px]">{expense.title}</span>
                    <span className="font-bold w-[200px] text-red-500">amount: ${expense.amount}</span>
                    <p>{today}</p>
                    <button onClick={()=>deleteBtn(index)} className="Delete bg-red-500 p-3 rounded-lg text-white hover:bg-red-600">Delete</button>
                    </li>  
                ))}
            
            </ul>
            <div className="flex justify-between  item-center p-4">
            <div className="total bg-[#53f892] w-full h-full p-1  font-bold">total:</div>
            <div className="p-1 bg-emerald-800 text-white">${totalExpenses}</div>

            </div>

        </div>
        </div>
    )
    }

    export default ExpenseList
