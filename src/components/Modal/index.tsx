import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './index.css';
import { Modal } from 'antd';
import { ConvertCMSStatistic } from 'playerclient';
import renderHeader from './functions/renderHeader';
import renderBacAndDTRoadmap from './functions/renderBacAndDTRoadmap';
import renderBacGameresult from './functions/renderBacGameresult';
import renderDtGameresult from './functions/renderDtGameresult';
import renderDiGameresult from './functions/renderDiGameresult';
import renderDiRoadmap from './functions/renderDiRoadmap';
import renderRoGameresult from './functions/renderRoGameresult';
import renderRoRoadmap from './functions/renderRoRoadmap';
import renderLwGameresult from './functions/renderLwGameresult';
import renderLwRoadmap from './functions/renderLwRoadmap';
import renderBacStat from './functions/renderBacStat';
import renderDtStat from './functions/renderDtStat';
import renderDiStat from './functions/renderDiStat';
import renderRoStat from './functions/renderRoStat';
import renderLwStat from './functions/renderLwStat';

export interface VideoProps {
  gameRoundID: string | null;
  gameType: string | null;
}

export interface ModalComponentProps extends VideoProps {
  visible: boolean;
  onCancel: () => void;
  url: string;
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

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { visible, onCancel, gameRoundID, gameType, url } = props;
  const [items, setItems] = useState(undefined);
  const [statistic, setStatistic] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const renderHeaderContent = useCallback((): any => {
    if (!isError && isLoaded && gameType && items) {
      return renderHeader(items, gameType);
    }
  }, [gameType, isError, isLoaded, items]);

  const renderContent = useCallback((): any => {
    if (!isError && isLoaded && gameType && statistic && items) {
      switch (gameType) {
        case 'BAC':
        case 'BAS':
        case 'BAI':
        case 'BAM': {
          return (
            <>
              {renderBacGameresult(items)}
              {renderBacAndDTRoadmap(statistic)}
            </>
          );
        }
        case 'DT': {
          return (
            <>
              {renderDtGameresult(items)}
              {renderBacAndDTRoadmap(statistic)}
            </>
          );
        }
        case 'DI':
        case 'DIL': {
          return (
            <>
              {renderDiGameresult(items)}
              {renderDiRoadmap(statistic, gameType)}
            </>
          );
        }
        case 'RO':
        case 'ROL': {
          return (
            <>
              {renderRoGameresult(items)}
              {renderRoRoadmap(statistic)}
            </>
          );
        }
        case 'LW': {
          return (
            <>
              {renderLwGameresult(items)}
              {renderLwRoadmap(statistic)}
            </>
          );
        }
        default:
          break;
      }
    }
  }, [gameType, isError, isLoaded, items, statistic]);

  const renderStat = useCallback((): any => {
    if (!isError && isLoaded && gameType && statistic) {
      switch (gameType) {
        case 'BAC':
        case 'BAS':
        case 'BAI':
        case 'BAM': {
          return <>{renderBacStat(items)}</>;
        }
        case 'DT': {
          return <>{renderDtStat(items)}</>;
        }
        case 'DI':
        case 'DIL': {
          return <>{renderDiStat(statistic, items, gameType)}</>;
        }
        case 'RO':
        case 'ROL': {
          return <>{renderRoStat()}</>;
        }
        case 'LW': {
          return <>{renderLwStat()}</>;
        }
        default:
          break;
      }
    }
  }, [isError, isLoaded, gameType, statistic, items]);

  useEffect(() => {
    if (visible && gameRoundID && gameType) {
      (async (): Promise<void> => {
        try {
          const { data } = await axios.get(url, {
            params: {
              gameroundID: gameRoundID,
            },
          });
          const { data: result } = data;
          setItems(result);
          setStatistic(
            ConvertCMSStatistic(
              gametypemap[gameType],
              result.roadmap.roadmapData
            )
          );
          setIsLoaded(true);
          console.log(data);
        } catch (error) {
          console.log(error.response);
          setIsError(true);
        }
      })();
    }
    return (): void => {
      setIsLoaded(false);
      setIsError(false);
      setStatistic(undefined);
      setItems(undefined);
    };
  }, [visible, gameRoundID, gameType, url]);

  return (
    <Modal
      visible={visible}
      footer={null}
      destroyOnClose
      centered
      onCancel={onCancel}
    >
      <div className="modal-abcd">
        {renderHeaderContent()}
        <div className="content">
          <div id="div1-abcd">{renderContent()}</div>
          <div id="div2-abcd">
            <span className="label-abcd success-abcd">視頻</span>
            <br />
            <br />
            {/* <Player
              playsInline
              // poster="/assets/poster.png"
              src="http://media.w3.org/2010/05/bunny/movie.mp4"
            /> */}
            {renderStat()}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
