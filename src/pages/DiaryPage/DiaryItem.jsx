import {
  ListItem,
  List,
  RecordBtnLabel,
  RecordBtn,
  StyledAddMealIcon,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';
import { DiaryModal } from './DiaryModal';
import { useState } from 'react';
import RecordedMeal from './RecordedMeal';

export default function DiaryItem({ data, type }) {
  const [modalData, setModalData] = useState(false);

  return (
    <>
      <List>
        {data.map((item, index, arr) => {
          return (
            <ListItem key={item?.id || index} $itemNumber={index + 1}>
              {item?.id ? (
                <RecordedMeal
                  data={item}
                  type={type}
                  modalData={modalData}
                  setModalData={setModalData}
                />
              ) : index === 0 || arr[index - 1].id ? (
                <RecordBtn onClick={() => setModalData({ type })}>
                  <StyledAddMealIcon>
                    <use href={`${sprite}#add`} />
                  </StyledAddMealIcon>
                  <RecordBtnLabel>Record your meal</RecordBtnLabel>
                </RecordBtn>
              ) : null}
            </ListItem>
          );
        })}
      </List>
      <DiaryModal
        key={modalData?.id}
        modalData={modalData}
        setModalData={setModalData}
      />
    </>
  );
}
