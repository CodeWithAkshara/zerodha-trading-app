import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mt-5 mb-4 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of dicount broking and price transparency in India. Flate feec and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center mt-5'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivey and <br></br>direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intrady and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;