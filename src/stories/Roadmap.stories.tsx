import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RoadMapComponent, { RoadmapProps } from '../components/Roadmap';

import LWResult from './LWResult.json';
import DIResult from './DIResult.json';
import DILResult from './DILResult.json';
import ROResult from './ROResult.json';
import ROLResult from './ROLResult.json';
import DTResult from './DTResult.json';
import LWStat from '../components/Statistic/LWStat';

export default {
  title: 'Example/Roadmap',
  component: RoadMapComponent,
} as Meta;

const Template: Story<RoadmapProps> = (args) => {
  const { gameType, roadmapData, lang } = args;
  return (
    <div style={{ width: 441 }}>
      {gameType=="LW"
      ?<>
        <LWStat roadmapData={roadmapData}/>
        <RoadMapComponent
          roadmapData={roadmapData}
          gameType={gameType}
          lang={lang}
        />
      </>
      :<RoadMapComponent
        roadmapData={roadmapData}
        gameType={gameType}
        lang={lang}
      />}
    </div>
  );
};

export const BAS = Template.bind({});
BAS.args = {
  gameType: 'BAS',
  roadmapData: { all: { value: 'eJzsXUt3HEcV1oykkdQBEoZAnCEkpkN4NAhGPW+tevSakTQvaSSRhIci7IAtJbEVyDn8AjbsWXvJYcmKw4Y9G/4EP4QzXY++9VVV28eOZNnc0wsl907fW7ce31d155Yn+EsSvF1+a7n4WuF2KXp9M241dna6J9XGZNBrnHT3G3FP61ekfnSQ6dvNXvBWubJcvL0stSe7mbZ7JLSF20Wh7bXiTLu9Bu/2dojlflto52/PS+2ItGtvqt5dEtp+lWhHVdHqwq2Cst3vEM8H21V4u0dafbSjbMuI++Ps3UG1od5dkNqTrNWDmtTq3tptZ5YHzS3U9rNWDzrDqm610o+J7U3dI3Kk9qrE9k5XtUtpScSD3X3wvNcn7w6OoD/2JuTd8Z5oVzHrzf2Y6A+H4Hm/Q2wfy76eV7b3d7OYh2tD1deLUnuQWR7WJ6rV0u8gzvpj2K7DHBhsZH6HG1s9M+LBHvG73YKIB4fEb+9AvStbNawRy/v1Kmg3iOXRDmr3iOWDNrRqSP1Oj2HmjWLi9+QA3h11s3dH8TFENNrN+mrUrKLlQ6LtNHuIAmMS8WizCWM43iSed/Z75viP94l2dwNaPZ4Sz4PNnrmaJg3id6wjlpYn21lPj6bNqokukyHRnqzB7JicZK0ax/WeGdFBK/M7bui5o7QEE8ftLkR0QJBpvNGqwrvHWbzjbdXT2Vo6bBLP/biKeHtIYh7vnVTNHjkckahGjQz35Ow7JOg0Puha3qcEn8ZHuxZuTnuZ90l1C9bjlODTpDbsBXNX8ZQr5VvLxdDJToYOmMnQAS+V59Jn9olC6OQm+YnZI0fklvok8BT1gzykbRBPyEXEE7UEnGTogJEMHfCR7R85ydABI6WxF7LYkZHsdiPvQHTSDvKPuw+Qh6gOOQhHCVnIeBdYBluHPONuHfKNO1LkHY8t4B+3LeQhQwcsZOiAgwwdMBC2DDnI3TLkIneUyEmGDhgJxxMZib6LjIOtQ85xtw65xx0pcpChAwbyIQhykdsTso6hA84xdMA4dqTIOYYO+MbVMmQdQweM4+ppZB13/Mg9hg6Yh1j4Up5K6qvsxHuqQ7w3dIDzhg7Q3dABuldEa4plJ75X5vRDbCDGw6ekLUR7QwdIT3WI8bZ/xHe3f8R3dyyI9G5biPeGDvDe5QUx39AB0rv8I84bOkB3qkNMt1uGyO6OHzHe0AHGu+JHnDd0gO4u/4jt7rFElHfHglhv6ADrXV4Q76kOUd7lHzHeHQuivaEDhKc6xHVDB7iOLUNsd7cM8d3dy4j0HluA9R5bgPpUh2jv8oJYb+gA60kL+HnJnpAyHXBrOKefHJaFTxXdfGvogG+dXoB1wxyuNXTAsHbLkGfdUSLjhjlca+iAYcMcXsWWIaOGOYzqajMyqntkkFvd8SO7emwBz4Y5POvygkzr9oJMG+YwrcsLMq3bC3Kuu1+QdcMcrnV5QaYNc5jW5R+Z1h0Lcq47FmTdMIdrwxyutf0j4xo6YFxXy5B1wxyuNXTAsGEOr2KbkVHdfYbcGuZwqmtkkFuJlyt4opwTUJRzAorm5JNzDtKfMbwgNsOnPOcgjy1A6igHn11eEKfdXhCx3S1G7I5ycNvlBfE7ysFtl39E7SjnJOTyj0jtjhIx291jiNoeW4DaUQ5qu7wgaru9IGpHOSckQwdYHeVgdJSD0YYOsDnKwUxXLIjaUQ6iOt8HPI9yzjnO9wHzo5xzkHtmIDa7xwxR2tABSju9AFJHOfgc5eCz3TJEZ9L+K37K/+lyYQAXBnBhABcGcGGA1nJhwNMWBrxXfne5EL1zerq62p3unx6Ou1unk8Ptrd3No+2t0153uL26enrK1QNcPcDVA1w9wNUDXD1wrdUDKT2Fj6MnLjHgEgNKClxiwCUGPS4xeJlLDGbEUCw/jhiu+ltxfq774ToErkPgOgQXMXMdAiVkrkO48jqE9Gz2WArmYgUuVuBiBS5W6HGxgobyG1Os8GQQfrUVDRWuaHAxGVc0cEUDVzRQxuKKBsqVXNGQU9FQ5IoGrmgwaIsrGjJS4oqGjLC4ooErGp7Lv4eQ0tQ1VTZwRQNXNHBFA1c0cEXDDaxoeLIc3PV8u87P9T9c0cAVDVzR4CJmrmighMwVDVdU0fBkpYRffh0DVzRwRQNXNHBFA1c0PHNFw5NB+NXWMWRPOBfNxXPrf1ri9Dqn1zm9/rz/ueGNf7zC34zyN6NOuOVvRhm6GbpvLHTv3Qnc/bjvkZfufXz2+R/alcU7n3zxm06U/mnHy3fvn3364LO7rfXS7x+e3f34IlnqL04Kjwo/+Wvhv68qJ1bJzr5HLpycV+TfUPw9i4TxZiz+XiaFfmlSfFQopE4+DNxYsuGRC6OtijAWR+L/G7GILFnpL8wCeDO1/VthA0viyiOPXPdHZSm1vlaVba/Ltp+tC3dxstRfmsw/Knwv9fNJ4MbeI49cGpUxXIZp2y8j5V71lBqWOFnoL8567Fupt18Fbhbd9si1WYyqJTrtIin1l2bmV1LzvwzcdLjlkcueqSg3bTkkdWG9nqz0l2dD8rXU+ueBG04+9MiXUltrVW0+DtV/XUhHZ7GccOtKc5kU+4WZzx/RKWYtzQ2PXHWTnMgNsVx0PIv95Vlv1ehgWKVr2x65MFmTpmtyJC71Uuwkpf7KzHwxNf8gcO8Wfu6RC3M1ObPOwxVpVo95tujj9TSeVjIvRr+cOvxF4KbGTY9cxNHUw3MpOutCrUcZzTup8XuBmyMmHnlqoymD6eiBP9Mrpa6jqalJHKWePg7cu4OhR667XyBkU0TRycxrhFzsF2cz6zupmw8C90aj65GL3uqo4RFezkVfnSUrYtK+nZr+NHDz0bFHrsBXr/ZQLR3dW2fCUSxjaSWlmbs1Ou4W+Wx65HoRig5ra6AULpLlfmq8Qcfd2uNNPHI9mYTxBhlv2YPr2XqRA/Lt1NNDYdGqBX3fIxdLQHdagy6YDI7Fwtc+L5LU40Lq8SJwnzymHrmwJdd/W8/pluJkSZZyjM4VoX2FzjfriNH1yOXKkd4uhA8ZT1uZ/jrlSmuHNfLIxZyVM7kZqckmB6ixnnWk2lT8NPXz68C9y9vxyDNOFjNLD0tNdlVbrZtV2kXWSbTrkUuK1YHIrpJxXCQpdy3TyWUdQ9/3yOVeoVKaNXytaoNxje7ABGkmxf7CDMZeoZPLOoJMPXIF/2o0Qolmkm1UUHpfsSJG5jZFHOuscOyRK2d6WQhvLRtvtEDE9gMam7Upn3rkEoDlQF2EsJmJJeNoZ23BPNXU2Wngzm/0PHJF0zblNGO1BVwQ+4DF1MHdwH3YHXjkODcUI8jtbaxGMCkKWqukXi4D9yH+A49cc71EgA7BG91PMqCm3ttK7H6DDpN1Bp965Mrsud492WR9oQfpPFkUIPRW6uyzwH2YPvHIAb5r2aQQGu2xoT02RH9+l4KedUAfeeSCjrS/jrWpqslObCcLYvqFlF2tFNSmRy6MXKpRk24asZwtat1+lc5tK3PW88gzdtXTQ067jj6iFUXrA3oisNJSWx55tn8WS1U2P9tNdcTK+QaFHSuRceyRyz7Idpxy7XT0qUZuReRQ1BTPfd8Accxmvu+R45DLU21bj4meynqKxWrRLlFosLKHA49cgnQG4nJrZ3k8E+fo1yjv4RU+xXuWXHaWnGKXxla0pY6336RnHCu1su2Rq10uORGqU7QkuSUxAX6Wmr8vMRgukZYPPHLZDXKnHmaTWByjRQjn4nRTS+b787NISnQorITbwCMXZxnh6SJUZ7aMxxV0JvNiKN6lkGmlaaceOZ6h6tJT3Tyn10RIzWRBOHs9dfZR4M7Y9j1yQckipLroMrIvkOMjz1K36FnKyg4OPXIzDaQ2HxlG1tcVypTE1v2HdGNoXfTa8cg1oKvzoZrCetophp6n3GklVD/wyGVfSOvZTv1cE9plnM0ENTZFMTbv0emGFxjVdLPkMp+hey5zJE8gCtHk8vwxzT5Z2ckjj1zyMmw9JAI09AZeD5ei6JjOBiuDOfTIyX5Abtxkh2ruVIwptx311M25BEe4R10+9MizkZB+Go50wbk6XSWlfmnWga/OfB2WNzZXN7rTjdUHd+7fOav/7ov71Q/FnOucNLr13tqkXW2OR93qR2/ee+Ph4h/n/1b49yrfJee75HyXnCIm3yWnCZKX+i45Xu7mL5f5y+UsMcRfLr/QXy7zrVi+Fcu3YvlWLN+KvYG3Yq/p8uWTPHx1j2IGX93jq3s35uqe/zYd3wfj+2A56MD3wV7q+2DOa1l/L/x5lfPCnBfmvLDUcl74efxqKieSOZHMieQXNpH8tL9IydlmzjZztpmzzZxtvsHZ5hflVyU52UzBg5PNFDQ42XzlyeZn+eU7zi5TgODsMl2enF3OAOGFyC4/y++n/bPwL05Hczqa09FKy+no5/GTV5xo5kQzJ5pvYKJZvf8sPxTESWdOOnPSmZPOnHS+gUnnF+2Hf7gOmgILp6Y5NX1jUtNP/xMmXCzN6WxOZ/9fp7Of/scz/hcAAP//rhkisg==' } },
};

