import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-500'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I am Bipul. Its nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As a recent graduate student in Cyber Security Engineering, my journey into the world of technology started from a young age with a simple fascination for computers. This early interest has blossomed into a deep commitment to a career in cybersecurity. I'm captivated by the ever-evolving tech landscape and the growing challenges posed by cyber threats. What excites me most is the opportunity to tackle these threats, solve complex security problems, and protect important information. I aspire to use my skills in a role where I can keep learning, make a meaningful impact, and help advance cybersecurity. For me, this field is not just a career choice—it's a way to satisfy my curiosity and make a real difference in our increasingly digital world.
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;