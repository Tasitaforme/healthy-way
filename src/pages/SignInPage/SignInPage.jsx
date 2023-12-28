import { Container } from '../../components/StyledComponents/Container';
import { HeadlineFirst } from '../../components/StyledComponents/Components.styled';
import { HeadSecond, SubLink, SubText } from './SignInPage.styled';
import SignInForm from '../../components/SignInForm/SignInForm';
import {
  FlexBox,
  ImageWrapper,
  TextWrapper,
  MainAuth,
} from '../SignUpPage/SignUpPage.styled';
import { BackgroundImage } from '../../components/SignUpImage/SignUpImage.styled';

import watchDesk1x from '../../assets/images/watch/watch-desk@1x.png';
import watchDesk2x from '../../assets/images/watch/watch-desk@2x.png';
import watchTab1x from '../../assets/images/watch/watch-tab@1x.png';
import watchTab2x from '../../assets/images/watch/watch-tab@2x.png';
import watchMob1x from '../../assets/images/watch/watch-mob@1x.png';
import watchMob2x from '../../assets/images/watch/watch-mob@2x.png';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function SignInPage() {
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const messageFromURL = urlParams.get('message');

    if (messageFromURL && !hasShownToast) {
      toast.success(`${messageFromURL}`);
      setHasShownToast(true);
    }
  }, []);

  return (
    <MainAuth>
      <Container>
        <FlexBox>
          <ImageWrapper>
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
          </ImageWrapper>
          <TextWrapper>
            <HeadlineFirst>Sign in</HeadlineFirst>
            <HeadSecond>You need to login to use the service</HeadSecond>
            <SignInForm />
            <SubText>If you don't have an account yet</SubText>
            <SubLink to="/signup">Sign up</SubLink>
          </TextWrapper>
        </FlexBox>
      </Container>
    </MainAuth>
  );
}
