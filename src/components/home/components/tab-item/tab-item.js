import * as S from './tab-item.styled';
import {QUEST_NAMES} from '../../../../utils/const';
import {ReactComponent as IconAllQuests} from '../../../../assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from '../../../../assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from '../../../../assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from '../../../../assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from '../../../../assets/img/icon-detective.svg';
import {ReactComponent as IconSciFi} from '../../../../assets/img/icon-scifi.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setQuestFilter} from '../../../../store/action';

const QUEST_ICON = Object.freeze({
  all: () => (<IconAllQuests/>),
  adventures: () => (<IconAdventures/>),
  horror: () => (<IconHorrors/>),
  mystic: () => (<IconMystic/>),
  detective: () => (<IconDetective/>),
  sciFi: () => (<IconSciFi/>),
});

const filterNameAdapter = (name) => (name === 'sciFi' ? 'sci-fi' : name);

const TabItem = ({questType}) => {
  const dispatch = useDispatch();
  const questFilter = useSelector(state => state.questFilter);
  const handleClick = (filterName) => {
    dispatch(setQuestFilter(filterNameAdapter(filterName)))
  };
  return (
    <>
      <S.TabItem>
        <S.TabBtn
          onClick={()=>handleClick(questType)}
          isActive ={questFilter === questType ? true : false}

        >
          {QUEST_ICON[questType]()}
          <S.TabTitle>{QUEST_NAMES[questType].titleRuss}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </>
  );
};

export default TabItem;
