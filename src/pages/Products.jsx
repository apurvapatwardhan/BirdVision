import { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'
import useProducts from '../utils/useProducts'
import getLimitAndSkip from '../utils/getLimitandSkip'
import { NavLink } from 'react-router-dom'
import getPage from '../utils/getPage'
import Shimmer from '../components/Shimmer'

const Products = () => {
  const { page, setPage } = useContext(AppContext)
  const { limit, skip } = getLimitAndSkip(page)
  const products = useProducts(limit, skip);

 

  return (
    <div className="mx-16  border border-black">
      <div className="mx-10">
        <h2 className="text-black font-bold text-6xl text-center">Products</h2>
        <div className='text-center mt-10'>
        <button className='text-3xl' onClick={() => {
            const pg = getPage(page + 1);
            setPage(pg)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        </div>
        <div className="grid grid-cols-2 mt-10">
          {products.length == 0 ? <Shimmer /> : (products.map((product) => {
            const id = product.id
            return (
              <NavLink key={id} className="inline-block" to={`/products/${id}`}>
                <div className="flex flex-col gap-3 items-center border-2 justify-center px-8 py-4">
                  <h3 className="font-bold text-3xl">{product.title}</h3>
                  <p>Price Rs: {product.price}</p>
                  <img className="h-48" src={product.thumbnail}></img>
                </div>
              </NavLink>
            )
          }))}
        </div>
        
      </div>
    </div>
  )
}

export default Products
