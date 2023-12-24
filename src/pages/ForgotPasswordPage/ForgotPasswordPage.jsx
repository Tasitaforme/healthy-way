import { Container } from '../../components/StyledComponents/Container';
import { HeadlineFirst } from '../../components/StyledComponents/Components.styled';
import { HeadSecond, SubLink } from '../SignInPage/SignInPage.styled';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import {
  FlexBox,
  ImageWrapper,
  TextWrapper,
  MainAuth,
} from '../SignUpPage/SignUpPage.styled';
import { BackgroundImage } from '../../components/SignUpImage/SignUpImage.styled';
import { Text, SignIpWrapper } from './ForgotPasswordPage.styled';

import watchDesk1x from '../../assets/images/watch/watch-desk@1x.png';
import watchDesk2x from '../../assets/images/watch/watch-desk@2x.png';
import watchTab1x from '../../assets/images/watch/watch-tab@1x.png';
import watchTab2x from '../../assets/images/watch/watch-tab@2x.png';
import watchMob1x from '../../assets/images/watch/watch-mob@1x.png';
import watchMob2x from '../../assets/images/watch/watch-mob@2x.png';

export default function ForgotPasswordPage() {
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
            <HeadlineFirst>Forgot your password</HeadlineFirst>
            <HeadSecond>
              We will send you an email with recovery instructions
            </HeadSecond>
            <ForgotPasswordForm />
            <SignIpWrapper>
              <Text>Do you already have an account?</Text>
              <SubLink to="/signin">Sign in</SubLink>
            </SignIpWrapper>
          </TextWrapper>
        </FlexBox>
      </Container>
    </MainAuth>
  );
}
