import {setQuests, setSelectedQuests} from '../store/action';

const QUEST_ROUTE = '/quests';

export const fetchData = () =>
  async (dispatch, _getState, api) => {
    let {data} = await api.get(QUEST_ROUTE);
    dispatch(setQuests(data));
  };

export const fetchSelectedQuest = (questId) =>
  async (dispatch, _getState, api) => {
    let {data} = await api.get(`${QUEST_ROUTE}/${questId}`);
    dispatch(setSelectedQuests(data));
  };
