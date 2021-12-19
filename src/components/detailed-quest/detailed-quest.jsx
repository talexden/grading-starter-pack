import {useEffect} from 'react';
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
import {QUEST_LEVEL, QUEST_NAMES} from '../../utils/const';
import {setIsBookingModalOpened} from '../../store/action';

const typeAdapter = (type) => type === 'sci-fi' ? 'sciFi' : type;

const DetailedQuest = () => {
  const dispatch = useDispatch();
  const isBookingModalOpened = useSelector(state => state.isBookingModalOpened);
  const selectedQuest = useSelector(state => state.selectedQuest);

  const onBookingBtnClick = () => {
    dispatch(setIsBookingModalOpened(true));
  };

  const {id} = useParams();
  useEffect(()=>{
    dispatch(fetchSelectedQuest(id));
  },[id, dispatch])

  if (selectedQuest !== null) {
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
              <S.PageSubtitle>{QUEST_NAMES[typeAdapter(type)].titleRuss}</S.PageSubtitle>
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
                  <S.FeatureTitle>{QUEST_LEVEL[level]}</S.FeatureTitle>
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
  } else {
    return <Loading />;
  };
};

export default DetailedQuest;
