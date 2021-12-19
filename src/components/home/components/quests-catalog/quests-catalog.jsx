import {useSelector} from 'react-redux';
import * as S from './quests-catalog.styled';
import {nanoid} from '@reduxjs/toolkit';
import {QuestItem} from '../quest-item/quest-item';
import {QUESTS_MENU} from '../../../../utils/const';
import TabItem from '../tab-item/tab-item';

const QuestsCatalog = () => {
  const filteredQuests = useSelector(state => state.filteredQuests);

  return (
    <>
      <S.Tabs>
        {QUESTS_MENU.map((questType) => (
          <TabItem key={nanoid()} questType={questType} />
        ) )}
      </S.Tabs>

      <S.QuestsList>
        {(filteredQuests.length > 0)
          ? <>
            {
              filteredQuests.map((quest) => (
                <QuestItem
                  key={nanoid()}
                  quest={quest}
                />
              ))
            }
          </>
          : ''}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
