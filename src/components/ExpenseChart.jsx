import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpenseChart = ({ budget, expenses }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    // Create a Bar Chart for Income vs Expenses
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Income', 'Expenses'], // Categories
        datasets: [
          {
            label: `Amount $${budget}`,
            data: [budget, totalExpenses], // Income (budget) and expenses
            backgroundColor: ['green', 'rgba(255, 99, 132, 0.6)'], // Bar colors
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'], // Border colors
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Position of the legend
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Start Y-axis from zero
            title: {
              display: true,
              text: 'Amount (in USD)', // Y-axis title
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [budget, expenses]); // Re-run when budget or expenses change

  return (
       <div className='  mt-10 px-20  flex justify-center'>
    <div className=' h-fit w-screen  border border-black bg-gray-100'>
      <canvas className=' h-full' ref={chartRef}></canvas>
    </div>
    </div>
   
  );
};

export default ExpenseChart;
