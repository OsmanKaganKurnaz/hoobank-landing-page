import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <div className='flex justify-center pt-[100px] px-52 bg-[#00040F] w-full'>
        <div className='flex flex-row items-center rounded-3xl bg-gradient-to-bl from-[#68676d] to-[#14101D] w-full justify-between py-16 px-24'>
            <div className='flex flex-col gap-6'>
                <text className='font-semibold text-5xl text-white'>Let’s try our service now!</text>
                <text className='font-normal text-lg opacity-70 text-white'>Everything you need to accept card payments<br/>and grow your business anywhere on the planet.</text>
            </div>
            <Button/>
        </div>
    </div>
  )
}

export default CTA