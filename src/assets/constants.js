import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 132 },
  { title: 'Hip-Hop', value: 116 },
  { title: 'Dance', value: 113 },
  { title: 'Electronic', value: 106 },
  { title: 'Soul', value: 152 },
  { title: 'Alternative', value: 85 },
  { title: 'Rock', value: 152 },
  { title: 'Latin', value: 125 },
  { title: 'Film', value: 324 },
  { title: 'Country', value: 6 },
  { title: 'Worldwide', value: 0 },
  { title: 'Reggae', value: 113 },
  { title: 'House', value: 113 },
  { title: 'K-Pop', value: 135 },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
