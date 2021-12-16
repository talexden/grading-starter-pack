import { StrictMode } from 'react';
import App from 'components/app/app';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {fetchData} from './services/api-action';

const api = createAPI()

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);


store.dispatch(fetchData());

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);
