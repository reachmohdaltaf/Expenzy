import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="  h-16 pl-4 pr-4 bg-white shadow-sm flex items-center justify-between">
       <div className="logo text-2xl ">
        <h3 className="text-[#537EF8] text-3xl font-bold">Expenzy</h3>
       </div>

        <div className="links flex items-center gap-10">
            <ul className="flex cursor-pointer gap-10">
            <Link to='/'> <li  className="hover:text-[#537EF8]  font-mono">Home</li></Link>
                <Link to='/About'> <li className="hover:text-[#537EF8]   font-mono">About</li></Link>
                <li className="hover:text-[#537EF8]  font-mono">Contact</li>
            </ul>
            <button className="h-full rounded-lg text-gray-200 hover:bg-[#476dd5]  outline-none transition-all  active:scale-90 p-2 bg-[#537EF8]  font-mono">Sign In</button>

        </div>

    </div>
  )
}

export default Navbar