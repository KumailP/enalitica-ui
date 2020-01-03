import React, { useState, useEffect } from "react";
import axios from "axios";
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
      title:
        "Merchandise exports to low- and middle-income economies in South Asia (% of total merchandise exports)",
      subtitle: "Merchandise exports"
    },

    {
      title: "Urban population (% of total population)",
      subtitle: "Urban population"
    },

    {
      title: "Rural population (% of total population)",
      subtitle: "Rural Population"
    }
  ]);

  // useEffect(() => {
  //   axios
  //     .get("http://192.168.0.106:4000/api")
  //     .then(function(response) {
  //       // handle success
  //       console.log(response);
  //       if (response) {
  //         setFullData(JSON.parse(response[0]));
  //       }
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }, []);

  const updateActive = selected => {
    const active = fullData.filter(v => v.title === selected);

    if (active[0]) {
      if (active[0].title === activeData.title) setActiveData({});
      else setActiveData(active[0]);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar
        active={activeData}
        updateActive={updateActive}
        dataNames={fullData.map(v => v.title)}
      />
      <GraphView {...activeData} i={fullData.indexOf(activeData)} />
    </div>
  );
};
