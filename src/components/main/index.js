import {useState,useEffect} from 'react'
import NavBar from '../navBar';
import PageContent from '../pageContent'

 
const  BASE_API= 'http://localhost:3000/api';
const API_PRODUCT = '/products'

function Main(){

  return(
    <>
     
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <PageContent/>
          
        </div>
      </div>
        


    
    </>


  );

}export default Main;