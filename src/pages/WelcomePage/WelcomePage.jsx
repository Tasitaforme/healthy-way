// import React from 'react';
// import { Container } from '../../components/StyledComponents/Container';
// import ButtonLink from '../../components/ButtonLink/ButtonLink';

// export default function WelcomePage() {
//   return (
//     <main>
//       <Container>
//         <h1>Set goals and achieve them</h1>
//         <h2>The service will help you set goals and follow them.</h2>
//         <ButtonLink to="/signin" text="Sign in" width="212px" />
//         <ButtonLink to="/signin" text="Sign innnn" paddingInline="60px" />
//         <ul>
//           <li>Set goals</li>
//           <li>Watch your calories</li>
//           <li>Keep track of your water intake</li>
//           <li>Control your weight</li>
//         </ul>
//       </Container>
//     </main>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/StyledComponents/Container';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  BtnBox,
  BtnSignUp,
  BtnSignIn,
  List,
  Item,
  ItemImg,
  ItemText,
} from './WelcomePage.styled';
import logoPic from '../../images/WelcomePageImg/logoPic.png';
import bullets from '../../images/WelcomePageImg/bullets.png';

const WelcomePage = () => {
  return (
    <Container>
      <Image src={logoPic} alt="Reg Logo" />
      <ContentBox>
        <Title>Set goals and achieve them</Title>
        <Text>
          The service will help you set goals and follow them.
        </Text>

        <BtnBox>
          <BtnSignIn>
            <Link to={'/signin'}>
              Sign in
            </Link>
          </BtnSignIn>

          <BtnSignUp>
            <Link to={'/signup'}>
              Sign up
            </Link>
          </BtnSignUp>
        </BtnBox>

        <List>
          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Set goals</ItemText>
          </Item>

          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Watch your calories</ItemText>
          </Item>

          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Keep track of your water intake</ItemText>
          </Item>

          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Control your weight</ItemText>
          </Item>
        </List>
      </ContentBox>
    </Container>
  );
};

export default WelcomePage;
