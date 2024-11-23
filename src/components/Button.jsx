/* eslint-disable react/prop-types */

const Button = ({value}) => {
  return (
    <div>
      <button className="bg-[#537EF8] hover:bg-[#3b62ce] p-2 rounded-lg text-gray-100">{value}</button>
    </div>
  )
}

export default Button
