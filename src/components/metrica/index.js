import React  from "react";
import {useState, useEffect}from "react";



function Metrica(props) {
 

    
    
    
 
  return(
      
    
          <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className= {props.textColor}> {props.name} </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.info}</div>
                  </div>
                  <div className="col-auto">
                    <i className={props.icon}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>            
    
    




   );
    
}
export default Metrica;
    

