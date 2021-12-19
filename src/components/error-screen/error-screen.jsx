import {
  MainLayout,
  PageTitle,
  PageHeading,
} from 'components/common/common';
import * as S from './error-screen.styled';

function ErrorScreen() {
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>404 Not Found.</PageTitle>
        </PageHeading>
      </S.Main>
    </MainLayout>
  );
}

export default ErrorScreen;
