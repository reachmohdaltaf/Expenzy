/* eslint-disable react/prop-types */
import Button from "./Button";

const TopBoard = ({ onBudgetSubmit, resetBtn, budget, today, onExpenseSubmit }) => {

    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        const today = e.target[0].value;
        const amount = e.target[1].value;
        const budget = {today, amount}
        onBudgetSubmit(budget); // yha se home mai gya amount
        e.target[1].value = "";
    };

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value; // First input for title
        const amount = e.target[1].value; // Second input for amount

        const expense = {
            title, // Add title to expense object
            amount: Number(amount), // Convert amount to number
        };
        onExpenseSubmit(expense); // Send expense object to parent
        e.target[0].value = "";
        e.target[1].value = "";
    };

  

    return (
        <div className="flex h-fit gap-20  justify-center items-center">
            {/* Budget Form */}
            <form
                onSubmit={handleBudgetSubmit}
                className="Budget w-[30%] border bg-white h-full p-4 shadow-sm flex flex-col gap-4"
            >

                <h3 className="font-mono text-xl text-zinc-800">Date:</h3>
                <input
                    type="text"
                    className="p-2 bg-white border "
                    value={today} disabled
                />



                <h3 className="font-mono text-xl text-zinc-800">Budget:</h3>
                <input
                    type="text"
                    className="p-2 bg-gray-100 focus:bg-white"
                    placeholder={budget? "Re-Enter Amount" : "Enter Amount"}
                />
                <div className="flex gap-3">
                <Button value={"Add"}/>
                <button onClick={resetBtn} className="active:scale-95 bg-red-500 rounded-lg pr-2 pl-2 hover:bg-red-600 text-white ">reset </button>
                </div>
            </form>

            {/* Expense Form */}
            <form
                onSubmit={handleExpenseSubmit}
                className="Budget w-[30%] border bg-white h-fit p-4 shadow-sm flex flex-col gap-4"
            >
                <h3 className="font-mono text-xl text-zinc-800">Title:</h3>
                <input
                    type="text"
                    className="p-2 bg-gray-100 focus:bg-white"
                    placeholder="Enter Title"
                    required
                />
              <h3 className="font-mono text-xl text-zinc-800">Expenses:</h3>

                <input
                    type="text"
                    className="p-2 bg-gray-100 focus:bg-white"
                    placeholder="Enter Amount"
                    required
                />
                <Button value={"+ Add"}/>
            </form>
        </div>
    );
};

export default TopBoard;
