import {
  BodyTextFirst,
  BodyTextSecond,
  BodyTextWrap,
  Button,
  ButtonIcon,
  ButtonTextFirst,
  HeadlineSecond,
  IconWrap,
  SubtitleSecond,
} from '../StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';
import {
  Headline,
  LeftSide,
  Percent,
  PercentBox,
  RightSide,
  TextWrap,
  WrapMain,
} from './Water.styled';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import ModalMain from '../ModalMain/ModalMain';
import { useDispatch, useSelector } from 'react-redux';
import { addDailyWater, removeDailyWater } from '../../redux/water/operations';
import { selectWaterInfo } from '../../redux/water/selectors';
import toast from 'react-hot-toast';
import { selectBaseWater } from '../../redux/auth/selectors';

export default function Water({ modalActive, setModalActive }) {
  const dispatch = useDispatch();
  const { water: waterReal, error: errorBackend } =
    useSelector(selectWaterInfo);

  const baseWater = useSelector(selectBaseWater);
  const waterDayGoal = baseWater !== null ? baseWater * 1000 : 0;

  const waterLeft = waterDayGoal - waterReal;
  const waterLeftNonNegative = Math.max(0, waterLeft);
  const waterPercent = Math.round((waterReal * 100) / waterDayGoal);

  const handleUpdate = async (values) => {
    setModalActive(false);

    console.log(typeof +values.water);
    try {
      await dispatch(addDailyWater({ water: +values.water })).unwrap();
      toast.success('Added to the total amount of water drunk for today!');
    } catch (error) {
      if (errorBackend) toast.error(`${errorBackend}`);
      toast.error(`${error}`);
    }
  };

  const handleDelete = async () => {
    console.log('removeDailyWater');
    try {
      await dispatch(removeDailyWater()).unwrap();
      toast.success('You have successfully remove daily water!');
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <>
      <HeadlineSecond>Water</HeadlineSecond>
      <WrapMain>
        <LeftSide>
          <PercentBox height={`${waterPercent}%`}>
            <Percent
              $color={
                waterPercent < 84 ? 'var(--violet)' : 'var(--black-primary)'
              }
              $top={waterPercent < 84 ? '-28px' : '28px'}
            >
              {waterPercent}%
            </Percent>
          </PercentBox>
        </LeftSide>
        <RightSide>
          <ButtonIcon type="button" onClick={() => handleDelete()}>
            <IconWrap width="20px" height="20px" stroke="var(--green-light)">
              <use href={`${sprite}#trash`} />
            </IconWrap>
          </ButtonIcon>

          <Headline>Water consumption</Headline>
          <TextWrap>
            <BodyTextWrap>
              <SubtitleSecond>{waterReal}</SubtitleSecond>
              <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
            </BodyTextWrap>
            <BodyTextWrap>
              <BodyTextFirst>left:</BodyTextFirst>
              <BodyTextSecond>{waterLeftNonNegative}</BodyTextSecond>
              <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
            </BodyTextWrap>
          </TextWrap>

          <Button type="button" onClick={() => setModalActive(true)}>
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#add`} />
            </IconWrap>
            <ButtonTextFirst>Add water intake</ButtonTextFirst>
          </Button>
        </RightSide>
      </WrapMain>
      {modalActive && (
        <ModalMain modalActive={modalActive} setModalActive={setModalActive}>
          <AddWaterModal
            handleUpdate={handleUpdate}
            setModalActive={setModalActive}
          ></AddWaterModal>
        </ModalMain>
      )}
    </>
  );
}
