import React from 'react';
import watchMob1x from '../../assets/images/watch/watch-mob@1x.png';
import watchMob2x from '../../assets/images/watch/watch-mob@2x.png';
import watchTab1x from '../../assets/images/watch/watch-tab@1x.png';
import watchTab2x from '../../assets/images/watch/watch-tab@2x.png';
import watchDesk1x from '../../assets/images/watch/watch-desk@1x.png';
import watchDesk2x from '../../assets/images/watch/watch-desk@2x.png';
import {
  BackgroundImage,
  ListItem,
  SubTitle,
  SignInButton,
  SignUpButton,
  GoalList,
  ContentWrapper,
  WelcomeTitle,
  BtnWrapper,
  WelcomeContainer,
} from './WelcomePage.styled';
export default function WelcomePage() {
  return (
    <main>
      <WelcomeContainer>
        <BackgroundImage
          $imageDesk1x={watchDesk1x}
          $imageDesk2x={watchDesk2x}
          $imageTab1x={watchTab1x}
          $imageTab2x={watchTab2x}
          $imageMob1x={watchMob1x}
          $imageMob2x={watchMob2x}
          $heightMob="296px"
          $heightTab="376px"
          $heightDesk="588px"
        />
        <ContentWrapper>
          <WelcomeTitle>Set goals and achieve them</WelcomeTitle>
          <SubTitle>
            The service will help you set goals and follow them.
          </SubTitle>
          <BtnWrapper>
            <SignInButton to="/signin">Sign in</SignInButton>
            <SignUpButton to="signup">Sign up</SignUpButton>
          </BtnWrapper>
          <GoalList>
            <ListItem>Set goals</ListItem>
            <ListItem>Watch your calories</ListItem>
            <ListItem>Keep track of your water intake</ListItem>
            <ListItem>Control your weight</ListItem>
          </GoalList>
        </ContentWrapper>
      </WelcomeContainer>
    </main>
  );
}
