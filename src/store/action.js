import {createAction} from '@reduxjs/toolkit';

export const setQuests = createAction(
  'data/setQuests',
  (quests) => ({
    payload: {
      quests,
    }
  }),
);

export const setSelectedQuests = createAction(
  'data/setSelectedQuests',
  (selectedQuests) => ({
    payload: selectedQuests,
  }),
);
