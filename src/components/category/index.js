import {useState,useEffect} from 'react'
import CategoryCard from './categoryCard'

function Category() {
    
    
  return(
      
    
		
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <CategoryCard/>
                    </div>
                </div>
            </div>
        </div>
  
    			

     
  
  
  
  );  
    
}export default Category