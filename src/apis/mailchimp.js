import axios from 'axios';

const baseURL = process.env.GRIDSOME_MAILCHIMP_WORKER_BASE_URL;

const client = axios.create({ baseURL });

export default {
  subscribe(email) {
    if (!email) return;
    const req = { email };
    return client.post('', req);
  }
}
