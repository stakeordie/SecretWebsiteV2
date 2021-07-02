import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/secret?community_data=false&developer_data=false';

export function getScrtInfo() {
    return axios.get(url);
}
