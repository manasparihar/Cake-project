import React from 'react';
import '../font.css';
import {CupCake} from './Cake'
import {Bread} from './Cake'
import Icon_slider from '../Icon_slider/Icon_slider';
import './Shop.css';
import {Cake} from './Cake'
import { Donut } from './Cake';
import { Cookies } from './Cake';
import { Rolls } from './Cake';
const Shop = () => {
  return (
    <>
    <div className='container-fluid'>
    
    <div className="  About__Page__Header About_Main_Img text-white container-fluid " >
                <div className=" About__Page__Header page-header py-5 mb-5 container-fluid">
                    <div className="container py-5">
                        <h1 className="display-2 text-white"> Our Products</h1>
                    </div>
                </div>
            </div>
            <Icon_slider />
            <Cake/>
            <CupCake />
            <Bread />
            <Cookies />
            <Donut />
<Rolls />
</div>
                          

          
            
        
    </>
  );
}

export default Shop;
