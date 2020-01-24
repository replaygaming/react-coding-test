import { FIXTURES_API_TIMEOUT_IN_MS } from '../../constants/APIConstants';

export const fetchData = async url => {
  // TODO: Check internet connectivity
  return fetch(url).then(data => data.json());
};

export const resolveWithTimeout = response =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, FIXTURES_API_TIMEOUT_IN_MS);
  });
