import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.png"
import serviceImg2 from "../assets/service2.png"
import serviceImg3 from "../assets/service3.jpg"
import serviceImg4 from "../assets/service4.jpg"



const Services = () => {
  return (
    <div className='bg-[#f7f8fc]' id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-herobg'>What we can do Together</h2>
          <p className='md:w-1/2 mx-auto'>Together, we’ll create a safe space to talk, reflect, and grow. Whether you're facing challenges or just need someone to listen, I’m here to support you every step of the way.</p>
        </div>

        {/* Service category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Individual Counseling</Tab>
              <Tab>Couples Counseling</Tab>
              <Tab>Family Counseling</Tab>
              <Tab>Group Counseling</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-red-400 mb-4'>Individual Counseling</h3>
                <p className='mb-8'>This involves one-on-one sessions between a client and a therapist. It focuses on personal issues like anxiety, depression, trauma, or self-growth. The goal is to help individuals better understand themselves and develop healthy coping mechanisms.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Personalized attention</li>
                  <li>Improved self-awareness</li>
                  <li>Better coping skills</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg1} alt="Service1" className='w-full h-auto rounded-2xl object-cover' />
              </div>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-red-400 mb-4'>Couples Counseling</h3>
                <p className='mb-8'>This helps partners address relationship issues such as communication problems, trust issues, or conflict resolution. It aims to improve emotional connection and strengthen the relationship through guided therapy.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Enhanced communication</li>
                  <li>Conflict resolution</li>
                  <li>Strengthened bond</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg2} alt="Service2" className='w-full h-auto rounded-2xl object-cover' />
              </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-red-400 mb-4'>Family Counseling</h3>
                <p className='mb-8'>Designed to support families facing challenges like conflict, parenting issues, addiction, or major transitions. It works on improving communication, understanding roles, and creating a healthier family dynamic.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Better family dynamics</li>
                  <li>Conflict management</li>
                  <li>Support during transitions</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg3} alt="Service3" className='w-full h-auto rounded-2xl object-cover' />
              </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-red-400 mb-4'>Group Counseling</h3>
                <p className='mb-8'>Involves a small group of people with similar concerns (e.g., grief, addiction, anxiety) led by a therapist. It offers peer support, shared experiences, and a sense of community while learning coping strategies.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Shared experiences</li>
                  <li>Peer support</li>
                  <li>Skill development</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg4} alt="Service4" className='w-full h-auto rounded-2xl object-cover' />
              </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
