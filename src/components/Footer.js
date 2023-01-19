import React from 'react'

const Footer = () => {
    return (
        <div className='w-full px-52 bg-[#00040F] flex-row justify-center items-center pt-20 text-white'>
            <div className='py-20'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col gap-8'>
                        <img src='./assets/images/logo.png' className='w-64'></img>
                        <text className='opacity-70'>A new way to make the payments<br/>easy, reliable and secure.</text>
                    </div>
                    <div className='flex flex-col gap-3 items-start'>
                        <button className='mb-3'>Usefull Links</button>
                        <button className='opacity-70 hover:opacity-100'>Content</button>
                        <button className='opacity-70 hover:opacity-100'>How it Works</button>
                        <button className='opacity-70 hover:opacity-100'>Create</button>
                        <button className='opacity-70 hover:opacity-100'>Explore</button>
                        <button className='opacity-70 hover:opacity-100'>Terms & Services</button>
                    </div>
                    <div className='flex flex-col gap-3 items-start'>
                        <button className='mb-3'>Community</button>
                        <button className='opacity-70 hover:opacity-100'>Help Center</button>
                        <button className='opacity-70 hover:opacity-100'>Partners</button>
                        <button className='opacity-70 hover:opacity-100'>Suggestions</button>
                        <button className='opacity-70 hover:opacity-100'>Blog</button>
                        <button className='opacity-70 hover:opacity-100'>Newsletters</button>
                    </div>
                    <div className='flex flex-col gap-3 items-start'>
                        <button className='mb-3'>Partner</button>
                        <button className='opacity-70 hover:opacity-100'>Our Partner</button>
                        <button className='opacity-70 hover:opacity-100'>Become a Partner</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer