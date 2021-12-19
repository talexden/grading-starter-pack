import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../loading/loading';
import {useEffect} from 'react';
import {setClearSelectedQuest} from '../../store/action';


const HomePage = () => {
  const quests = useSelector(state => state.quests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClearSelectedQuest());
  }, [dispatch]);
  if (quests.length > 0 ) {
    return (
      <MainLayout>
        <S.Main forwardedAs="main">
          <PageHeading>
            <PageTitle>Выберите тематику</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </PageHeading>
          <QuestsCatalog />
        </S.Main>
      </MainLayout>
    );
  } else {
    return (<Loading />)
  }
};

export default HomePage;
