import {setIsBookingModalOpened, setQuests, setSelectedQuest} from '../store/action';
import {APIRoute, ErrorTexts} from '../utils/const';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

export const fetchData = () =>
  async (dispatch, _getState, api) => {
    try{
      let {data} = await api.get(APIRoute.Quests);
      dispatch(setQuests(data));
    } catch (error) {
      toast.warn(ErrorTexts.LoadQuestFailMessage);
    }
  };

export const fetchSelectedQuest = (questId) =>
  async (dispatch, _getState, api) => {
    try{
      let {data} = await api.get(`${APIRoute.Quests}/${questId}`);
      dispatch(setSelectedQuest(data));
    } catch (error) {
      toast.warn(ErrorTexts.LoadQuestFailMessage);
    }
  };

export const sendOrderAction = (order) =>
  async (dispatch, _getState, api)=> {
    try{
      await api.post(APIRoute.OrderPost, order);
      dispatch(setIsBookingModalOpened(false));
    } catch (error) {
      toast.warn(ErrorTexts.OrderFailMessage);
  }
};
