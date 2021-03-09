import {useState,useEffect} from 'react'
import Metrica from '../metrica';
import DataDB from '../dataDB';
import Category from '../category'
import '../../App.css'
 
 


function PageContent(){


  const [products,setProducts]=useState([]);
  const [users,setUsers]=useState([]);

  useEffect (()=>{
      
    fetch("http://localhost:3000/api/products") 
    .then(res => res.json())
    .then (data =>{
          //setTotalProduct(data.data.products.length);
          setProducts(data.data.products);
          console.log(data.data.products);
           
          })
          
          fetch("http://localhost:3000/api/users") 
          .then(res => res.json())
          .then (data =>{
                //setTotalProduct(data.data.products.length);
                setUsers(data.data.users);
                console.log(data.data.users);
                 
                })
       
    
    },[]);
  
    
    const amountProducts= products.reduce((acumulador,valorActual)=>{
    return acumulador+= valorActual.price
    },0);
   
  
    const cardData = [
      {
    
        name: "Products in Data Base",
        textColor: "text-xs font-weight-bold text-primary text-uppercase mb-1",
        info:products.length,
        icon: "fas fa-clipboard-list fa-2x text-gray-300"
      
      },
    
      {
    
        name: "Amount in products" ,
        textColor: "text-xs font-weight-bold text-success text-uppercase mb-1",
        info:amountProducts,
        icon: "fas fa-dollar-sign fa-2x text-gray-300"
    
      },
    
      {
    
        name: "Users quantity",
        textColor: "text-xs font-weight-bold text-warning text-uppercase mb-1",
        info:users.length,
        icon: "fas fa-user-check fa-2x text-gray-300"
    
      }
    
  ];

  return(
    <>
     
        <div className="container-fluid">
        
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
          <div className="row"> 
            {cardData.map(({name, textColor, info, icon})=><Metrica key={name} name={name} textColor={textColor} info={info} icon={icon} />)} 
            <DataDB/>
            <Category/>
          </div>
        </div>        
    
    </>


  );

}export default PageContent;