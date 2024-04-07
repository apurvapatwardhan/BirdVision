import PropTypes from "prop-types"

const Shimmer = () => {
    const arr = new Array(10).fill(10);
  return (
    <>{
        arr.map((ele, idx) => {
            return <p key={idx} className=' px-4 py-2 mx-2 my-2 w-180 animate-pulse h-80 bg-gray-300 '></p>
        })
    }</>
    
  )
}

Shimmer.propTypes = {
    nums: PropTypes.number
}

export default Shimmer
