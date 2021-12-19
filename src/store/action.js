import {createAction} from '@reduxjs/toolkit';

export const Action = Object.freeze({
  SetQuests: 'data/setQuests',
  SetSelectedQuest: 'data/setSelectedQuests',
  SetQuestFilter: 'data/setQuestFilter',
  SetIsClearOrderForm: 'app/setIsClearOrderForm',
  SetIsBookingModalOpened: 'app/setIsBookingModalOpened',
  SetClearOrderForm: 'app/setClearOrderForm',
  SetClearSelectedQuest: 'app/SetClearSelectedQuest',
  RedirectToRoute: 'route/redirectToRoute',
});





export const setQuests = createAction(
  Action.SetQuests,
  (quests) => ({
    payload: {
      quests,
    }
  }),
);

export const setSelectedQuest = createAction(
  Action.SetSelectedQuest,
  (selectedQuest) => ({
    payload: selectedQuest,
  }),
);

export const setClearSelectedQuest = createAction(Action.SetClearSelectedQuest);

export const setQuestFilter = createAction(
  Action.SetQuestFilter,
  (questFilter) => ({
    payload: questFilter,
  }),
);

export const setClearOrderForm = createAction(
  Action.SetIsClearOrderForm,
  (isClearOrderForm) => ({
    payload: isClearOrderForm,
  }),
);

export const setIsBookingModalOpened = createAction(
  Action.SetIsBookingModalOpened,
  (isBookingModalOpened) => ({
    payload: isBookingModalOpened,
  }),
);

export const redirectToRoute = createAction(
  Action.RedirectToRoute,
  (url) => ({
    payload: url,
  }),
);
