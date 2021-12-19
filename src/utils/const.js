export const CITY = {
  title: 'Санкт-Петербург',
  lat: 59.96832,
  lng: 30.31761,
  zoom: 16,
};

export const QUEST_LEVEL = Object.freeze({
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий',
});

export const QUESTS_MENU = ['all', 'adventures', 'horror', 'mystic', 'detective', 'sciFi'];

export const QUEST_NAMES = Object.freeze({
  all: {
    title: 'all',
    titleRuss: 'все квесты',
  },
  adventures: {
    title: 'adventures',
    titleRuss: 'приключения',
  },
  horror: {
    title: 'horror',
    titleRuss: 'ужасы',
  },
  mystic: {
    itle: 'mystic',
    titleRuss: 'мистика',
  },
  detective: {
    title: 'detective',
    titleRuss: 'детектив',
  },
  sciFi: {
    title: 'sci-fi',
    titleRuss: 'sci-fi',
  },
});

export const AppRoute = Object.freeze({
  Home: '/',
  Contacts: '/contacts',
  QuestDetails: '/',
});


export const APIRoute = Object.freeze({
  Quests: '/quests',
  OrderPost: '/orders',
});

export const ErrorTexts = Object.freeze({
  OrderFailMessage: 'Не удалось отправить заказ. Попробуйте попозже',
  LoadQuestFailMessage: 'Не удалось загрузить данные. Попробуйте попозже',
  OrderSendSuccessMessage: 'Не удалось отправить заказ. Попробуйте попозже (возможно введен не правильный номер телефона...)',
});
