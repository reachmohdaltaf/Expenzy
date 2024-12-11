    /* eslint-disable react/prop-types */

    import { GrPowerReset } from "react-icons/gr";
    import { RiDeleteBin5Fill } from "react-icons/ri";


    
    const ExpenseList = ({expenses, resetList, deleteBtnHandler, totalExpenses, today}) => {
    const deleteBtn = (index)=>{
        deleteBtnHandler(index)
    }
    return (
        <div className="flex justify-center">
        <div className="ExpenseList p-3 bg-white shadow-sm mt-10 sm:w-[100%] w-[100%] lg:w-[70%]">
          <div className="flex gap-2 items-center justify-between   ">  <h3 className="font-bold">Expense List</h3><button onClick={resetList} className="bg-purple-500 rounded-lg hover:bg-purple-600 active:scale-95 flex items-center gap-1 text-white p-2">Reset List <GrPowerReset />
          </button></div>
            <ul className="">
                {expenses.map((expense, index)=>(
                    <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
                    <span className="w-[200px]">{expense.title}</span>
                    <span className="font-bold w-[200px] text-red-500">amount: ${expense.amount}</span>
                    <p>{today}</p>
                    <button onClick={()=>deleteBtn(index)} className="Delete bg-red-500 p-3 rounded-lg text-white hover:bg-red-600"><RiDeleteBin5Fill />
                    </button>
                    </li>  
                ))}
            
            </ul>
            <div className="flex justify-between  item-center p-4">
            <div className="total bg-[#53f892] w-full h-full p-1  font-bold">TOTAL:</div>
            <div className="p-1 bg-emerald-800 text-white">${totalExpenses}</div>

            </div>

        </div>
        </div>
    )
    }

    export default ExpenseList
