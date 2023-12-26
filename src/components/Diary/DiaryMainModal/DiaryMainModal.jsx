import breakfast from 'assets/images/diary/breakfast.png';
import breakfast2x from 'assets/images/diary/breakfast@2x.png';
import lunch from 'assets/images/diary/lunch.png';
import lunch2x from 'assets/images/diary/lunch@2x.png';
import dinner from 'assets/images/diary/dinner.png';
import dinner2x from 'assets/images/diary/dinner@2x.png';
import snack from 'assets/images/diary/snack.png';
import snack2x from 'assets/images/diary/snack@2x.png';
import ModalMain from '../../ModalMain/ModalMain';
import sprite from 'assets/sprite.svg';

import {
  AddWrap,
  ItemWrapTitle,
  MealsItem,
  MealsList,
  MealsName,
  ModalWrapper,
  Title,
} from './DiaryMainModal.styled';
import {
  BodyTextFirst,
  BodyTextSecond,
  BodyTextWrap,
  ButtonIcon,
  HeadlineFirst,
  IconWrap,
} from '../../StyledComponents/Components.styled';
import {
  BtnText,
  ItemWrapInfo,
  RecordBtn,
} from '../DiaryItem/DiaryItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryInfo } from '../../../redux/diary/selectors';
import { deleteFoodDiary } from '../../../redux/diary/operations';
import toast from 'react-hot-toast';
import DiaryForm from '../DiaryForm/DiaryForm';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export default function DiaryMainModal({ modalData, setModalData }) {
  const { type } = modalData;
  const uniqueKey = nanoid();
  const dispatch = useDispatch();
  const { meals } = useSelector(selectDiaryInfo);
  const [formActive, setFormActive] = useState(false);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteFoodDiary(id)).unwrap();
      toast.success('You have successfully removed your meal!');
    } catch (error) {
      toast.error(`Something went wrong! \n ${error}`);
    }
  };
  return (
    <>
      <ModalMain modalActive={!!modalData} setModalActive={setModalData}>
        <ModalWrapper>
          <HeadlineFirst>Record your meal</HeadlineFirst>
          <ItemWrapTitle>
            {type === 'breakfast' && (
              <img
                srcSet={`${breakfast} 1x, ${breakfast2x} 2x`}
                src={breakfast}
                alt="Breakfast"
              />
            )}
            {type === 'lunch' && (
              <img
                srcSet={`${lunch} 1x, ${lunch2x} 2x`}
                src={lunch}
                alt="Lunch"
              />
            )}
            {type === 'dinner' && (
              <img
                srcSet={`${dinner} 1x, ${dinner2x} 2x`}
                src={dinner}
                alt="Dinner"
              />
            )}
            {type === 'snack' && (
              <img
                srcSet={`${snack} 1x, ${snack2x} 2x`}
                src={snack}
                alt="Snack"
              />
            )}

            <Title>{type}</Title>
          </ItemWrapTitle>
          {formActive ||
            (meals[`${type}`] && (
              <MealsList>
                {meals[`${type}`].map((item) => (
                  <MealsItem key={uniqueKey}>
                    <MealsName>{item.name}</MealsName>
                    <ItemWrapInfo>
                      <BodyTextWrap>
                        <BodyTextFirst>Carbonohidrates:</BodyTextFirst>
                        <BodyTextSecond>{item.carbohydrate}</BodyTextSecond>
                      </BodyTextWrap>
                      <BodyTextWrap>
                        <BodyTextFirst>Protein:</BodyTextFirst>
                        <BodyTextSecond>{item.protein}</BodyTextSecond>
                      </BodyTextWrap>
                      <BodyTextWrap>
                        <BodyTextFirst>Fat:</BodyTextFirst>
                        <BodyTextSecond>{item.fat}</BodyTextSecond>
                      </BodyTextWrap>
                      <BodyTextWrap>
                        <BodyTextFirst>Calories:</BodyTextFirst>
                        <BodyTextSecond>{item.calories}</BodyTextSecond>
                      </BodyTextWrap>
                      <ButtonIcon
                        type="button"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        <IconWrap
                          width="20px"
                          height="20px"
                          stroke="var(--green-light)"
                        >
                          <use href={`${sprite}#trash`} />
                        </IconWrap>
                      </ButtonIcon>
                    </ItemWrapInfo>
                  </MealsItem>
                ))}
              </MealsList>
            ))}
          {!formActive && (
            <AddWrap>
              <RecordBtn onClick={() => setFormActive(true)}>
                <IconWrap width="16px" height="16px">
                  <use href={`${sprite}#add`} />
                </IconWrap>
                <BtnText>Add more</BtnText>
              </RecordBtn>
            </AddWrap>
          )}

          {formActive && (
            <DiaryForm
              setFormActive={setFormActive}
              setModalActive={setModalData}
              type={type}
            />
          )}
          <AddWrap></AddWrap>
        </ModalWrapper>
      </ModalMain>
    </>
  );
}
