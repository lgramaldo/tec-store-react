import {useState,useEffect} from 'react'
import Metrica from '../metrica';
import DataDB from '../dataDB';
import Category from '../category'
import '../../App.css'
 
const cardData = [
    {
  
      name: "Products in Data Base",
      textColor: "text-xs font-weight-bold text-primary text-uppercase mb-1",
      info: 135,
      icon: "fas fa-clipboard-list fa-2x text-gray-300"
  
    },
  
    {
  
      name: "Amount in products" ,
      textColor: "text-xs font-weight-bold text-success text-uppercase mb-1",
      info: 546456,
      icon: "fas fa-dollar-sign fa-2x text-gray-300"
  
    },
  
    {
  
      name: "Users quantity",
      textColor: "text-xs font-weight-bold text-warning text-uppercase mb-1",
      info: 38,
      icon: "fas fa-user-check fa-2x text-gray-300"
  
    }
  
];

function pageContent(){

  return(
    <>
     
        <div className="container-fluid">
        
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
          <div className="row"> 
            <Metrica name={cardData[0].name} textColor={cardData[0].textColor} info={cardData[0].info} icon={cardData[0].icon} />     
            <Metrica name={cardData[1].name} textColor={cardData[1].textColor} info={cardData[1].info} icon={cardData[1].icon} /> 
            <Metrica name={cardData[2].name} textColor={cardData[2].textColor} info={cardData[2].info} icon={cardData[2].icon} /> 
            <DataDB/>
            <Category/>
          </div>
        </div>        
    
    </>


  );

}export default pageContent;