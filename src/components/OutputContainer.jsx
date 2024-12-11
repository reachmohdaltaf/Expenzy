/* eslint-disable react/prop-types */

const OutputContainer = ({budget, expenses, balance}) => {

   
  return (
    <div className="flex justify-center">
    <div className="bg-[#537EF8] mt-10  lg:w-[70%] flex  justify-between h-fit w-[100%] sm:w-full p-4  lg:p-6  text-white">
      <div className="TotalBudget">
        <h3>Total Budget</h3>
        <p>${budget}</p>
      </div>
      <div className="Expenses">
        <h3>Expenses</h3>
        <p>{expenses.length}</p>
      </div>
      <div className="Balance">
        <h3>Balance</h3>
        <p>${balance}</p>
      </div>
    </div>
    </div>
  )
}

export default OutputContainer
