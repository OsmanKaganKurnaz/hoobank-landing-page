import React from 'react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
    return (
        <div className='flex flex-col bg-[#00040F] pt-40 px-52 w-full'>
            <div className='flex flex-col items-center gap-6'>
                <text className='text-white font-semibold text-5xl'>What people are saying about us ?</text>
                <text className='text-white font-normal text-lg opacity-70'>Everything you need to accept card payments and grow your business anywhere on the planet.</text>
                <div className='flex flex-row pt-8 gap-20'>
                    <TestimonialsCard profilePhoto={"./assets/images/profile-photo-1.png"} description={"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."} name={"Herman Jensen"} position={"Founder & Leader"}></TestimonialsCard>
                    <TestimonialsCard profilePhoto={"./assets/images/profile-photo-2.png"} description={"Money makes your life easier. If you're lucky to have it, you're lucky."} name={"Steve Mark"} position={"Founder & Leader"}></TestimonialsCard>
                    <TestimonialsCard profilePhoto={"./assets/images/profile-photo-3.png"} description={"It is usually people in the money business, finance, and international trade that are really rich."} name={"Kenn Gallagher"} position={"Founder & Leader"}></TestimonialsCard>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center pt-[100px] gap-[100px]'>
                <img src='./assets/images/airbnb-logo.png' className='w-48 hover:translate-x-2'></img>
                <img src='./assets/images/binance-logo.png' className='w-48 hover:translate-x-2'></img>
                <img src='./assets/images/coinbase-logo.png' className='w-48 hover:translate-x-2'></img>
                <img src='./assets/images/dropbox-logo.png' className='w-48 hover:translate-x-2'></img>
            </div>
        </div>
    )
}

export default Testimonials