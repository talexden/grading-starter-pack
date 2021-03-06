import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {setClearOrderForm, setIsBookingModalOpened} from '../../../../store/action';
import {sendOrderAction} from '../../../../services/api-action';

const formInitialState = {
  text: '',
  tel: 0,
  number: '',
  checkbox: false,
};

const BookingModal = () => {
  const dispatch = useDispatch();
  const isClearOrderForm = useSelector(state => state.isClearOrderForm);
  const [formState, setFormState] = useState(formInitialState);
  const escFunction = (event) => {
    if(event.keyCode === 27) {
      dispatch(setIsBookingModalOpened(false));
    }
  };
  document.addEventListener("keydown", escFunction, );

  useEffect(() => {
    if (isClearOrderForm) {
      setFormState({
        ...formState,
        text: {
          ...formState.text,
          value: '',
        },
        tel: {
          ...formState.tel,
          value: 0,
        },
        number: {
          ...formState.number,
          value: '',
        },
        checkbox: {
          ...formState.checkbox,
          value: false,
        },
      });

      dispatch(setClearOrderForm(false));
    }
  }, [dispatch, formState, isClearOrderForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const order = {
      name: formState.text.value,
      phone: formState.tel.value,
      peopleCount: Number(formState.number.value),
      isLegal: formState.checkbox.value,
    };

    dispatch(sendOrderAction(order));
  };

  const handleChange = (evt) => {
    const {type, value, checked} = evt.target;
    let data = value;
    if (type === 'checkbox') {
      data = checked
    }

    setFormState({
      ...formState,
      [type]: {
        ...formState[type],
        value: data,
      },
    });
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => dispatch(setIsBookingModalOpened(false))}>
          <IconClose width="16" height="16"/>
          <S.ModalCloseLabel>?????????????? ????????</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>???????????????? ????????????</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">???????? ??????</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="??????"
              required
              value={formState.text.value}
              onChange={handleChange}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              ???????????????????? ??????????????
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="??????????????"
              required
              value={formState.tel.value}
              onChange={handleChange}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              ???????????????????? ????????????????????
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="???????????????????? ????????????????????"
              required
              value={formState.number.value}
              onChange={handleChange}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">?????????????????? ????????????</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              checked={formState.checkbox.value}
              onChange={handleChange}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                ?? ???????????????? ??{' '}
                <S.BookingLegalLink href="#">
                  ?????????????????? ?????????????????? ???????????????????????? ???????????? ?? ????????????????????????????????
                  ??????????????????????
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
