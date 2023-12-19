import { useState } from 'react';
import { Container } from '../StyledComponents/Container';
import {
  Navigation,
  IconWrap,
  Logo,
  HeaderWrap,
  SignInLink,
  SignUpLink,
  CircleProfile,
} from './Header.styled';
import sprite from 'assets/sprite.svg'; 
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import arrowDown from '../../assets/images/header/arrow-down.svg';
// import arrowRight from '../../assets/images/header/arrow-right.svg';
// import closeCircle from '../../assets/images/header/close-circle.svg';
// import directInbox from '../../assets/images/header/direct-ibox.svg';
// import edit from '../../assets/images/header/edit-2.svg';
// import logout from '../../assets/images/header/logout.svg';
// import loseFatMen from '../../assets/images/header/Lose-fat-image-men.svg';
// import loseFatGirl from '../../assets/images/header/Lose-fat-image-girl.svg';
// import maintakeGirl from '../../assets/images/header/Maintake-image-girl.svg';
// import maintakMen from '../../assets/images/header/Maintake-image-men.svg';
// import muscle from '../../assets/images/header/Gain-muscle.svg';
// import menu from '../../assets/images/header/menu.svg';
// import menuOpened from '../../assets/images/header/menu-opened.svg';
 import avatar from '../../assets/images/header/profile-circle.png';

// import TargetModal from '../HeaderModals/TargetModal';
// import WeightModal from '../HeaderModals/WeightModal';
// import ProfileModal from '../HeaderModals/ProfileModal';
// import MenuModal from '../HeaderModals/MenuModal';

export default function Header() {
// const [showModalTarget, setShowModalTarget] = useState(false);
//   const [showModalWeight, setShowModalWeight] = useState(false);
//   const [showModalProfile, setShowModalProfile] = useState(false);
//   const [showModalMenu, setShowModalMenu] = useState(false);

//   const location = useLocation();
//   const [currentURL, setCurrentURL] = useState(location.pathname);

//   const user = useSelector(selectUser);
//   const isLoggedIn = useSelector(selectIsLoggedIn);

  let goalIcon;

  // switch (user.gender) {
  //   case 'Female':
  //     switch (user.goal) {
  //       case 'Lose fat':
  //         goalIcon = loseFatGirl;
  //         break;

  //       case 'Maintain':
  //         goalIcon = maintakeGirl;
  //         break;

  //       default:
  //         goalIcon = muscle;
  //     }
  //     break;

  //   case 'Male':
  //     switch (user.goal) {
  //       case 'Lose fat':
  //         goalIcon = loseFatMen;
  //         break;

  //       case 'Maintain':
  //         goalIcon = maintakeMen;
  //         break;

  //       default:
  //         goalIcon = muscle;
  //     }
  //     break;

  //   default:
  //     goalIcon = muscle;
  // }

  // const toggleModalTarget = () => {
  //   setShowModalTarget(showModalTarget => !showModalTarget);
  // };

  // const toggleModalWeight = () => {
  //   setShowModalWeight(showModalWeight => !showModalWeight);
  // };

  // const toggleModalProfile = () => {
  //   setShowModalProfile(showModalProfile => !showModalProfile);
  // };

  // const toggleModalMenu = () => {
  //   setShowModalMenu(showModalMenu => !showModalMenu);
  // };

  // useEffect(() => {
  //   setCurrentURL(location.pathname);
  // }, [location]);

  const isLoggedIn = false;
  
  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo to="/">HealthyHub</Logo>
          {isLoggedIn ? (<div>Hello</div>): (
            <Navigation>
              <SignInLink to="/signin">Sign in</SignInLink>/
            <SignUpLink to="/signup">Sign up</SignUpLink>
            {/* <IconWrap>
              <use href={`${sprite}#profile`} />
            </IconWrap> */}
              <CircleProfile src={avatar} />
          </Navigation>)}
   
        </HeaderWrap>
      </Container>
    </header>
  );
}

