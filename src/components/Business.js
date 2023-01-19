import React from 'react'
import Button from './Button'

const Business = () => {
    return (
        <div className='bg-[#00040F] pt-32 px-52'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col gap-6'>
                    <text className='text-5xl font-semibold leading-relaxed text-white'>You do the business,<br />we’ll handle the money.</text>
                    <text className='text-white text-opacity-70'>With the right credit card, you can improve your financial life by<br />building credit, earning rewards and saving money. But with<br />hundreds of credit cards on the market.</text>
                    <Button/>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-row gap-5 justify-center items-center w-[480px] hover:bg-gradient-to-br from-[#68676d] to-[#14101D] py-6 px-6 rounded-lg'>
                        <img src='./assets/icons/star-icon.png' className='w-16 h-16'></img>
                        <div className='flex flex-col gap-1'>
                            <text className='font-bold text-lg text-white'>Rewards</text>
                            <text className='text-white text-opacity-70'>The best credit cards offer some tantalizing<br />combinations of promotions and prizes</text>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 justify-center w-[480px] px-6 items-center hover:bg-gradient-to-br from-[#68676d] to-[#14101D] py-6 rounded-lg'>
                        <img src='./assets/icons/secure-icon.png' className='w-16 h-16'></img>
                        <div className='flex flex-col gap-1'>
                            <text className='font-bold text-lg text-white'>100% Secured</text>
                            <text className='text-white text-opacity-70'>We take proactive steps make sure your<br />information and transactions are secure.</text>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 justify-center px-6 items-center py-6 w-[480px] hover:bg-gradient-to-br from-[#68676d] to-[#14101D] rounded-lg'>
                        <img src='./assets/icons/message-icon.png' className='w-16 h-16'></img>
                        <div className='flex flex-col gap-1'>
                            <text className='font-bold text-lg text-white'>Balance Transfer</text>
                            <text className='text-white text-opacity-70'>A balance transfer credit card can save<br />you a lot of money in interest charges.</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business