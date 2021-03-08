import {useState,useEffect} from 'react'
import CategoryCard from './categoryCard'

const categoryNumber = [

    {
        category: "Categoria 1"
    },
    {
        category: "Categoria 2"
    },
    {
        category: "Categoria 3"
    },
    {
        category: "Categoria 4"
    },
    {
        category: "Categoria 5"
    }

]

function Category() {
    
    
  return(
      
    
		
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {categoryNumber.map(({category})=> <CategoryCard key={category} category={category}/>)}
                    </div>
                </div>
            </div>
        </div>
  
    			

     
  
  
  
  );  
    
}export default Category