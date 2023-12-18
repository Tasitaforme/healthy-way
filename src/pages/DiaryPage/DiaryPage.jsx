import {
  DiarySection,
  GoBackBtn,
  GoBackWrapper,
  ListItem,
  List,
  StyledBreakfastIcon,
  StyledGoBackIcon,
  MealWrapper,
  NutririonList,
  StyledLunchIcon,
  StyledDinnerIcon,
  StyledSnackIcon,
  RecordMealWrapper,
  RecordBtnLabel,
  RecordMealIcon,
  RecordBtn,
  MealTitleWrapper,
} from './DiaryPage.styled';

export default function DiaryPage() {
  return (
    <DiarySection>
      <GoBackWrapper>
        <GoBackBtn>
          <StyledGoBackIcon />
          <h2>Diary</h2>
        </GoBackBtn>
      </GoBackWrapper>
      <MealWrapper>
        <MealTitleWrapper>
          <StyledBreakfastIcon />
          <h3>Breakfast</h3>
        </MealTitleWrapper>
        <NutririonList>
          <li>
            Carbonohidrates:<span></span>
          </li>
          <li>
            Protein:<span></span>
          </li>
          <li>
            Fat:<span></span>
          </li>
        </NutririonList>
        <RecordMealWrapper>
          <List>
            <ListItem>
              <p>1</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
      <MealWrapper>
        <MealTitleWrapper>
          <StyledLunchIcon />
          <h3>Lunch</h3>
        </MealTitleWrapper>
        <NutririonList>
          <li>
            Carbonohidrates:<span></span>
          </li>
          <li>
            Protein:<span></span>
          </li>
          <li>
            Fat:<span></span>
          </li>
        </NutririonList>
        <RecordMealWrapper>
          <List>
            <ListItem>
              <p>1</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
      <MealWrapper>
        <MealTitleWrapper>
          <StyledDinnerIcon />
          <h3>Dinner</h3>
        </MealTitleWrapper>
        <NutririonList>
          <li>
            Carbonohidrates:<span></span>
          </li>
          <li>
            Protein:<span></span>
          </li>
          <li>
            Fat:<span></span>
          </li>
        </NutririonList>
        <RecordMealWrapper>
          <List>
            <ListItem>
              <p>1</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
      <MealWrapper>
        <MealTitleWrapper>
          <StyledSnackIcon />
          <h3>Snack</h3>
        </MealTitleWrapper>
        <NutririonList>
          <li>
            Carbonohidrates:<span></span>
          </li>
          <li>
            Protein:<span></span>
          </li>
          <li>
            Fat:<span></span>
          </li>
        </NutririonList>
        <RecordMealWrapper>
          <List>
            <ListItem>
              <p>1</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <RecordMealIcon />
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
    </DiarySection>
  );
}
