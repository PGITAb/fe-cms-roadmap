import React from 'react';

const renderLwStat = (): React.ReactNode => {
  return (
    <div>
      <br />
      <span className="label-abcd success-abcd">本檯最近100局統計數據:</span>
      <br />
      <span>總數:100局</span>
      <br />
      <div className="row-abcd">
        <div className="columnRoundTopRo columnRoundLeft-abcd">東</div>
        <div className="columnRoundTopRo">南</div>
        <div className="columnRoundTopRo">西</div>
        <div className="columnRoundTopRo">北</div>
        <div className="columnRoundTopRo">白</div>
        <div className="columnRoundTopRo">中</div>
        <div className="columnRoundTopRo">發</div>
      </div>
      <div className="row-abcd">
        <div className="columnRoundBottomRo columnRoundLeft-abcd">67局</div>
        <div className="columnRoundBottomRo">25局</div>
        <div className="columnRoundBottomRo">56局</div>
        <div className="columnRoundBottomRo">36局</div>
        <div className="columnRoundBottomRo">61局</div>
        <div className="columnRoundBottomRo">31局</div>
        <div className="columnRoundBottomRo">8局</div>
      </div>
    </div>
  );
};

export default renderLwStat;
