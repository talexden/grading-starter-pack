import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import {useSelector} from 'react-redux';
import {Loading} from '../loading/loading';

const HomePage = () => {
  const quests = useSelector(state => state.quests);
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
