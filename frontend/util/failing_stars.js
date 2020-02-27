import axios from 'axios';

export const requestStar = () => axios.get("https://starscape.voltron-eng.com/failing-stars");
