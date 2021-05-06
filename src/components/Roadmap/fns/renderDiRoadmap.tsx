import React from 'react';
import roundDouble from '../../../assets/roundDouble.png';
import roundSingle from '../../../assets/roundSingle.png';
import roundBig from '../../../assets/roundBig.png';
import roundSmall from '../../../assets/roundSmall.png';
import surrond from '../../../assets/surrond.png';
import dice1 from '../../../assets/dice1.png';
import dice2 from '../../../assets/dice2.png';
import dice3 from '../../../assets/dice3.png';
import dice4 from '../../../assets/dice4.png';
import dice5 from '../../../assets/dice5.png';
import dice6 from '../../../assets/dice6.png';

import DILCard from '../dilcard/dilcard';

const dices: { [key: number]: any } = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const isStatisticData = (
  type: string,
  data: any,
  arrayIndex: number
): boolean | string => {
  return data.roadmapdata.inGame[type][arrayIndex]?.v !== undefined;
};

const renderDiRoadmap = (statistic: any, gameType: any): React.ReactNode => {
  const indents1 = [];
  const indents2 = [];
  const indents3 = [];
  const indents4 = [];
  const indents5 = [];
  const indents6 = [];
  const indents7 = [];
  const indents8 = [];
  const indents9 = [];
  const indents10 = [];
  const indents11 = [];
  const indents12 = [];
  const indents13 = [];

  const bead = [...statistic.roadmapdata.inGame.bead].reverse().slice(0, 13);
  for (let i = 0; i <= 13; i++){
    if (bead[i] != null) {
      const sum =
        bead[i].dice[0] +
        bead[i].dice[1] +
        bead[i].dice[2];
      let size = '大';
      let color = 'sizeColorRed';
      if (sum <= 10) {
        size = '小';
        color = 'sizeColorBlue';
      }

      indents1.push(
        <div className={'columnDi'} key={i.toString()}>
          <img
            className={
              bead[i] === null ||
              !isStatisticData('bead', statistic, i)
                ? 'srcVisibleDi'
                : 'srcVisibleDi'
            }
            src={dices[bead[i].dice[0]]}
            alt="icon"
          />
          <br />
          <img
            className={
              bead[i] === null ||
              !isStatisticData('bead', statistic, i)
                ? 'srcVisibleDi'
                : 'srcVisibleDi'
            }
            src={dices[bead[i].dice[1]]}
            alt="icon"
          />
          <br />
          <img
            className={
              bead[i] === null ||
              !isStatisticData('bead', statistic, i)
                ? 'srcVisibleDi'
                : 'srcVisibleDi'
            }
            src={dices[bead[i].dice[2]]}
            alt="icon"
          />
          <br />
          <span className={color}>{sum}</span>
          <br />
          <span className={color}>{size}</span>
          <br />
        </div>
      );
    } else {
      indents1.push(
        <div className={'columnDi'} key={i.toString()}></div>
      );
    }
  }
  
  for (let i = 0; i <= 24; i++) {
    let className = 'columnDi';
    if (gameType === 'DIL') {
      className = 'columnDil';
    }
    const classNameSize = 'columnDiSize';
    const classNameSize2 = 'columnDiSize sizeBottom';

    if (gameType === 'DI') {
      const indents2key = i * 6;
      indents2.push(
        <div className={classNameSize} key={(i + 24 * 1).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents2key] === null ||
              !isStatisticData('size', statistic, indents2key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents2key] === null ||
              !isStatisticData('size', statistic, indents2key)
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents2key].v === 2
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents2key].v === 1
                ? roundSmall
                : surrond
            }
            alt="icon"
          />
        </div>
      );
      indents8.push(
        <div className={classNameSize} key={(i + 24 * 7).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents2key] === null ||
              !isStatisticData('odd', statistic, indents2key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents2key] === null ||
              !isStatisticData('odd', statistic, indents2key)
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents2key].v === 2
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents2key].v === 1
                ? roundSingle
                : surrond
            }
            alt="icon"
          />
        </div>
      );

      const indents3key = i * 6 + 1;
      indents3.push(
        <div className={classNameSize} key={(i + 24 * 2).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents3key] === null ||
              !isStatisticData('size', statistic, indents3key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents3key] === null ||
              !isStatisticData('size', statistic, indents3key)
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents3key].v === 2
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents3key].v === 1
                ? roundSmall
                : surrond
            }
            alt="icon"
          />
        </div>
      );
      indents9.push(
        <div className={classNameSize} key={(i + 24 * 8).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents3key] === null ||
              !isStatisticData('odd', statistic, indents3key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents3key] === null ||
              !isStatisticData('odd', statistic, indents3key)
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents3key].v === 2
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents3key].v === 1
                ? roundSingle
                : surrond
            }
            alt="icon"
          />
        </div>
      );

      const indents4key = i * 6 + 2;
      indents4.push(
        <div className={classNameSize} key={(i + 24 * 3).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents4key] === null ||
              !isStatisticData('size', statistic, indents4key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents4key] === null ||
              !isStatisticData('size', statistic, indents4key)
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents4key].v === 2
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents4key].v === 1
                ? roundSmall
                : surrond
            }
            alt="icon"
          />
        </div>
      );
      indents10.push(
        <div className={classNameSize} key={(i + 24 * 9).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents4key] === null ||
              !isStatisticData('odd', statistic, indents4key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents4key] === null ||
              !isStatisticData('odd', statistic, indents4key)
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents4key].v === 2
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents4key].v === 1
                ? roundSingle
                : surrond
            }
            alt="icon"
          />
        </div>
      );

      const indents5key = i * 6 + 3;
      indents5.push(
        <div className={classNameSize} key={(i + 24 * 4).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents5key] === null ||
              !isStatisticData('size', statistic, indents5key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents5key] === null ||
              !isStatisticData('size', statistic, indents5key)
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents5key].v === 2
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents5key].v === 1
                ? roundSmall
                : surrond
            }
            alt="icon"
          />
        </div>
      );
      indents11.push(
        <div className={classNameSize} key={(i + 24 * 10).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents5key] === null ||
              !isStatisticData('odd', statistic, indents5key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents5key] === null ||
              !isStatisticData('odd', statistic, indents5key)
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents5key].v === 2
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents5key].v === 1
                ? roundSingle
                : surrond
            }
            alt="icon"
          />
        </div>
      );

      const indents6key = i * 6 + 4;

      // console.log(indents6key)
      indents6.push(
        <div className={classNameSize} key={(i + 24 * 5).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents6key] === null ||
              !isStatisticData('size', statistic, indents6key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents6key] === null ||
              !isStatisticData('size', statistic, indents6key)
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents6key].v === 2
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents6key].v === 1
                ? roundSmall
                : surrond
            }
            alt="icon"
          />
        </div>
      );
      indents12.push(
        <div className={classNameSize} key={(i + 24 * 11).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents6key] === null ||
              !isStatisticData('odd', statistic, indents6key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents6key] === null ||
              !isStatisticData('odd', statistic, indents6key)
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents6key].v === 2
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents6key].v === 1
                ? roundSingle
                : surrond
            }
            alt="icon"
          />
        </div>
      );

      const indents7key = i * 6 + 5;
      indents7.push(
        <div className={classNameSize2} key={(i + 24 * 6).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents7key] === null ||
              !isStatisticData('size', statistic, indents7key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents7key] === null ||
              !isStatisticData('size', statistic, indents7key)
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents7key].v === 2
                ? roundBig
                : statistic.roadmapdata.inGame.size[indents7key].v === 1
                ? roundSmall
                : surrond
            }
            alt="icon"
          />
        </div>
      );
      indents13.push(
        <div className={classNameSize2} key={(i + 24 * 12).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents7key] === null ||
              !isStatisticData('odd', statistic, indents7key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents7key] === null ||
              !isStatisticData('odd', statistic, indents7key)
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents7key].v === 2
                ? roundDouble
                : statistic.roadmapdata.inGame.odd[indents7key].v === 1
                ? roundSingle
                : surrond
            }
            alt="icon"
          />
        </div>
      );
    }
  }

  if(gameType === "DIL"){
    // render last 16 round game result
    let cards: any = [];
    cards = statistic.last16Rounds.map((r: any) =>
      <DILCard value={r.dice[0]+r.dice[1]+r.dice[2]} tag={0} />
    );
    cards.push(<div style={{ height: "8px" }}></div>);
    return (
      <div className="dilcard-container">
        {cards}
      </div>
    );
  }

  return (
    <div>
      <div className="rowDi-abcd">{indents1}</div>
      <div className="rowDiSize-abcd">
        {indents2}
        {indents3}
        {indents4}
        {indents5}
        {indents6}
        {indents7}
        {indents8}
        {indents9}
        {indents10}
        {indents11}
        {indents12}
        {indents13}
      </div>
    </div>
  );
};

export default renderDiRoadmap;
