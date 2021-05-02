import React from 'react';

const renderDtStat = (items: any): React.ReactNode => {
  return (
    <div>
      <br />
      <span className="label-abcd success-abcd">本靴統計數據:</span>
      <br />
      <span>總數:{items.roadmap.totalCount}局</span>
      <br />
      <div className="row-abcd">
        <div className="columnRoundTop-abcd columnRoundLeft-abcd">龍</div>
        <div className="columnRoundTop-abcd">虎</div>
        <div className="columnRoundTop-abcd">和</div>
      </div>
      <div className="row-abcd">
        <div className="columnRoundBottom-abcd columnRoundLeft-abcd">
          {items.roadmap.roadmapStatistic.BankerWinCount}局
        </div>
        <div className="columnRoundBottom-abcd">
          {items.roadmap.roadmapStatistic.PlayerWinCount}局
        </div>
        <div className="columnRoundBottom-abcd">
          {items.roadmap.roadmapStatistic.TieWinCount}局
        </div>
      </div>
    </div>
  );
};

export default renderDtStat;
