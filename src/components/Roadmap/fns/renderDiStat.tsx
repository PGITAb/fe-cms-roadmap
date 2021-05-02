import React from 'react';

const renderDiStat = (statistic: any, items: any, gameType: any): React.ReactNode => {
  let resultRow = <div />;
  if (gameType === 'DI') {
    resultRow = (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className="label-abcd success-abcd">
          本檯最近{items.roadmap.totalCount}局統計數據:
        </span>
        <br />
        <br />
        <span>總數:{items.roadmap.totalCount}局</span>
        <br />
        <div className="row-abcd">
          <div className="columnRoundTop-abcd columnRoundLeft-abcd">大</div>
          <div className="columnRoundTop-abcd">小</div>
          <div className="columnRoundTop-abcd">單</div>
          <div className="columnRoundTop-abcd">雙</div>
          <div className="columnRoundTop-abcd">圍</div>
        </div>
        <div className="row-abcd">
          <div className="columnRoundBottom-abcd columnRoundLeft-abcd">
            {items.roadmap.roadmapStatistic.Big}局
          </div>
          <div className="columnRoundBottom-abcd">
            {items.roadmap.roadmapStatistic.Small}局
          </div>
          <div className="columnRoundBottom-abcd">
            {items.roadmap.roadmapStatistic.Odd}局
          </div>
          <div className="columnRoundBottom-abcd">
            {items.roadmap.roadmapStatistic.Even}局
          </div>
          <div className="columnRoundBottom-abcd">
            {items.roadmap.roadmapStatistic.Tie}局
          </div>
        </div>
      </div>
    );
  } else {
    const totalArr: { [key: number]: number } = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
    };
    const sumArrary = statistic.roadmapdata.inGame.sum;
    for (let index = 0; index < sumArrary.length; index++) {
      if (sumArrary[index] != null) {
        const element = sumArrary[index].v;
        totalArr[element]++;
      }
    }

    resultRow = (
      <div>
        <br />
        <span className="label-abcd success-abcd">
          本檯最近{items.roadmap.totalCount}局統計數據:
        </span>
        <br />
        <span>總數:{items.roadmap.totalCount}局</span>
        <br />
        <div className="row-abcd">
          <div className="columnRoundTopDi columnRoundLeft-abcd">3</div>
          <div className="columnRoundTopDi">4</div>
          <div className="columnRoundTopDi">5</div>
          <div className="columnRoundTopDi">6</div>
          <div className="columnRoundTopDi">7</div>
          <div className="columnRoundTopDi">8</div>
          <div className="columnRoundTopDi">9</div>
          <div className="columnRoundTopDi">10</div>
        </div>
        <div className="row-abcd">
          <div className="columnRoundBottomDi columnRoundLeft-abcd">
            {totalArr[3]}局
          </div>
          <div className="columnRoundBottomDi">{totalArr[4]}局</div>
          <div className="columnRoundBottomDi">{totalArr[5]}局</div>
          <div className="columnRoundBottomDi">{totalArr[6]}局</div>
          <div className="columnRoundBottomDi">{totalArr[7]}局</div>
          <div className="columnRoundBottomDi">{totalArr[8]}局</div>
          <div className="columnRoundBottomDi">{totalArr[9]}局</div>
          <div className="columnRoundBottomDi">{totalArr[10]}局</div>
        </div>
        <div className="row-abcd">
          <div className="columnRoundTopDi columnRoundLeft-abcd">11</div>
          <div className="columnRoundTopDi">12</div>
          <div className="columnRoundTopDi">13</div>
          <div className="columnRoundTopDi">14</div>
          <div className="columnRoundTopDi">15</div>
          <div className="columnRoundTopDi">16</div>
          <div className="columnRoundTopDi">17</div>
          <div className="columnRoundTopDi">18</div>
        </div>
        <div className="row-abcd">
          <div className="columnRoundBottomDi columnRoundLeft-abcd">
            {totalArr[11]}局
          </div>
          <div className="columnRoundBottomDi">{totalArr[12]}局</div>
          <div className="columnRoundBottomDi">{totalArr[13]}局</div>
          <div className="columnRoundBottomDi">{totalArr[14]}局</div>
          <div className="columnRoundBottomDi">{totalArr[15]}局</div>
          <div className="columnRoundBottomDi">{totalArr[16]}局</div>
          <div className="columnRoundBottomDi">{totalArr[17]}局</div>
          <div className="columnRoundBottomDi">{totalArr[18]}局</div>
        </div>
      </div>
    );
  }

  return <div>{resultRow}</div>;
};

export default renderDiStat;
