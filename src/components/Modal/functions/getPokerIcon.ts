import b from '../../../assets/trame_story.png';
import d1 from '../../../assets/pokers/d1.svg';
import d2 from '../../../assets/pokers/d2.svg';
import d3 from '../../../assets/pokers/d3.svg';
import d4 from '../../../assets/pokers/d4.svg';
import d5 from '../../../assets/pokers/d5.svg';
import d6 from '../../../assets/pokers/d6.svg';
import d7 from '../../../assets/pokers/d7.svg';
import d8 from '../../../assets/pokers/d8.svg';
import d9 from '../../../assets/pokers/d9.svg';
import d10 from '../../../assets/pokers/d10.svg';
import d11 from '../../../assets/pokers/d11.svg';
import d12 from '../../../assets/pokers/d12.svg';
import d13 from '../../../assets/pokers/d13.svg';
import h1 from '../../../assets/pokers/h1.svg';
import h2 from '../../../assets/pokers/h2.svg';
import h3 from '../../../assets/pokers/h3.svg';
import h4 from '../../../assets/pokers/h4.svg';
import h5 from '../../../assets/pokers/h5.svg';
import h6 from '../../../assets/pokers/h6.svg';
import h7 from '../../../assets/pokers/h7.svg';
import h8 from '../../../assets/pokers/h8.svg';
import h9 from '../../../assets/pokers/h9.svg';
import h10 from '../../../assets/pokers/h10.svg';
import h11 from '../../../assets/pokers/h11.svg';
import h12 from '../../../assets/pokers/h12.svg';
import h13 from '../../../assets/pokers/h13.svg';
import c1 from '../../../assets/pokers/c1.svg';
import c2 from '../../../assets/pokers/c2.svg';
import c3 from '../../../assets/pokers/c3.svg';
import c4 from '../../../assets/pokers/c4.svg';
import c5 from '../../../assets/pokers/c5.svg';
import c6 from '../../../assets/pokers/c6.svg';
import c7 from '../../../assets/pokers/c7.svg';
import c8 from '../../../assets/pokers/c8.svg';
import c9 from '../../../assets/pokers/c9.svg';
import c10 from '../../../assets/pokers/c10.svg';
import c11 from '../../../assets/pokers/c11.svg';
import c12 from '../../../assets/pokers/c12.svg';
import c13 from '../../../assets/pokers/c13.svg';
import s1 from '../../../assets/pokers/s1.svg';
import s2 from '../../../assets/pokers/s2.svg';
import s3 from '../../../assets/pokers/s3.svg';
import s4 from '../../../assets/pokers/s4.svg';
import s5 from '../../../assets/pokers/s5.svg';
import s6 from '../../../assets/pokers/s6.svg';
import s7 from '../../../assets/pokers/s7.svg';
import s8 from '../../../assets/pokers/s8.svg';
import s9 from '../../../assets/pokers/s9.svg';
import s10 from '../../../assets/pokers/s10.svg';
import s11 from '../../../assets/pokers/s11.svg';
import s12 from '../../../assets/pokers/s12.svg';
import s13 from '../../../assets/pokers/s13.svg';

const icon = {
  cluba: c1,
  club2: c2,
  club3: c3,
  club4: c4,
  club5: c5,
  club6: c6,
  club7: c7,
  club8: c8,
  club9: c9,
  club10: c10,
  clubj: c11,
  clubq: c12,
  clubk: c13,
  hearta: h1,
  heart2: h2,
  heart3: h3,
  heart4: h4,
  heart5: h5,
  heart6: h6,
  heart7: h7,
  heart8: h8,
  heart9: h9,
  heart10: h10,
  heartj: h11,
  heartq: h12,
  heartk: h13,
  diamonda: d1,
  diamond2: d2,
  diamond3: d3,
  diamond4: d4,
  diamond5: d5,
  diamond6: d6,
  diamond7: d7,
  diamond8: d8,
  diamond9: d9,
  diamond10: d10,
  diamondj: d11,
  diamondq: d12,
  diamondk: d13,
  spadea: s1,
  spade2: s2,
  spade3: s3,
  spade4: s4,
  spade5: s5,
  spade6: s6,
  spade7: s7,
  spade8: s8,
  spade9: s9,
  spade10: s10,
  spadej: s11,
  spadeq: s12,
  spadek: s13,
};

const getPokerIcon = (input) => {
  if (input !== '' && input in icon) return icon[input];
  // console.log('blank')
  return b;
};

export default getPokerIcon;
