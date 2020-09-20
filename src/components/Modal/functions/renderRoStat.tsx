import React from 'react';

const renderRoStat = (): React.ReactNode => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <span className="label-abcd success-abcd">本檯最近100局統計數據:</span>
      <br />
      <br />
      <span>總數:100局</span>
      <br />
      {/* <div className="row-abcd">
                <div className="columnRoundTopRo columnRoundLeft-abcd">紅</div>
                <div className="columnRoundTopRo">黑</div>
                <div className="columnRoundTopRo">單</div>
                <div className="columnRoundTopRo">雙</div>
                <div className="columnRoundTopRo">大</div>
                <div className="columnRoundTopRo">小</div>
                <div className="columnRoundTopRo">零</div>
            </div>
            <div className="row-abcd">
                <div className="columnRoundBottomRo columnRoundLeft-abcd">{this.state.items.roadmap.roadmapStatistic.Red100}局</div>
                <div className="columnRoundBottomRo">{this.state.items.roadmap.roadmapStatistic.Black100}局</div>
                <div className="columnRoundBottomRo">{this.state.items.roadmap.roadmapStatistic.Odd100}局</div>
                <div className="columnRoundBottomRo">{this.state.items.roadmap.roadmapStatistic.Even100}局</div>
                <div className="columnRoundBottomRo">{this.state.items.roadmap.roadmapStatistic.Big100}局</div>
                <div className="columnRoundBottomRo">{this.state.items.roadmap.roadmapStatistic.Small100}局</div>
                <div className="columnRoundBottomRo">{this.state.items.roadmap.roadmapStatistic.Zero100}局</div>
            </div> */}
    </div>
  );
};

export default renderRoStat;
