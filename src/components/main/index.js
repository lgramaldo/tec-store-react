import {useState,useEffect} from 'react'
import NavBar from '../navBar';
import PageContent from '../pageContent'



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