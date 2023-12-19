import React from 'react';
import { Container } from '../../components/StyledComponents/Container';

import UserInformation from '../../components/UserInformation/UserInformation';

import profileMob1x from '../../assets/images/profileSettings/profile-mob@1x.png';
import profilrMob2x from '../../assets/images/profileSettings/profile-mob@2x.png';
import profileTab1x from '../../assets/images/profileSettings/profile-tab@1x.png';
import profileTab2x from '../../assets/images/profileSettings/profile-tab@2x.png';
import profileDesk1x from '../../assets/images/profileSettings/profile-desk@1x.png';
import profileDesk2x from '../../assets/images/profileSettings/profile-desk@2x.png';

import {
  SettingsPageTitle,
  SettingsPageImg,
  UserContentWrapper,
} from './SettingsPage.styled';

export default function SettingsPage() {
  return (
    <main>
      <Container>
        <SettingsPageTitle>Profile setting</SettingsPageTitle>
        <UserContentWrapper>
          <SettingsPageImg
            srcSet={`${profileMob1x} 300w, ${profilrMob2x} 600w, ${profileTab1x} 380w, ${profileTab2x} 760w, ${profileDesk1x} 592w, ${profileDesk2x} 1184w`}
            alt="User profile image"
            sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
          />
          <section>
            <UserInformation />
          </section>
        </UserContentWrapper>
      </Container>
    </main>
  );
}
