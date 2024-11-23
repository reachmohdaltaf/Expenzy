import Home from "./Pages/Home"
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/About",
    element: <About/>
  },
])

const App = () => {
  return (
    <div className=" w-[100%] h-screen bg-[#537EF8]  flex justify-center">
          <RouterProvider router={router}>
        <Toaster
  toastOptions={{
    error: {
      style: {
        background: "#537EF8", // Sleek black background
        color: "#ffffff", // Crisp white text
        fontSize: "16px", // Readable font size
        fontWeight: "500", // Medium-weight for text
        borderRadius: "12px", // Smooth rounded corners
        padding: "16px 24px", // Spacious padding
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Elegant shadow for depth
        border: "1px solid #ffffff", // Thin white border for sharp contrast
      },
      iconTheme: {
        primary: "#ffffff", // White icon color
        secondary: "#537EF8", // Black background for the icon
      },
      duration: 1200, // Custom duration (in milliseconds), e.g., 5000ms = 5 seconds
    },
    success: {
      style: {
        background: "#537EF8", // Sleek black background
        color: "#ffffff", // Crisp white text
        fontSize: "16px", // Readable font size
        fontWeight: "500", // Medium-weight for text
        borderRadius: "12px", // Smooth rounded corners
        padding: "16px 24px", // Spacious padding
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Elegant shadow for depth
        border: "1px solid #ffffff", // Thin white border for sharp contrast
      },
      iconTheme: {
        primary: "#ffffff", // White icon color
        secondary: "#537EF8", // Black background for the icon
      },
      duration: 1200, // Custom duration (in milliseconds), e.g., 5000ms = 5 seconds
    },
  }}
/>

</RouterProvider>

    </div>
  )
}

export default App