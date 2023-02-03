import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './dashboard.css'
import Order from './Order';
const Dashboard = () => {
  
  return (
      <div className="container mx-auto">
        <h2 className='font-black text-5xl text-center'>My Orders</h2>
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList className={" flex justify-start items-start gap-6  py-1 text-grey mt-4"}>
          <Tab className={"cursor-pointer text-xl font-bold"}>All</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>Pending your action</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>in Progress</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>completed</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>Cancelled</Tab>
        </TabList>
        <hr  className='w-[100%] bg-slate-200 h-[4px] mb-3  '/>
        <TabPanel>
         <Order/>
     </TabPanel>
    
        <TabPanel>
          
             <Order/>
            </TabPanel>
        <TabPanel>
          
              <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
            </TabPanel>
        <TabPanel>
          
              <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
            </TabPanel>
         
      </Tabs>
    </div>
  );
};

export default Dashboard;