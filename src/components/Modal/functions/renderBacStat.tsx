import React from 'react';

const renderBacStat = (items): React.ReactNode => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <span className="label-abcd success-abcd">本靴統計數據:</span>
      <br />
      <br />
      <span>總數:{items.roadmap.totalCount}局</span>
      <br />
      <div className="row-abcd">
        <div className="columnRoundTop-abcd columnRoundLeft-abcd">庄</div>
        <div className="columnRoundTop-abcd">閒</div>
        <div className="columnRoundTop-abcd">和</div>
        <div className="columnRoundTop-abcd">庄對</div>
        <div className="columnRoundTop-abcd">閒對</div>
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
        <div className="columnRoundBottom-abcd">
          {items.roadmap.roadmapStatistic.BankerPairCount}局
        </div>
        <div className="columnRoundBottom-abcd">
          {items.roadmap.roadmapStatistic.PlayerPairCount}局
        </div>
      </div>
    </div>
  );
};

export default renderBacStat;
