import React from 'react';
import blue from '../../../assets/blue.png';
import blueD from '../../../assets/blueD.png';
import blueSolid from '../../../assets/blueSolid.png';
import roachBlue from '../../../assets/roachBlue.png';
import red from '../../../assets/red.png';
import redD from '../../../assets/redD.png';
import redSolid from '../../../assets/redSolid.png';
import roachRed from '../../../assets/roachRed.png';

const isStatisticData = (
  type: string,
  data: any,
  arrayIndex: number
): boolean | string => {
  return data.roadmapdata.inGame[type][arrayIndex]?.v !== undefined;
};

const renderBacAndDTRoadmap = (statistic: any): React.ReactNode => {
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

  for (let i = 1; i <= 32; i++) {
    indents1.push(
      <div className="column-abcd" key={i.toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6] === null ||
              !isStatisticData('bigRoad', statistic, i * 6)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6] === null ||
              !isStatisticData('bigRoad', statistic, i * 6)
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6].t === 0
                    ? red
                    : redD
          }
          alt="icon"
        />
      </div>
    );
    indents2.push(
      <div className="column-abcd" key={(i + 32 * 1).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 1] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 1)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 1] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 1)
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].t === 0
                    ? red
                    : redD
          }
          alt="icon"
        />
      </div>
    );
    indents3.push(
      <div className="column-abcd" key={(i + 32 * 2).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 2] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 2)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 2] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 2)
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].t === 0
                    ? red
                    : redD
          }
          alt="icon"
        />
      </div>
    );
    indents4.push(
      <div className="column-abcd" key={(i + 32 * 3).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 3] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 3)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 3] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 3)
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].t === 0
                    ? red
                    : redD
          }
          alt="icon"
        />
      </div>
    );
    indents5.push(
      <div className="column-abcd" key={(i + 32 * 4).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 4] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 4)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 4] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 4)
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].t === 0
                    ? red
                    : redD
          }
          alt="icon"
        />
      </div>
    );
    indents6.push(
      <div className="column-abcd" key={(i + 32 * 5).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 5] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 5)
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 5] === null ||
              !isStatisticData('bigRoad', statistic, i * 6 + 5)
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].t === 0
                    ? red
                    : redD
          }
          alt="icon"
        />
      </div>
    );
    indents7.push(
      <div className="column-abcd topBlack" key={(i + 32 * 8).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 1)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 1)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 1)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 1)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1].v ===
                'p'
                ? blue
                : red
          }
          alt="icon"
        />
      </div>
    );
    indents8.push(
      <div className="column-abcd" key={(i + 32 * 9).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 2)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 2)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 2)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 2)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2].v ===
                'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 1 + 2)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 1 + 2)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2] ===
              null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 2)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2] ===
              null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 2)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2]
                .v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
      </div>
    );
    indents9.push(
      <div className="column-abcd" key={(i + 32 * 10).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 4)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 4)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 4)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4] === null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 4)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4].v ===
                'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 1 + 4)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4] === null ||
              !isStatisticData('bigEye', statistic, i * 2 * 6 + 1 + 4)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4].v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4] ===
              null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 4)
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4] ===
              null ||
              !isStatisticData('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 4)
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4]
                .v === 'p'
                ? blue
                : red
          }
          alt="icon"
        />
      </div>
    );
    if (i < 17) {
      indents10.push(
        <div className="column-abcd topBlack" key={(i + 32 * 11).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6] === null ||
                !isStatisticData('small', statistic, i * 2 * 6)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6] === null ||
                !isStatisticData('small', statistic, i * 2 * 6)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6] === null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6] === null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 1)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 1)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 1)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 1)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1].v ===
                  'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
        </div>
      );
      indents11.push(
        <div className="column-abcd" key={(i + 32 * 12).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 2] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 2)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 2] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 2)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 2].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 2)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 2)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2].v ===
                  'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 1 + 2)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 1 + 2)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2].v ===
                  'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 1 + 2)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 1 + 2)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2]
                  .v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
        </div>
      );
      indents12.push(
        <div className="column-abcd" key={(i + 32 * 13).toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 4] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 4)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 4] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 4)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 4].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 4)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 4)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4].v ===
                  'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 1 + 4)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4] === null ||
                !isStatisticData('small', statistic, i * 2 * 6 + 1 + 4)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4].v ===
                  'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 1 + 4)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4] ===
                null ||
                !isStatisticData('small', statistic, (i * 2 + 1) * 6 + 1 + 4)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4]
                  .v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
        </div>
      );
    } else {
      const j = i - 16;
      if (i === 17) {
        indents10.push(
          <div
            className="column-abcd topBlack leftBlack"
            key={(i + 32 * 11).toString()}
          >
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6].v ===
                    'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
          </div>
        );
        indents11.push(
          <div className="column-abcd leftBlack" key={(i + 32 * 12).toString()}>
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 2].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2].v ===
                    'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
          </div>
        );
        indents12.push(
          <div className="column-abcd leftBlack" key={(i + 32 * 13).toString()}>
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 4].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4].v ===
                    'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
          </div>
        );
      } else {
        indents10.push(
          <div className="column-abcd topBlack" key={(i + 32 * 11).toString()}>
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6].v ===
                    'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
          </div>
        );
        indents11.push(
          <div className="column-abcd" key={(i + 32 * 12).toString()}>
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 2].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2].v ===
                    'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
          </div>
        );
        indents12.push(
          <div className="column-abcd" key={(i + 32 * 13).toString()}>
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 4].v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, j * 2 * 6 + 1 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4].v ===
                    'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                  null ||
                  !isStatisticData('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4]
                    .v === 'p'
                    ? roachBlue
                    : roachRed
              }
              alt="icon"
            />
          </div>
        );
      }
    }
  }

  return (
    <div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[0] === null ||
                !isStatisticData('bigRoad', statistic, 0)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[0] === null ||
                !isStatisticData('bigRoad', statistic, 0)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[0].v === 'p' && statistic.roadmapdata.inGame.bigRoad[0].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[0].v === 'p' && statistic.roadmapdata.inGame.bigRoad[0].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[0].v === 'b' && statistic.roadmapdata.inGame.bigRoad[0].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
        {indents1}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[198] === null ||
                !isStatisticData('bigRoad', statistic, 198)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[198] === null ||
                !isStatisticData('bigRoad', statistic, 198)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[198].v === 'p' && statistic.roadmapdata.inGame.bigRoad[198].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[198].v === 'p' && statistic.roadmapdata.inGame.bigRoad[198].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[198].v === 'b' && statistic.roadmapdata.inGame.bigRoad[198].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[1] === null ||
                !isStatisticData('bigRoad', statistic, 1)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[1] === null ||
                !isStatisticData('bigRoad', statistic, 1)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[1].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[1].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[1].v === 'b' && statistic.roadmapdata.inGame.bigRoad[1].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
        {indents2}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[199] === null ||
                !isStatisticData('bigRoad', statistic, 199)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[199] === null ||
                !isStatisticData('bigRoad', statistic, 199)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[199].v === 'p' && statistic.roadmapdata.inGame.bigRoad[199].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[199].v === 'p' && statistic.roadmapdata.inGame.bigRoad[199].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[199].v === 'b' && statistic.roadmapdata.inGame.bigRoad[199].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[2] === null ||
                !isStatisticData('bigRoad', statistic, 2)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[2] === null ||
                !isStatisticData('bigRoad', statistic, 2)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[2].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[2].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[2].v === 'b' && statistic.roadmapdata.inGame.bigRoad[2].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
        {indents3}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[200] === null ||
                !isStatisticData('bigRoad', statistic, 200)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[200] === null ||
                !isStatisticData('bigRoad', statistic, 200)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[200].v === 'p' && statistic.roadmapdata.inGame.bigRoad[200].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[200].v === 'p' && statistic.roadmapdata.inGame.bigRoad[200].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[200].v === 'b' && statistic.roadmapdata.inGame.bigRoad[200].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[3] === null ||
                !isStatisticData('bigRoad', statistic, 3)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[3] === null ||
                !isStatisticData('bigRoad', statistic, 3)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[3].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[3].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[3].v === 'b' && statistic.roadmapdata.inGame.bigRoad[3].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
        {indents4}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[201] === null ||
                !isStatisticData('bigRoad', statistic, 201)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[201] === null ||
                !isStatisticData('bigRoad', statistic, 201)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[201].v === 'p' && statistic.roadmapdata.inGame.bigRoad[201].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[201].v === 'p' && statistic.roadmapdata.inGame.bigRoad[201].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[201].v === 'b' && statistic.roadmapdata.inGame.bigRoad[201].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[4] === null ||
                !isStatisticData('bigRoad', statistic, 4)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[4] === null ||
                !isStatisticData('bigRoad', statistic, 4)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[4].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[4].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[4].v === 'b' && statistic.roadmapdata.inGame.bigRoad[4].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
        {indents5}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[202] === null ||
                !isStatisticData('bigRoad', statistic, 202)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[202] === null ||
                !isStatisticData('bigRoad', statistic, 202)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[202].v === 'p' && statistic.roadmapdata.inGame.bigRoad[202].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[202].v === 'p' && statistic.roadmapdata.inGame.bigRoad[202].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[202].v === 'b' && statistic.roadmapdata.inGame.bigRoad[202].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[5] === null ||
                !isStatisticData('bigRoad', statistic, 5)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[5] === null ||
                !isStatisticData('bigRoad', statistic, 5)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[5].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[5].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[5].v === 'b' && statistic.roadmapdata.inGame.bigRoad[5].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
        {indents6}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[203] === null ||
                !isStatisticData('bigRoad', statistic, 203)
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[203] === null ||
                !isStatisticData('bigRoad', statistic, 203)
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[203].v === 'p' && statistic.roadmapdata.inGame.bigRoad[203].t === 0
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[203].v === 'p' && statistic.roadmapdata.inGame.bigRoad[203].t === 1
                  ? blueD
                  : statistic.roadmapdata.inGame.bigRoad[203].v === 'b' && statistic.roadmapdata.inGame.bigRoad[203].t === 0
                    ? red
                    : redD
            }
            alt="icon"
          />
        </div>
      </div>

      <div className="row-abcd">
        <div className="columnLeft-abcd topBlack">
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[0] === null ||
                !isStatisticData('bigEye', statistic, 0)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[0] === null ||
                !isStatisticData('bigEye', statistic, 0)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[0].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[6] === null ||
                !isStatisticData('bigEye', statistic, 6)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[6] === null ||
                !isStatisticData('bigEye', statistic, 6)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[6].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[1] === null ||
                !isStatisticData('bigEye', statistic, 1)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[1] === null ||
                !isStatisticData('bigEye', statistic, 1)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[1].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[7] === null ||
                !isStatisticData('bigEye', statistic, 7)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[7] === null ||
                !isStatisticData('bigEye', statistic, 7)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[7].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
        </div>
        {indents7}
        <div className="columnRight-abcd topBlack">
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[396] === null ||
                !isStatisticData('bigEye', statistic, 396)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[396] === null ||
                !isStatisticData('bigEye', statistic, 396)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[396].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[402] === null ||
                !isStatisticData('bigEye', statistic, 402)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[402] === null ||
                !isStatisticData('bigEye', statistic, 402)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[402].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[397] === null ||
                !isStatisticData('bigEye', statistic, 397)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[397] === null ||
                !isStatisticData('bigEye', statistic, 397)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[397].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[403] === null ||
                !isStatisticData('bigEye', statistic, 403)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[403] === null ||
                !isStatisticData('bigEye', statistic, 403)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[403].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[2] === null ||
                !isStatisticData('bigEye', statistic, 2)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[2] === null ||
                !isStatisticData('bigEye', statistic, 2)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[2].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[8] === null ||
                !isStatisticData('bigEye', statistic, 8)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[8] === null ||
                !isStatisticData('bigEye', statistic, 8)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[8].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[3] === null ||
                !isStatisticData('bigEye', statistic, 3)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[3] === null ||
                !isStatisticData('bigEye', statistic, 3)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[3].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[9] === null ||
                !isStatisticData('bigEye', statistic, 9)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[9] === null ||
                !isStatisticData('bigEye', statistic, 9)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[9].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
        </div>
        {indents8}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[398] === null ||
                !isStatisticData('bigEye', statistic, 398)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[398] === null ||
                !isStatisticData('bigEye', statistic, 398)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[398].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[404] === null ||
                !isStatisticData('bigEye', statistic, 404)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[404] === null ||
                !isStatisticData('bigEye', statistic, 404)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[404].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[399] === null ||
                !isStatisticData('bigEye', statistic, 399)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[399] === null ||
                !isStatisticData('bigEye', statistic, 399)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[399].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[405] === null ||
                !isStatisticData('bigEye', statistic, 405)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[405] === null ||
                !isStatisticData('bigEye', statistic, 405)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[405].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[4] === null ||
                !isStatisticData('bigEye', statistic, 4)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[4] === null ||
                !isStatisticData('bigEye', statistic, 4)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[4].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[10] === null ||
                !isStatisticData('bigEye', statistic, 10)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[10] === null ||
                !isStatisticData('bigEye', statistic, 10)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[10].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[5] === null ||
                !isStatisticData('bigEye', statistic, 5)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[5] === null ||
                !isStatisticData('bigEye', statistic, 5)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[5].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[11] === null ||
                !isStatisticData('bigEye', statistic, 11)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[11] === null ||
                !isStatisticData('bigEye', statistic, 11)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[11].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
        </div>
        {indents9}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[400] === null ||
                !isStatisticData('bigEye', statistic, 400)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[400] === null ||
                !isStatisticData('bigEye', statistic, 400)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[400].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[406] === null ||
                !isStatisticData('bigEye', statistic, 406)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[406] === null ||
                !isStatisticData('bigEye', statistic, 406)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[406].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[401] === null ||
                !isStatisticData('bigEye', statistic, 401)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[401] === null ||
                !isStatisticData('bigEye', statistic, 401)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[401].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[407] === null ||
                !isStatisticData('bigEye', statistic, 407)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[407] === null ||
                !isStatisticData('bigEye', statistic, 407)
                ? blue
                : statistic.roadmapdata.inGame.bigEye[407].v === 'p'
                  ? blue
                  : red
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd topBlack">
          <img
            className={
              statistic.roadmapdata.inGame.small[0] === null ||
                !isStatisticData('small', statistic, 0)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[0] === null ||
                !isStatisticData('small', statistic, 0)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[0].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[6] === null ||
                !isStatisticData('small', statistic, 6)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[6] === null ||
                !isStatisticData('small', statistic, 6)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[6].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[1] === null ||
                !isStatisticData('small', statistic, 1)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[1] === null ||
                !isStatisticData('small', statistic, 1)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[1].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[7] === null ||
                !isStatisticData('small', statistic, 7)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[7] === null ||
                !isStatisticData('small', statistic, 7)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[7].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
        </div>
        {indents10}
        <div className="columnRight-abcd topBlack">
          <img
            className={
              statistic.roadmapdata.inGame.roach[192] === null ||
                !isStatisticData('roach', statistic, 192)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[192] === null ||
                !isStatisticData('roach', statistic, 192)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[192].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[198] === null ||
                !isStatisticData('roach', statistic, 198)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[198] === null ||
                !isStatisticData('roach', statistic, 198)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[198].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[193] === null ||
                !isStatisticData('roach', statistic, 193)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[193] === null ||
                !isStatisticData('roach', statistic, 193)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[193].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[199] === null ||
                !isStatisticData('roach', statistic, 199)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[199] === null ||
                !isStatisticData('roach', statistic, 199)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[199].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.small[2] === null ||
                !isStatisticData('small', statistic, 2)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[2] === null ||
                !isStatisticData('small', statistic, 2)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[2].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[8] === null ||
                !isStatisticData('small', statistic, 8)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[8] === null ||
                !isStatisticData('small', statistic, 8)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[8].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[3] === null ||
                !isStatisticData('small', statistic, 3)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[3] === null ||
                !isStatisticData('small', statistic, 3)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[3].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[9] === null ||
                !isStatisticData('small', statistic, 9)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[9] === null ||
                !isStatisticData('small', statistic, 9)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[9].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
        </div>
        {indents11}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.roach[194] === null ||
                !isStatisticData('roach', statistic, 194)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[194] === null ||
                !isStatisticData('roach', statistic, 194)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[194].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[200] === null ||
                !isStatisticData('roach', statistic, 200)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[200] === null ||
                !isStatisticData('roach', statistic, 200)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[200].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[195] === null ||
                !isStatisticData('roach', statistic, 195)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[195] === null ||
                !isStatisticData('roach', statistic, 195)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[195].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[201] === null ||
                !isStatisticData('roach', statistic, 201)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[201] === null ||
                !isStatisticData('roach', statistic, 201)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[201].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
        </div>
      </div>
      <div className="row-abcd">
        <div className="columnLeft-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.small[4] === null ||
                !isStatisticData('small', statistic, 4)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[4] === null ||
                !isStatisticData('small', statistic, 4)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[4].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[10] === null ||
                !isStatisticData('small', statistic, 10)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[10] === null ||
                !isStatisticData('small', statistic, 10)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[10].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[5] === null ||
                !isStatisticData('small', statistic, 5)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[5] === null ||
                !isStatisticData('small', statistic, 5)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[5].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[11] === null ||
                !isStatisticData('small', statistic, 11)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[11] === null ||
                !isStatisticData('small', statistic, 11)
                ? blueSolid
                : statistic.roadmapdata.inGame.small[11].v === 'p'
                  ? blueSolid
                  : redSolid
            }
            alt="icon"
          />
        </div>
        {indents12}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.roach[196] === null ||
                !isStatisticData('roach', statistic, 196)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[196] === null ||
                !isStatisticData('roach', statistic, 196)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[196].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[202] === null ||
                !isStatisticData('roach', statistic, 202)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[202] === null ||
                !isStatisticData('roach', statistic, 202)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[202].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[197] === null ||
                !isStatisticData('roach', statistic, 197)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[197] === null ||
                !isStatisticData('roach', statistic, 197)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[197].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[203] === null ||
                !isStatisticData('roach', statistic, 203)
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[203] === null ||
                !isStatisticData('roach', statistic, 203)
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[203].v === 'p'
                  ? roachBlue
                  : roachRed
            }
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default renderBacAndDTRoadmap;
