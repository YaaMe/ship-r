import axios from 'axios';
import { HOST, TIMEOUT } from 'configs';

export const server = axios.create({
  baseURL: HOST,
  timeout: TIMEOUT,
});

export const middleware = store => next => action => {
  const {
    requestBody,
    onSuccess = (response) => ({ type: `${action.type}:success`, response }),
    onError = (response) => ({ type: `${action.type}:error`, response })
  } = action.$fetch;
  server.request(requestBody)
    .then(resp => store.dispatch(onSuccess(resp)))
    .catch(resp => store.dispatch(onError(resp)));
  return next(action);
};
