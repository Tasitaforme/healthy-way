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

export default function DiaryItem({ data, type }) {
  const [modalData, setModalData] = useState(false);

  return (
    <>
      <List>
        {data.map((item, index, arr) => {
          return (
            <ListItem key={item?._id || index}>
              <p>{index + 1}</p>
              {item?._id ? null : index === 0 || arr[index - 1]._id ? (
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
      <DiaryModal modalData={modalData} setModalData={setModalData} />
    </>
  );
}
