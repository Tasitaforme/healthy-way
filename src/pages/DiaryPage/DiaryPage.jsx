import {
  DiarySection,
  GoBackBtn,
  GoBackWrapper,
  ListItem,
  List,
  MealWrapper,
  NutririonList,
  RecordMealWrapper,
  RecordBtnLabel,
  RecordBtn,
  MealTitleWrapper,
  GoBackTitle,
  MealTitle,
  MealAndNutritionWrapper,
  StyledBackArrowIcon,
  StyledAddMealIcon,
} from './DiaryPage.styled';
import dinnerImage from '../../assets/images/diary/dinner@2x.png';
import breakfastImage from '../../assets/images/diary/breakfast@2x.png';
import lunchImage from '../../assets/images/diary/lunch@2x.png';
import snackImage from '../../assets/images/diary/snack@2x.png';
import sprite from '../../assets/sprite.svg';

export default function DiaryPage() {
  return (
    <DiarySection>
      <GoBackWrapper>
        <GoBackBtn>
          <StyledBackArrowIcon>
            <use href={`${sprite}#arrow-back`} />
          </StyledBackArrowIcon>
          <GoBackTitle>Diary</GoBackTitle>
        </GoBackBtn>
      </GoBackWrapper>
      <MealWrapper>
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <img src={breakfastImage} alt="breakfast" />
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
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
      <MealWrapper>
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <img src={lunchImage} alt="lunch" />
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
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
      <MealWrapper>
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <img src={dinnerImage} alt="dinner" />
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
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
      <MealWrapper>
        <MealAndNutritionWrapper>
          <MealTitleWrapper>
            <img src={snackImage} alt="snack" />
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
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>2</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>3</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
            <ListItem>
              <p>4</p>
              <RecordBtn>
                <StyledAddMealIcon>
                  <use href={`${sprite}#add`} />
                </StyledAddMealIcon>
                <RecordBtnLabel>Record your meal</RecordBtnLabel>
              </RecordBtn>
            </ListItem>
          </List>
        </RecordMealWrapper>
      </MealWrapper>
    </DiarySection>
  );
}
