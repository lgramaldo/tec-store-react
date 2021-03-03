import {useState,useEffect} from 'react'
 import NavBar from '../navBar';
 import Metrica from '../metrica';
 import DataDB from '../dataDB';
 
const  BASE_API= 'http://localhost:3000/api';
const API_PRODUCT = '/products'
function Main(){

return(
     <>
        <NavBar/>
        <Metrica/>
        <Metrica/>

        <DataDB/>
        


    
    </>


      );

}export default Main;