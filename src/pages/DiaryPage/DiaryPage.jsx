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
  GoBackTitle,
  MealTitle,
  MealAndNutritionWrapper,
} from './DiaryPage.styled';

export default function DiaryPage() {
  return (
    <DiarySection>
      <GoBackWrapper>
        <GoBackBtn>
          <StyledGoBackIcon />
          <GoBackTitle>Diary</GoBackTitle>
        </GoBackBtn>
      </GoBackWrapper>
      <MealWrapper>
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <StyledBreakfastIcon />
            <MealTitle>Breakfast</MealTitle>
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
        </MealAndNutritionWrapper>
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
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <StyledLunchIcon />
            <MealTitle>Lunch</MealTitle>
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
        </MealAndNutritionWrapper>
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
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <StyledDinnerIcon />
            <MealTitle>Dinner</MealTitle>
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
        </MealAndNutritionWrapper>
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
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <StyledSnackIcon />
            <MealTitle>Snack</MealTitle>
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
        </MealAndNutritionWrapper>
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
