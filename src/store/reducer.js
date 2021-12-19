import {createReducer} from '@reduxjs/toolkit';
import {Action} from './action';

const INITIAL_STATE = {
  quests: [],
  filteredQuests: [],
  selectedQuest: null,
  questFilter: 'all',
  isClearOrderForm: false,
  isBookingModalOpened: false,
  orderPost: {
    name: '',
    peopleCount: 0,
    phone: '',
    isLegal: false,
  }
}

const NO_FILTER = 'all';

const getFilteredQuests = (key, quests) => {
  let filteredQuests = [...quests];
  if (key !== NO_FILTER) {
    filteredQuests = quests.filter((quest) => quest.type === key);
  }
  return filteredQuests;
};




const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(Action.SetQuests, (state, action) => {
      const {quests} = action.payload;
      state.quests = quests;
      state.filteredQuests = [...quests];
    })
    .addCase(Action.SetSelectedQuest, (state, action) => {
      state.selectedQuest = action.payload;
    })
    .addCase(Action.SetClearSelectedQuest, (state) => {
      state.selectedQuest = null;
    })

    .addCase(Action.SetQuestFilter, (state, action) => {
      state.questFilter = action.payload;
      state.filteredQuests = getFilteredQuests(state.questFilter, state.quests);
    })
    .addCase(Action.SetClearOrderForm, (state,  action) => {
      state.isClearOrderForm = action.payload;
    })
    .addCase(Action.SetIsBookingModalOpened, (state,  action) => {
      state.isBookingModalOpened = action.payload;
    });
});

export {reducer};
