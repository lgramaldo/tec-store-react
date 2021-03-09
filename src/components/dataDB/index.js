import {useState,useEffect} from 'react'


function DataDB() {
  
  const [orders, setOrders]=useState([]);
  const [items, setItems]=useState([]);
  useEffect (()=>{
          
    fetch("http://localhost:3000/api/orders") 
    .then(res => res.json())
    .then (data =>{
         
          setOrders(data.data.orders);
          setItems(data.data.items)
          console.log(data.data.orders);
           
          })
       
    
    },[]);

    
  return(
      
    
		
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Last Sales</h6>
          </div>
        <div className="card-body">
            <div className="text-center">
             
            </div>
            <ul>
             {items.map(({name},i)=><li key={i}>{name}</li>)}
             
             </ul>
            
          </div>
        </div>
      </div>
    
    			

     
  
  
  
  );  
    
}export default DataDB