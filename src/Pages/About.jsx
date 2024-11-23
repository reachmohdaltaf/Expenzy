import Navbar from "../components/Navbar"

const About = () => {
  return (
      <div className="  w-[80%] overflow-y-scroll relative shadow-sm bg-gray-200">
        <div className="sticky top-0"><Navbar/>
        </div>
        <div className="flex p-10  justify-center">
        <section className="max-w-4xl  p-4">
        <h1 className="text-5xl font-extralight text-center mb-6">About Expense Tracker</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the Expense Tracker, your go-to solution for managing and tracking your personal finances. 
          Our app helps you monitor your expenses, categorize them, and stay within your budget.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you are tracking small daily purchases or larger monthly expenses, this tool offers you 
          a simple and intuitive way to stay on top of your finances.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Key Features:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
          <li>Track expenses and income in real-time.</li>
          <li>Visualize your spending with easy-to-read charts.</li>
          <li>Set monthly budgets and receive alerts when you go over.</li>
          <li>Categorize your expenses for better financial insight.</li>
        </ul>

        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700">
            Built with React and Tailwind CSS, the Expense Tracker ensures a smooth, responsive, and modern experience for users. 
            We hope this tool helps you make better financial decisions and improve your financial health.
          </p>
        </div>
      </section>

        </div>
    </div>
  )
}

export default About
