import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpenseChart = () => {
  const chartRef = useRef(null); // Canvas reference
  const chartInstance = useRef(null); // Chart instance reference

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a Line Chart
    chartInstance.current = new Chart(ctx, {
      type: 'line', // Line chart type
      data: {
        labels: ['January', 'February', 'March', 'April'], // X-axis labels
        datasets: [
          {
            label: 'Monthly Expenses', // Label for the dataset
            data: [500, 300, 400, 700], // Expense data
            fill: false, // No fill below the line
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            tension: 0.4, // Line curve tension
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
            pointRadius: 5, // Size of data points
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
          x: {
            title: {
              display: true,
              text: 'Months', // X-axis title
            },
          },
          y: {
            title: {
              display: true,
              text: 'Expenses (in USD)', // Y-axis title
            },
            beginAtZero: true, // Start Y-axis from zero
          },
        },
      },
    });
    
    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ExpenseChart;