export const DT = Template.bind({});
DT.args = {
  gameType: 'DT',
  roadmapData: DTResult.data.roadmap.roadmapData,
};

export const DI = Template.bind({});
DI.args = {
  gameType: 'DI',
  roadmapData: DIResult.data.roadmap.roadmapData,
};

export const DIL = Template.bind({});
DIL.args = {
  gameType: 'DIL',
  roadmapData: DILResult.data.roadmap.roadmapData,
};

export const ROL = Template.bind({});
ROL.args = {
  gameType: 'ROL',
  roadmapData: ROLResult.data.roadmap.roadmapData,
  lang: 'en',
};

export const RO = Template.bind({});
RO.args = {
  gameType: 'RO',
  roadmapData: ROResult.data.roadmap.roadmapData,
  lang: 'en',
};

export const LW = Template.bind({});
LW.args = {
  gameType: 'LW',
  roadmapData: LWResult.data.roadmap.roadmapData,
};

// export const DI = Template.bind({});
// DI.args = {
//   gameRoundID: 'BU1I1GPT726CTSUICDF0',
//   gameType: 'DI',
//   url: 'https://dev-backoffice-api.weapi247.com/gameresult',
//   // primary: true,
//   // label: "Button",
// };

// export const ROL = Template.bind({});
// ROL.args = {
//   gameRoundID: 'BU1I1G1T726CTSUICDD0',
//   gameType: 'ROL',
//   url: 'https://dev-backoffice-api.weapi247.com/gameresult',
//   // primary: true,
//   // label: "Button",
// };
