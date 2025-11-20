import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-4 fs-2'>Trust with confidence</h1>
                    <h3 className='fs-4 p-1'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h3 className='fs-4 p-1'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#' style={{textDecoration:"none"}}>Our philosophies</a>.</p>

                    <h3 className='fs-4 p-1'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4 p-1'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like <a href='#' style={{textDecoration:"none"}}>Nudge</a> and <a href='#' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                
                </div>
                <div className='col-6'>
                    <img src='media/ecosystem.png' style={{ width: "90%" }}></img>
                    <div>
                        <a href='#' style={{ textDecoration: "none" }} className='p-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        
                        <a href='#' style={{textDecoration:"none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;