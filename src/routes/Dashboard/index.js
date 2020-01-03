import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import GraphView from "../../components/GraphView";
import "./style.scss";

export default () => {
  const [activeData, setActiveData] = useState({
    title: "",
    subtitle: ""
  });

  const [fullData, setFullData] = useState([
    {
      title: "Tax rates on import vehicles over 1600cc",
      subtitle: "tax rates etc."
    },

    {
      title: "Rate of change in bank reserves",
      subtitle: "bank reserves etc."
    },

    {
      title: "Total exports with respect to GDP",
      subtitle: "Exports"
    }
  ]);

  const updateActive = selected => {
    const active = fullData.filter(v => v.title === selected);
    console.log("ACTIVE: ", active[0].title);
    console.log("ACTIVEDATA: ", activeData.title);

    if (active[0].title === activeData.title) setActiveData({});
    else setActiveData(active[0]);
  };

  return (
    <div className="dashboard">
      <Sidebar
        active={activeData}
        updateActive={updateActive}
        dataNames={fullData.map(v => v.title)}
      />
      <GraphView {...activeData} />
    </div>
  );
};
