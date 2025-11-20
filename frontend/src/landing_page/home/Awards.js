import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1>Larget stock broker in India</h1>
                    <p className='mb-4'>2+ millionZerodha clients contibute to over 50% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                        <li>
                           <p>Bonds and Gov. Securities</p>
                        </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;