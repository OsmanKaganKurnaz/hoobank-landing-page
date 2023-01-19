import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full text-base bg-[#00040F] px-52 flex py-6 justify-between items-center fixed z-10">
            <a href='https://www.youtube.com/'>
                <img src="./assets/images/logo.png" className="w-[124px] h-[32px]"></img>
            </a>
            <div className="text-white flex gap-14">
                <button className="hover:bg-white rounded hover:text-black p-2 transition-colors">Home</button>
                <button className="hover:bg-white rounded hover:text-black p-2 transition-colors">About Us</button>
                <button className="hover:bg-white rounded hover:text-black p-2 transition-colors">Features</button>
                <button className="hover:bg-white rounded hover:text-black p-2 transition-colors">Solution</button>
            </div>
        </div>
    );
}

export default Navbar