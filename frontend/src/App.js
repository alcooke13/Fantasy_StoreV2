import { useEffect, useState } from "react";
import Button from "./components/Button";
import { getProductTypes } from "./services/ProductTypeServices";


function App() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
  
    const gettingProductTypes = async () => {
      const allProductTypes = await getProductTypes();
      setProductData(allProductTypes);
    }
  
    gettingProductTypes();

  }, []);
  
  const items = productData.map((item) => {
    return <li key={item.id}>{item.typeName}</li>
  })

  return (
    <div className="App">
      <h1>TESTING</h1>
      <ul>
        {items}
      </ul>
      <Button>Does This WORK</Button>
    </div>
  );
}

export default App;
