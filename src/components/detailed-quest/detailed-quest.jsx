import {useEffect, useState} from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import {useParams} from 'react-router-dom';
import {fetchSelectedQuest} from '../../services/api-action';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../loading/loading';
import {questLevel, questType} from '../../utils/const';


const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };


  const dispatch = useDispatch();
  const id = useParams().id;
  useEffect(()=>{
    dispatch(fetchSelectedQuest(id));
  },[id, dispatch])


  const selectedQuest = useSelector(state => state.selectedQuest);
  console.log(selectedQuest);

  if (selectedQuest === null) {
    return <Loading />;
  } else {
    const {title, description, coverImg, type, level, peopleCount, duration} = selectedQuest;

    return (
      <MainLayout>
        <S.Main>
          <S.PageImage
            src={coverImg}
            alt={`Квест ${title}`}
            width="1366"
            height="768"
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{title}</S.PageTitle>
              <S.PageSubtitle>{questType.get(type)}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>{questLevel.get(level)}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>
                {description}
              </S.QuestDescription>

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal />}
        </S.Main>
      </MainLayout>
    );
  };
  }

export default DetailedQuest;
