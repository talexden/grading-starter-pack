import * as S from './quests-catalog.styled';
import {ReactComponent as IconPerson} from '../../../../assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from '../../../../assets/img/icon-puzzle.svg';
import {questLevel} from '../../../../utils/const';

export const QuestItem = ({quest}) => {
  const {previewImg, title, peopleCount, level, id} = quest;
  return (
    <S.QuestItem>
      <S.QuestItemLink to={`/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}–${peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {questLevel.get(level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>)
};
