import React from 'react';

const renderHeader = (items: any, gameType: any): React.ReactNode => {
  switch (gameType) {
    case 'BAC':
    case 'BAS':
    case 'BAI':
    case 'BAM': {
      return (
        <div className="headerDetail">
          遊戲 : 百家樂 | 檯號 : {items.tableID} | 局號 : {items.gameRoundID} |
          靴-局數 : {items.shoe} - {items.round}
        </div>
      );
    }
    case 'DT': {
      return (
        <div className="headerDetail">
          遊戲 : 龍虎 | 檯號 : {items.tableID} | 局號 : {items.gameRoundID} |
          靴-局數 : {items.shoe} - {items.round}
        </div>
      );
    }
    case 'DI': {
      return (
        <div className="headerDetail">
          遊戲 : 骰寶 | 檯號 : {items.tableID} | 局號 : {items.gameRoundID} |
          靴-局數 : {items.round}
        </div>
      );
    }
    case 'DIL': {
      return (
        <div className="headerDetail">
          遊戲 : 財神骰寶 | 檯號 : {items.tableID} | 局號 : {items.gameRoundID}{' '}
          | 靴-局數 : {items.round}
        </div>
      );
    }
    case 'RO':
    case 'ROL': {
      return (
        <div className="headerDetail">
          遊戲 : 輪盤 | 檯號 : {items.tableID} | 局號 : {items.gameRoundID} |
          靴-局數 : {items.round}
        </div>
      );
    }
    case 'LW': {
      return (
        <div className="headerDetail">
          遊戲 : 幸運輪 | 檯號 : {items.tableID} | 局號 : {items.gameRoundID} |
          靴-局數 : {items.round}
        </div>
      );
    }

    default: {
      return <></>;
    }
  }
};

export default renderHeader;
