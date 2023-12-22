import {
  ListItem,
  List,
  RecordBtnLabel,
  RecordBtn,
  StyledAddMealIcon,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';

export default function DiaryItem({ data, onAddItem }) {
  return (
    <List>
      {data.map(({ _id }, index, arr) => {
        return (
          <ListItem key={_id || index}>
            <p>{index + 1}</p>
            {_id ? null : index === 0 || arr[index - 1]._id ? (
              <RecordBtn onClick={onAddItem}>
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
  );
}
