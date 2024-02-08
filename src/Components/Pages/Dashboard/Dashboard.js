import React, { useEffect } from "react";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./dashboard.css";
import Order from "./Order";
const Dashboard = () => {
  let userid = "123456789";

  let loading = (
    <div className="grid items-center justify-center py-40">
      <b className="flex justify-center">Loading . . .</b>
    </div>
  );

  let nodata = (
    <div className="grid items-center justify-center py-40">
      <b className="flex justify-center">No transactions Found</b>
    </div>
  );

  let fetchData = () => {
    fetch(
      (process.env.NODE_ENV === "production"
        ? "/api/orders/"
        : "https://shippie.onrender.com/api/orders/") + userid
    )
      .then((response) => response.json())
      .then((json) => sortOrders(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);

  const [tab0, setTab0] = useState(loading);
  const [tab1, setTab1] = useState(loading);
  const [tab2, setTab2] = useState(loading);
  const [tab3, setTab3] = useState(loading);
  const [tab4, setTab4] = useState(loading);
  let box = (c) => {
    return c;
  };

  let sortOrders = (json) => {
    let sorted = [[], [], [], [], []];
    sorted[0] = json;
    json.map((curElem) => {
      sorted[parseInt(curElem.status)].push(curElem);
    });
    sorted.map((curElem, i) => {
      if (curElem.length !== 0) {
        if (i === 0) setTab0(curElem.map((c) => <Order key={c._id} {...c} />));
        else if (i === 1)
          setTab1(curElem.map((c, i) => <Order key={c._id} {...c} />));
        else if (i === 2)
          setTab2(curElem.map((c, i) => <Order key={c._id} {...c} />));
        else if (i === 3)
          setTab3(curElem.map((c, i) => <Order key={c._id} {...c} />));
        else if (i === 4)
          setTab4(curElem.map((c, i) => <Order key={c._id} {...c} />));
      } else eval("setTab" + i + "(nodata)");
    });
    // console.log(sorted);
  };

  let tabs = (
    <>
      <TabPanel>{tab0}</TabPanel>
      <TabPanel>{tab1}</TabPanel>
      <TabPanel>{tab2}</TabPanel>
      <TabPanel>{tab3}</TabPanel>
      <TabPanel>{tab4}</TabPanel>
    </>
  );

  return (
    <div className="container mx-auto">
      <h2 className="font-black text-5xl text-center mt-4">My Orders</h2>
      <Tabs defaultIndex={1} /*onSelect={(index) => console.log(index)}*/>
        <TabList
          className={
            " flex justify-start items-start gap-6 py-1 text-grey mt-4"
          }
        >
          <Tab className={"cursor-pointer text-xl font-bold"}>All</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>
            Action Pending
          </Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>In Progress</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>Completed</Tab>
          <Tab className={"cursor-pointer text-xl font-bold"}>Cancelled</Tab>
        </TabList>
        <hr className="w-[100%] bg-slate-400 h-[4px] mb-3 border-0" />
        {tabs}
      </Tabs>
    </div>
  );
};

export default Dashboard;
