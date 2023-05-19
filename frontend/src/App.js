import { useEffect, useState } from "react";
import { getProductTypes } from "./services/ProductTypeServices";
import MainContainer from "./containers/MainContainer";
// import './index.css'

function App() {
  const [productData, setProductData] = useState([]);
  // useEffect(() => {
  
  //   const gettingProductTypes = async () => {
  //     const allProductTypes = await getProductTypes();
  //     setProductData(allProductTypes);
  //   }
  
  //   gettingProductTypes();

  // }, []);

  return (
    <div className="App">
      <MainContainer/>
    </div>
  );
}

export default App;
