import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Navbar: React.FC = () => {
    return (
        <>
            <div className="
                h-16
                md:bg-gradient-to-r
              md:from-sky-500
              md:to-indigo-500
                md:text-3xl
                text-xl
                flex
                justify-center
                items-center
                font-[Poppins] 
                md:m-2 
                drop-shadow-2xl
                md:rounded 
                bg-gradient-to-r
                from-purple-500
               to-pink-500">
                PALS HUB &nbsp; <FiGithub />

            </div>

        </>
    )
}

export default Navbar