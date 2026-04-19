import { useCallback, useEffect } from "react"
import { api } from "./services/ecommerceAPI"

function App() {

  const getProducts = useCallback(async () => {
    const prod =  await api.get("/products");

    console.log(prod);
  }, []);

  useEffect(() => { 
    getProducts();
  })

  return (
    <>
      <h1>
        teste
      </h1>
    </>
  )
}

export default App
