import React from 'react';
import blue from '../../../assets/blue.png';
import blueSolid from '../../../assets/blueSolid.png';
import roachBlue from '../../../assets/roachBlue.png';
import red from '../../../assets/red.png';
import redSolid from '../../../assets/redSolid.png';
import roachRed from '../../../assets/roachRed.png';

const renderBacAndDTRoadmap = (statistic): React.ReactNode => {
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
            statistic.roadmapdata.inGame.bigRoad[i * 6] === null
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6] === null
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
      </div>
    );
    indents2.push(
      <div className="column-abcd" key={(i + 32 * 1).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 1] === null
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 1] === null
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
      </div>
    );
    indents3.push(
      <div className="column-abcd" key={(i + 32 * 2).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 2] === null
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 2] === null
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
      </div>
    );
    indents4.push(
      <div className="column-abcd" key={(i + 32 * 3).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 3] === null
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 3] === null
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
      </div>
    );
    indents5.push(
      <div className="column-abcd" key={(i + 32 * 4).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 4] === null
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 4] === null
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
      </div>
    );
    indents6.push(
      <div className="column-abcd" key={(i + 32 * 5).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 5] === null
              ? 'srcInvisible'
              : 'srcVisible'
          }
          src={
            statistic.roadmapdata.inGame.bigRoad[i * 6 + 5] === null
              ? blue
              : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
      </div>
    );
    indents7.push(
      <div className="column-abcd topBlack" key={(i + 32 * 8).toString()}>
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6] === null
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6] === null
              ? blue
              : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1] === null
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1] === null
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
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2] === null
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2] === null
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
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2] === null
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
            null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2] ===
            null
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
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4] === null
              ? blue
              : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4].v === 'p'
              ? blue
              : red
          }
          alt="icon"
        />
        <img
          className={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4] === null
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
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4] === null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4] === null
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
            null
              ? 'srcInvisibleSmall'
              : 'srcVisibleSmall'
          }
          src={
            statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4] ===
            null
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
              statistic.roadmapdata.inGame.small[i * 2 * 6] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1] === null
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
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 2] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 2] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 2].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2] === null
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
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2] === null
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
              null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2] ===
              null
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
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 4] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 4] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[i * 2 * 6 + 4].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4] === null
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
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4] === null
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
              null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4] ===
              null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 2].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] === null
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
                null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 4].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] === null
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
                null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 2].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] === null
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
                null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null
                  ? roachBlue
                  : statistic.roadmapdata.inGame.small[j * 2 * 6 + 4].v === 'p'
                  ? roachBlue
                  : roachRed
              }
              alt="icon"
            />
            <img
              className={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] === null
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
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] === null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] === null
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
                null
                  ? 'srcInvisibleSmall'
                  : 'srcVisibleSmall'
              }
              src={
                statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                null
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
              statistic.roadmapdata.inGame.bigRoad[0] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[0] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[0].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
        </div>
        {indents1}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[198] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[198] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[198].v === 'p'
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
              statistic.roadmapdata.inGame.bigRoad[1] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[1] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[1].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
        </div>
        {indents2}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[199] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[199] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[199].v === 'p'
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
              statistic.roadmapdata.inGame.bigRoad[2] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[2] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[2].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
        </div>
        {indents3}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[200] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[200] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[200].v === 'p'
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
              statistic.roadmapdata.inGame.bigRoad[3] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[3] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[3].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
        </div>
        {indents4}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[201] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[201] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[201].v === 'p'
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
              statistic.roadmapdata.inGame.bigRoad[4] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[4] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[4].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
        </div>
        {indents5}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[202] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[202] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[202].v === 'p'
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
              statistic.roadmapdata.inGame.bigRoad[5] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[5] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[5].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
        </div>
        {indents6}
        <div className="columnRight-abcd">
          <img
            className={
              statistic.roadmapdata.inGame.bigRoad[203] === null
                ? 'srcInvisible'
                : 'srcVisible'
            }
            src={
              statistic.roadmapdata.inGame.bigRoad[203] === null
                ? blue
                : statistic.roadmapdata.inGame.bigRoad[203].v === 'p'
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
              statistic.roadmapdata.inGame.bigEye[0] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[0] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[0].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[6] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[6] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[6].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[1] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[1] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[1].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[7] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[7] === null
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
              statistic.roadmapdata.inGame.bigEye[396] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[396] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[396].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[402] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[402] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[402].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[397] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[397] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[397].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[403] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[403] === null
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
              statistic.roadmapdata.inGame.bigEye[2] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[2] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[2].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[8] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[8] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[8].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[3] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[3] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[3].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[9] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[9] === null
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
              statistic.roadmapdata.inGame.bigEye[398] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[398] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[398].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[404] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[404] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[404].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[399] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[399] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[399].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[405] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[405] === null
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
              statistic.roadmapdata.inGame.bigEye[4] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[4] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[4].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[10] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[10] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[10].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[5] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[5] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[5].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[11] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[11] === null
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
              statistic.roadmapdata.inGame.bigEye[400] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[400] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[400].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[406] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[406] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[406].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[401] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[401] === null
                ? blue
                : statistic.roadmapdata.inGame.bigEye[401].v === 'p'
                ? blue
                : red
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.bigEye[407] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.bigEye[407] === null
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
              statistic.roadmapdata.inGame.small[0] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[0] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[0].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[6] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[6] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[6].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[1] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[1] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[1].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[7] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[7] === null
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
              statistic.roadmapdata.inGame.roach[192] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[192] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[192].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[198] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[198] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[198].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[193] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[193] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[193].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[199] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[199] === null
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
              statistic.roadmapdata.inGame.small[2] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[2] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[2].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[8] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[8] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[8].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[3] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[3] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[3].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[9] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[9] === null
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
              statistic.roadmapdata.inGame.roach[194] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[194] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[194].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[200] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[200] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[200].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[195] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[195] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[195].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[201] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[201] === null
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
              statistic.roadmapdata.inGame.small[4] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[4] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[4].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[10] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[10] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[10].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[5] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[5] === null
                ? blueSolid
                : statistic.roadmapdata.inGame.small[5].v === 'p'
                ? blueSolid
                : redSolid
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.small[11] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.small[11] === null
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
              statistic.roadmapdata.inGame.roach[196] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[196] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[196].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[202] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[202] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[202].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[197] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[197] === null
                ? roachBlue
                : statistic.roadmapdata.inGame.roach[197].v === 'p'
                ? roachBlue
                : roachRed
            }
            alt="icon"
          />
          <img
            className={
              statistic.roadmapdata.inGame.roach[203] === null
                ? 'srcInvisibleSmall'
                : 'srcVisibleSmall'
            }
            src={
              statistic.roadmapdata.inGame.roach[203] === null
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
