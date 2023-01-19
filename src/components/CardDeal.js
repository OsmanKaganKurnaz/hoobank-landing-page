import React from 'react'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className='flex flex-row w-full px-52 justify-between bg-[#00040F] pt-44 items-center'>
        <div className='flex flex-col items-start gap-6'>
            <text className='text-white font-semibold text-5xl'>Find a better card deal<br/>in few easy steps.</text>
            <text className='text-white opacity-70 pb-6'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet<br/>quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</text>
            <Button/>
        </div>
        <img src='./assets/images/card-deal-component.png' className='w-[512px]'></img>
    </div>
  )
}

export default CardDeal