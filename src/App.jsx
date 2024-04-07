import { Route, Routes } from 'react-router'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import ErrorBoundary from './pages/ErrorBoundary'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Products />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path="/products/:productId"
          element={
            <ErrorBoundary>
              <ProductDetails />
            </ErrorBoundary>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default App
