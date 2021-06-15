import React, { useEffect, useState, useCallback } from 'react';
import './index.css';
// @ts-ignore
import { ConvertCMSStatistic } from 'playerclient';
import renderBacAndDTRoadmap from './fns/renderBacAndDTRoadmap';
import renderBacGameresult from './fns/renderBacGameresult';
import renderDtGameresult from './fns/renderDtGameresult';
import renderDiGameresult from './fns/renderDiGameresult';
import renderDiRoadmap from './fns/renderDiRoadmap';
import renderRoGameresult from './fns/renderRoGameresult';
import renderRoRoadmap from './fns/renderRoRoadmap';
import renderLwGameresult from './fns/renderLwGameresult';
import renderLwRoadmap from './fns/renderLwRoadmap';
import renderBacStat from './fns/renderBacStat';
import renderDtStat from './fns/renderDtStat';
import renderDiStat from './fns/renderDiStat';
import renderRoStat from './fns/renderRoStat';
import renderLwStat from './fns/renderLwStat';



export interface RoadmapProps {
  gameType: string;
  roadmapData: any;
  lang?: string;
}

const gametypemap: { [key: string]: number } = {
  BAC: 0,
  BAS: 1,
  BAI: 2,
  DT: 5,
  DI: 12,
  MJ: 13,
  RO: 14,
  LO: 15,
  LW: 16,
  ROL: 17,
  BAM: 18,
  DIL: 19,
  SLOT: 20,
  MS: 21,
  RC: 22,
  F3: 23,
  E5: 24,
  L28: 25,
};

const RoadMapComponent: React.FC<RoadmapProps> = (props) => {
  const { gameType, roadmapData } = props;
  const [statistic, setStatistic] = useState(undefined);

  const renderContent = useCallback((): any => {
    let lang = props.lang || "ch";
    if (gameType && statistic) {
      switch (gameType) {
        case 'BAC':
        case 'BAS':
        case 'BAI':
        case 'BAM':
        case 'BAB':
        case 'BASB':
        case 'BAIB':
        case 'BAMB': {
          return <>{renderBacAndDTRoadmap(statistic)}</>;
        }
        case 'DT':
        case 'DTB': {
          return <>{renderBacAndDTRoadmap(statistic)}</>;
        }
        case 'DI':
        case 'DIL': {
          return <>{renderDiRoadmap(statistic, gameType)}</>;
        }
        case 'RO':
        case 'ROL': {
          return <>{renderRoRoadmap(statistic, lang)}</>;
        }
        case 'LW': {
          return <>{renderLwRoadmap(statistic)}</>;
        }
        default:
          return <>GameType {gameType} not supported</>;
      }
    }
  }, [gameType, statistic]);

  useEffect(() => {
    if (props.roadmapData != undefined) {
      switch (gameType) {
        case "BAB":
        case "BASB":
        case "BAIB":
        case "BAMB":
          setStatistic(ConvertCMSStatistic(gametypemap["BAC"], roadmapData));
          break;

        case "DTB":
          setStatistic(ConvertCMSStatistic(gametypemap["DT"], roadmapData));
          break;

        case "RO":
          let rodata = ConvertCMSStatistic(gametypemap[gameType], roadmapData);
          let last36Rounds = Object.keys(rodata.roadmapdata.gameInfo)
            .sort()
            .reverse()
            .slice(0, 36)
            .map(k => rodata.roadmapdata.gameInfo[k]);
          rodata.last36Rounds = last36Rounds;
          setStatistic(rodata);
          console.log(rodata);
          break;

        case "ROL":
          let roldata = ConvertCMSStatistic(gametypemap[gameType], roadmapData);
          let last20Rounds = Object.keys(roldata.roadmapdata.gameInfo)
            .sort()
            .reverse()
            .slice(0, 20)
            .map(k => roldata.roadmapdata.gameInfo[k]);
          roldata.last20Rounds = last20Rounds;
          setStatistic(roldata);
          break;

        case "DIL":
          let dildata = ConvertCMSStatistic(gametypemap[gameType], roadmapData);
          let last16Rounds = Object.keys(dildata.roadmapdata.gameInfo)
            .sort()
            .reverse()
            .slice(0, 16)
            .map(k => dildata.roadmapdata.gameInfo[k]);
          dildata.last16Rounds = last16Rounds;
          setStatistic(dildata);
          break;

        default:
          setStatistic(ConvertCMSStatistic(gametypemap[gameType], roadmapData));
      }
    }

    return (): void => {
      setStatistic(undefined);
    };
  }, [gameType, roadmapData]);

  return (
    <div className="modal-abcd">
      <div className="content">
        <div id="div1-abcd">{renderContent()}</div>
      </div>
    </div>
  );
};

export default RoadMapComponent;
