import React, { useState } from 'react'
import Menu from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../../node_modules/bootstrap/dist/js/bootstrap.js'


function Galleryreact() {
    const [items,setItems]=useState(Menu);

    const filterItem=(categItem)=>{
        const updatedItems=Menu.filter((curElem)=>{
            return curElem.category===categItem;
        });
        setItems(updatedItems);
    }

  return (
    <>
    <h1 className="mt-5 text-center main-heading">Gallery of services</h1>
    <hr/>
    <div className="menu-tabs container">
        <div className='menu-tab d-flex justify-content-around'>
            <button className="btn btn-warning" onClick={()=>filterItem("DJ")}>DJ</button>
            <button className="btn btn-warning"  onClick={()=>filterItem("catering")}>catering</button>
            <button className="btn btn-warning" onClick={()=>filterItem("decoration")}>decoration</button>
            <button className="btn btn-warning" onClick={()=>setItems(Menu)}>All</button>
            <button className="btn btn-warning" onClick={()=>filterItem("photography")}>photography</button>
            <button className="btn btn-warning" onClick={()=>filterItem("Marriagehall")}>Marriage hall</button>
        </div>
    </div>

    {/* our main items list will come here */}
    <div className="menu-items container-fluid mt-5">
        <div className='row'>
            <div className='col-11 mx-auto'>
                <div className='row my-5'>
                    {  
                      items.map((elem)=>{
                        const {id,name,image,description,price} =elem;
                        return( <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5' key={id}>
                        <div className='row Item-inside' >
                            <div className='col-12 col-md-12 col-lg-4 img-div'>
                                <img src={image} alt={name} className='img-fluid'/>
                            </div>
                            <div className='col-12 col-md-12 col-lg-8'>
                                <div className='main-title pt-4 pb-3'>
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                </div>
                                <div className='menu-price-book'>
                                    <div className='price-book-divide d-flex justify-content-between'>
                                        <h2>{price}</h2>

                                    </div>
                                    <p>Price may very</p>
                                </div>
                            </div>

                        </div>
                    </div>)
                      })


                    }
                   
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Galleryreact
