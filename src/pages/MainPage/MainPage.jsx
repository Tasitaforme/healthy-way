import React, { useEffect, useState } from 'react';
import { FeatureWrap, TitleWrap } from './MainPage.styled';

import { Container } from 'components/StyledComponents/Container';
import {
  IconWrap,
  ButtonTextSecond,
  HeadlineFirst,
  StyledLink,
} from 'components/StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';

import DailyGoal from 'components/DailyGoal/DailyGoal';
import Water from 'components/Water/Water';
import Food from 'components/Food/Food';
import Diary from 'components/Diary/Diary';
import RecommendedFood from 'components/RecommendedFood/RecommendedFood';
import { Button } from '../../components/StyledComponents/Components.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logOut } from '../../redux/auth/operations';
import { selectIsLogin } from '../../redux/auth/selectors';
import { getDailyWater } from '../../redux/water/operations';
import { selectWaterInfo } from '../../redux/water/selectors';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';

export default function MainPage() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const { water: waterReal } = useSelector(selectWaterInfo);

  useEffect(() => {
    if (isLogin) {
      dispatch(getDailyWater());
    }
  }, [isLogin, waterReal]);

  const [modalActive, setModalActive] = useState(false);

  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // TODO видалити потім, коли буде можливість вийти в хедері
  const handleOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success('You have successfully logged out!');
    } catch (error) {
      toast.error('Something went wrong !');
    }
  };

  return (
    <main>
      <Container>
        <TitleWrap>
          <HeadlineFirst>Today</HeadlineFirst>
          <StyledLink to="/dashboard">
            <ButtonTextSecond>On the way to the goal</ButtonTextSecond>
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#arrow-right`} />
            </IconWrap>
          </StyledLink>
        </TitleWrap>
        <FeatureWrap>
          <DailyGoal></DailyGoal>
          <Water
            modalActive={modalActive}
            setModalActive={setModalActive}
          ></Water>
          <Food></Food>
          <Diary></Diary>
          <RecommendedFood></RecommendedFood>
        </FeatureWrap>
        {/* // TODO видалити потім, коли буде можливість вийти в хедері */}
        <Button type="submit" onClick={() => handleOut()}>
          Sign out
        </Button>
        {/* // TODO видалити потім, коли буде додано в Профайл */}
        <ChangePasswordForm />
      </Container>
    </main>
  );
}
