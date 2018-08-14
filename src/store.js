import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { higherOrderMiddleware } from 'redux-hom';
import { middleware as fetchMiddleware } from 'utils/Axios';
import reducers from './reducers';

export const history = createBrowserHistory();

const services = [{
  id: 'fetch',
  middleware: fetchMiddleware
}];

export const store = createStore(reducers, applyMiddleware(
  routerMiddleware(history),
  higherOrderMiddleware({ services })
));
