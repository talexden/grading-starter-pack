import {createReducer} from '@reduxjs/toolkit';
import {setQuests, setSelectedQuests} from './action';

const initialState = {
  quests: [],
  selectedQuest: null,
  orderPost: {
    name: '',
    peopleCount: 0,
    phone: '',
    isLegal: false,
  }
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuests, (state, action) => {
      const {quests} = action.payload;
      state.quests = quests;
    })
    .addCase(setSelectedQuests, (state, action) => {
      state.selectedQuest = action.payload;
    })
    // .addCase(loadOfferById, (state, action) => {
    //   const {offerById} = action.payload;
    //   state.offerById = offerById;
    // })
    // .addCase(setOrderPost, (state, action) => {
    //   const {orderPost} = action.payload;
    //   state.orderPost = orderPost;
    //
  // })
  ;
});

export {reducer};
