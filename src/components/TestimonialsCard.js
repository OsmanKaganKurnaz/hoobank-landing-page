import React from 'react'

const TestimonialsCard = ({ profilePhoto, description, name, position }) => {
    return (
        <div className='flex flex-col items-start py-[60px] px-10 hover:bg-gradient-to-br from-[#68676d] to-[#14101D] justify-between gap-8 rounded-3xl'>
            <img src='./assets/icons/card-icon.png' className='w-10'></img>
            <text className='w-72 pt-4 font-normal text-lg text-white'>{description}</text>
            <div className='flex flex-row items-center gap-4'>
                <img src={profilePhoto} className='w-12 h-12'></img>
                <div className='flex flex-col'>
                    <text className='font-normal text-xl text-white'>{name}</text>
                    <text className='font-normal text-base opacity-70 text-white'>{position}</text>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard