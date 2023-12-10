import React from 'react';
import Servicenow from '../assets/servicenow.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Angular from '../assets/angular.png';
import Snort from '../assets/snort.png';
import Splunk from '../assets/splunk.png';
import Vmware from '../assets/vmware.png';
import Kali from '../assets/kali.png';
import Wireshark from '../assets/wireshark.png';
import Nmap from '../assets/nmap.png';
import Metasploit from '../assets/metasploit.png';
import Clam from '../assets/clam.png';
import Burp from '../assets/burp.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-green-500 '>Skills</p>
              <p className='py-4'> I have extensive experience with the following technologies from past projects and roles:"</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                  <p className='my-4'>AngularJs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='max-w-2 max-h-16 mx-auto' src={Servicenow} alt="HTML icon" />
                  <p className='my-4'>ServiceNow</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='max-w-2 max-h-16 mx-auto' src={Snort} alt="HTML icon" />
                  <p className='my-4'>Snort</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='max-w-2 max-h-16 mx-auto' src={Splunk} alt="HTML icon" />
                  <p className='my-4'>Splunk</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='max-w-2 max-h-16 mx-auto' src={Vmware} alt="HTML icon" />
                  <p className='my-4'>VMWare</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Kali} alt="HTML icon" />
                  <p className='my-4'>Kali Linux</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Wireshark} alt="HTML icon" />
                  <p className='my-4'>Wireshark</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Metasploit} alt="HTML icon" />
                  <p className='my-4'>Metasploit</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nmap} alt="HTML icon" />
                  <p className='my-4'>NMap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Clam} alt="HTML icon" />
                  <p className='my-4'>Clam AV</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Burp} alt="HTML icon" />
                  <p className='my-4'>Burp Suite</p>
                </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;