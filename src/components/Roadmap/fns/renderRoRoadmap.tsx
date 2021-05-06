import React from 'react';
import redRo from '../../../assets/redRo.png';
import blackRo from '../../../assets/blackRo.png';
import zeroRo from '../../../assets/zeroRo.png';
import empty from '../../../assets/empty.png';
import double from '../../../assets/double.png';
import single from '../../../assets/single.png';
import big from '../../../assets/big.png';
import small from '../../../assets/small.png';

import ROLBall from '../rolball/rolball';
import ROBall from '../roball/roball';

const isStatisticData = (
  type: string,
  data: any,
  arrayIndex: number
): boolean | string => {
  return data.roadmapdata.inGame[type][arrayIndex]?.v !== undefined;
};

const renderRoRoadmap = (statistic: any): React.ReactNode => {
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
  for (let i = 0; i <= 23; i++) {
    let className = 'columnRo';
    if (i === 23) {
      className = 'columnRoRight';
    }
    const indents1key = i * 6;
    indents1.push(
      <div className={className} key={i.toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.color[indents1key] === null ||
              !isStatisticData('color', statistic, indents1key)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.color[indents1key] === null ||
              !isStatisticData('color', statistic, indents1key)
              ? empty
              : ({0: zeroRo, 1: redRo, 2: blackRo} as any)[statistic.roadmapdata.inGame.color[indents1key].v]
          }
          alt="icon"
        />
      </div>
    );

    const indents2key = i * 6 + 1;
    indents2.push(
      <div className={className} key={(i + 23 * 1).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.color[indents2key] === null ||
              !isStatisticData('color', statistic, indents2key)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.color[indents2key] === null ||
              !isStatisticData('color', statistic, indents2key)
              ? empty
              : ({0: zeroRo, 1: redRo, 2: blackRo} as any)[statistic.roadmapdata.inGame.color[indents2key].v]
          }
          alt="icon"
        />
      </div>
    );

    const indents3key = i * 6 + 2;
    indents3.push(
      <div className={className} key={(i + 23 * 2).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.color[indents3key] === null ||
              !isStatisticData('color', statistic, indents3key)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.color[indents3key] === null ||
              !isStatisticData('color', statistic, indents3key)
              ? empty
              : ({0: zeroRo, 1: redRo, 2: blackRo} as any)[statistic.roadmapdata.inGame.color[indents3key].v]
          }
          alt="icon"
        />
      </div>
    );

    const indents4key = i * 6 + 3;
    indents4.push(
      <div className={className} key={(i + 23 * 3).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.color[indents4key] === null ||
              !isStatisticData('color', statistic, indents4key)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.color[indents4key] === null ||
              !isStatisticData('color', statistic, indents4key)
              ? empty
              : ({0: zeroRo, 1: redRo, 2: blackRo} as any)[statistic.roadmapdata.inGame.color[indents4key].v]
          }
          alt="icon"
        />
      </div>
    );

    const indents5key = i * 6 + 4;
    indents5.push(
      <div className={className} key={(i + 23 * 4).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.color[indents5key] === null ||
              !isStatisticData('color', statistic, indents5key)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.color[indents5key] === null ||
              !isStatisticData('color', statistic, indents5key)
              ? empty
              : ({0: zeroRo, 1: redRo, 2: blackRo} as any)[statistic.roadmapdata.inGame.color[indents5key].v]
          }
          alt="icon"
        />
      </div>
    );

    const indents6key = i * 6 + 5;
    const className2 = `${className} bottomBlack`;
    indents6.push(
      <div className={className2} key={(i + 23 * 5).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.color[indents6key] === null ||
              !isStatisticData('color', statistic, indents6key)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.color[indents6key] === null ||
              !isStatisticData('color', statistic, indents6key)
              ? empty
              : ({0: zeroRo, 1: redRo, 2: blackRo} as any)[statistic.roadmapdata.inGame.color[indents6key].v]
          }
          alt="icon"
        />
      </div>
    );

    let indents7key = i * 6;
    let indents8key = i * 6 + 1;
    let indents9key = i * 6 + 2;
    let indents10key = i * 6 + 3;
    let indents11key = i * 6 + 4;
    let indents12key = i * 6 + 5;

    if (i < 13) {
      indents7.push(
        <div className={className} key={(i + 23 * 6).toString()}>
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
                ? empty
                : statistic.roadmapdata.inGame.odd[indents7key].v === 2
                  ? double
                  : single
            }
            alt="icon"
          />
        </div>
      );

      indents8.push(
        <div className={className} key={(i + 23 * 7).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents8key] === null ||
                !isStatisticData('odd', statistic, indents8key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents8key] === null ||
                !isStatisticData('odd', statistic, indents8key)
                ? empty
                : statistic.roadmapdata.inGame.odd[indents8key].v === 2
                  ? double
                  : single
            }
            alt="icon"
          />
        </div>
      );

      indents9.push(
        <div className={className} key={(i + 23 * 8).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents9key] === null ||
                !isStatisticData('odd', statistic, indents9key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents9key] === null ||
                !isStatisticData('odd', statistic, indents9key)
                ? empty
                : statistic.roadmapdata.inGame.odd[indents9key].v === 2
                  ? double
                  : single
            }
            alt="icon"
          />
        </div>
      );

      indents10.push(
        <div className={className} key={(i + 23 * 9).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents10key] === null ||
                !isStatisticData('odd', statistic, indents10key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents10key] === null ||
                !isStatisticData('odd', statistic, indents10key)
                ? empty
                : statistic.roadmapdata.inGame.odd[indents10key].v === 2
                  ? double
                  : single
            }
            alt="icon"
          />
        </div>
      );

      indents11.push(
        <div className={className} key={(i + 23 * 10).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents11key] === null ||
                !isStatisticData('odd', statistic, indents11key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents11key] === null ||
                !isStatisticData('odd', statistic, indents11key)
                ? empty
                : statistic.roadmapdata.inGame.odd[indents11key].v === 2
                  ? double
                  : single
            }
            alt="icon"
          />
        </div>
      );

      indents12.push(
        <div className={className} key={(i + 23 * 11).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.odd[indents12key] === null ||
                !isStatisticData('odd', statistic, indents12key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.odd[indents12key] === null ||
                !isStatisticData('odd', statistic, indents12key)
                ? empty
                : statistic.roadmapdata.inGame.odd[indents12key].v === 2
                  ? double
                  : single
            }
            alt="icon"
          />
        </div>
      );
    } else {
      if (i === 13) {
        className = 'columnRo leftBlack';
      }

      indents7key = (i - 13) * 6;
      indents7.push(
        <div className={className} key={(i + 23 * 6).toString()}>
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
                ? empty
                : statistic.roadmapdata.inGame.size[indents7key].v === 2
                  ? big
                  : small
            }
            alt="icon"
          />
        </div>
      );

      indents8key = (i - 13) * 6 + 1;
      indents8.push(
        <div className={className} key={(i + 23 * 7).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents8key] === null ||
                !isStatisticData('size', statistic, indents8key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents8key] === null ||
                !isStatisticData('size', statistic, indents8key)
                ? empty
                : statistic.roadmapdata.inGame.size[indents8key].v === 2
                  ? big
                  : small
            }
            alt="icon"
          />
        </div>
      );

      indents9key = (i - 13) * 6 + 2;
      indents9.push(
        <div className={className} key={(i + 23 * 8).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents9key] === null ||
                !isStatisticData('size', statistic, indents9key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents9key] === null ||
                !isStatisticData('size', statistic, indents9key)
                ? empty
                : statistic.roadmapdata.inGame.size[indents9key].v === 2
                  ? big
                  : small
            }
            alt="icon"
          />
        </div>
      );

      indents10key = (i - 13) * 6 + 3;
      indents10.push(
        <div className={className} key={(i + 23 * 9).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents10key] === null ||
                !isStatisticData('size', statistic, indents10key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents10key] === null ||
                !isStatisticData('size', statistic, indents10key)
                ? empty
                : statistic.roadmapdata.inGame.size[indents10key].v === 2
                  ? big
                  : small
            }
            alt="icon"
          />
        </div>
      );

      indents11key = (i - 13) * 6 + 4;
      indents11.push(
        <div className={className} key={(i + 23 * 10).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents11key] === null ||
                !isStatisticData('size', statistic, indents11key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents11key] === null ||
                !isStatisticData('size', statistic, indents11key)
                ? empty
                : statistic.roadmapdata.inGame.size[indents11key].v === 2
                  ? big
                  : small
            }
            alt="icon"
          />
        </div>
      );

      indents12key = (i - 13) * 6 + 5;
      indents12.push(
        <div className={className} key={(i + 23 * 11).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.size[indents12key] === null ||
                !isStatisticData('size', statistic, indents12key)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.size[indents12key] === null ||
                !isStatisticData('size', statistic, indents12key)
                ? empty
                : statistic.roadmapdata.inGame.size[indents12key].v === 2
                  ? big
                  : small
            }
            alt="icon"
          />
        </div>
      );
    }
  }

  // render last 20 round game result
  let balls: any = [];
  if (statistic.last20Rounds !== undefined) {
    balls = statistic.last20Rounds.map((r: any) =>
      <ROLBall value={r.v} tag={0} />
    );
    balls.push(<div style={{ height: "16px" }}></div>);
  } else if (statistic.last36Rounds !== undefined) {
    balls = statistic.last36Rounds.map((r: any) =>
      <ROBall value={r.v} />
    );
    balls.push(<div style={{ height: "8px" }}></div>);
  }

  return (
    <div>
      {balls}

      <div className="rowRo-abcd">
        {indents1}
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
      </div>
    </div>
  );
};

export default renderRoRoadmap;
