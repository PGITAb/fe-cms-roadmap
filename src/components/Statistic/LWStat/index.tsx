import React, { useEffect, useState, useCallback } from "react";
import './index.css';
import { ConvertCMSStatistic } from "playerclient";

interface PropsType {
  roadmapData: any;
}

const LWStat: React.FC<PropsType> = (props) => {
  if(props.roadmapData === undefined){
    return (
      <div className="lwstatisticcard_row">
        <div className="lwstatisticcard_cell"></div>
        <div className="lwstatisticcard_cell"></div>
        <div className="lwstatisticcard_cell"></div>
        <div className="lwstatisticcard_cell"></div>
        <div className="lwstatisticcard_cell"></div>
        <div className="lwstatisticcard_cell"></div>
        <div className="lwstatisticcard_cell"></div>
      </div>
    );
  }
  let stat = ConvertCMSStatistic(16, props.roadmapData);
  let count = Object.keys(stat.roadmapdata.gameInfo)
    .map((k) => stat.roadmapdata.gameInfo[k].v)
    .reduce((p, c) => {
      p[c]++
      return p
    }, {
      "01": 0,
      "02": 0,
      "03": 0,
      "04": 0,
      "05": 0,
      "06": 0,
      "07": 0,
    });

  return (
    <div className="lwstatisticcard_row">
      <div className="lwstatisticcard_cell">{count["01"]}</div>
      <div className="lwstatisticcard_cell">{count["02"]}</div>
      <div className="lwstatisticcard_cell">{count["03"]}</div>
      <div className="lwstatisticcard_cell">{count["04"]}</div>
      <div className="lwstatisticcard_cell">{count["05"]}</div>
      <div className="lwstatisticcard_cell">{count["06"]}</div>
      <div className="lwstatisticcard_cell">{count["07"]}</div>
    </div>
  );
};

export default LWStat;
