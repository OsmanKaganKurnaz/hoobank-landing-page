import React from 'react'

const Hero = () => {
    return (
        <div className='flex-col w-full flex pl-52 bg-[#00040F] overflow-hidden'>
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='flex flex-col gap-2 relative'>
                    <div className='rounded-lg pl-3 w-96 h-10 bg-gradient-to-tr from-[#272727] to-[#11101D] flex items-center gap-2 justify-start'>
                        <img src='./assets/icons/percent-icon.png' className='w-10'></img>
                        <text className='text-white'>20% <span className='text-gray-500'>DISCOUNT FOR</span> 1 MONTH ACCOUNT</text>
                    </div>
                    <div className='text-white text-7xl font-semibold leading-normal'>
                        The Next<br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0caec7] to-[#a0d9db]'>Generation</span><br />Payment Method.
                    </div>
                    <button className='hover:border-[#a0d9db] font-semibold hover:text-[#a0d9db] justify-center transition-colors leading-relaxed items-center text-start absolute border-2 text-[#0caec7] border-[#0caec7] flex rounded-full w-36 h-36 top-16 right-4'>
                        Get<br />Started
                        <img src='./assets/icons/arrow-up.png' className='absolute w-9 right-8 top-10'></img>
                    </button>
                    <div className='text-opacity-70 pt-6 text-lg leading-relaxed text-white'>
                        Our team of experts uses a methodology to identify<br />the credit cards most likely to fit your needs.<br />We examine annual percentage rates, annual fees.
                    </div>
                </div>
                <div className='w-[850px]'>
                    <img src='./assets/images/robot-hand.png' className='flex relative -top-20 -right-[4.5rem] w-full'></img>
                </div>
            </div>
            <div className='justify-center pt-5 gap-60 pr-60 pb-5 text-white flex'>
                <text className='text-xl flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0caec7] to-[#a0d9db]'><span className='text-4xl pr-6 text-white'>3800+</span>USER ACTIVE</text>
                <text className='text-xl flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0caec7] to-[#a0d9db]'><span className='text-4xl pr-6 text-white'>230+</span>TRUSTED BY COMPANY</text>
                <text className='text-xl flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0caec7] to-[#a0d9db]'><span className='text-4xl pr-6 text-white'>$230M+</span>TRANSACTION</text>
            </div>
        </div>
    )
}

export default Hero