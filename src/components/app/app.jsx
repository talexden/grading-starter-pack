import {ThemeProvider} from 'styled-components';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import {appTheme} from './common';
import * as S from './app.styled';
import ErrorScreen from '../error-screen/error-screen';
import {AppRoute} from '../../utils/const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router >
      <Switch>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={`${AppRoute.QuestDetails}:id`}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
