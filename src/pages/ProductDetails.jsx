import { useParams } from 'react-router'
import useProductDetails from '../utils/useProductDetails'

const ProductDetails = () => {
  const { productId } = useParams()
  const product = useProductDetails(productId);
  if(Object.keys(product).length == 0) {
    return <p  className=' px-4 py-2 mx-2 my-2 w-[100vw] animate-pulse h-[100vh] bg-gray-300 '></p>
  }
  const rating = product?.rating ? Math.floor(product?.rating) : 0;
  const ratingArray = new Array(rating).fill(0);
  console.log(product)
  return (
    <div className="mx-20 my-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-8xl font-bold">{product?.title}</h2>
        <h4 className="text-6xl font-semibold">{product?.description}</h4>
        <p className="text-4xl font-semibold">{product?.brand}</p>
        <p className="text-4xl font-semibold">{product?.category}</p>
        <p className="text-3xl font-semibold">Price is {product?.price}</p>
        {product?.discountPercentage ? (
          <p className="text-3xl font-semibold">
            Discount is {product?.discountPercentage}
          </p>
        ) : null}
        <p className='flex'>
          {ratingArray.map((rate, idx) => {
            return (
              <span key={idx}><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-yellow-400"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg> </span>
            )
          })}
        </p>
        {
          <div className="grid grid-cols-3 gap-4">
            {product?.images?.map((image, idx) => {
              return <img className="h-40" key={idx} src={image}></img>
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default ProductDetails
