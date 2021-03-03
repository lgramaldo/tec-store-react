import {useState, useEffect}  from "react";




function Metrica() {
    
    const [products, setProducts]=useState(null);

    useEffect (()=>{
    fetch('http://localhost:3000/api/products') 
    .then(res => res.json())
    .then (data =>{
           setProducts(data.data.products);
           console.log(data);
           
          
          }
    )
  
   
    
    },[]);
    
    
 
  return(
      
      <>
               
              {products && products.map(product=>product.name) }
              
      </>

   );
    
}
export default Metrica;
