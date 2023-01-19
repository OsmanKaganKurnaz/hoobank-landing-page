import React from 'react'

const Billing = () => {
  return (
    <div className='pt-32 px-52 flex w-full bg-[#00040F] flex-row justify-between items-center '>
      <img src='./assets/images/business-component.png' className='w-[700px]'></img>
      <div className='flex flex-col gap-6'>
        <text className='font-semibold text-5xl text-white'>Easily control your<br />billing & invoicing.</text>
        <text className='font-normal text-lg opacity-70 text-white'>Elit enim sed massa etiam. Mauris eu adipiscing<br />ultrices ametodio aenean neque. Fusce ipsum orci<br />rhoncus aliporttitor integer platea placerat.</text>
        <div className='flex flex-row gap-8 pt-4'>
          <button>
            <img src='./assets/images/app-store-button.png' className='w-32 h-[42px]'></img>
          </button>
          <button>
            <img src='./assets/images/google-play-button.png' className='w-32 h-[42px]'></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billing