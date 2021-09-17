import axios from 'axios';

const baseURL = process.env.GRIDSOME_MAILCHIMP_WORKER_BASE_URL;

const client = axios.create({ baseURL });

export default {
  subscribe(email, emailMd5) {
    if (!email) return;
    const req = { email, emailMd5 };
    return client.post('', req);
  }
}
