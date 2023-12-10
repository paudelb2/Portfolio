import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import handleClick from './Navbar';

const Home = () => {
    return (
      <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-green-500 font-bold'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Bipul Paudel
          </h1>
          
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Hi, my name is Bipul Paudel. I am a dedicated cybersecurity enthusiast with a strong background in software engineering. I've always been fascinated by technology and how to protect it. My journey in software engineering has given me a solid understanding of how technology works and the skills to solve complex problems. Currently, I'm expanding my knowledge by pursuing a Master's degree in Cyber Security Engineering. This is helping me dive deeper into the world of internet security and learn about protecting systems from cyber threats. I'm excited to blend my practical software skills with my growing cybersecurity expertise to make a real impact in this ever-evolving field.         </p>
          <div>
          <ul className='hidden md:flex'>
        <li>
         
        
        <Link to='work' smooth={true} duration={500}>          
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-500'>
                View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
            
            </Link>
            </li>
            </ul>

          </div>
        </div>
      </div>
    );
  };
  
  export default Home;