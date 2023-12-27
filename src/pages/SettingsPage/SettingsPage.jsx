import React from 'react';
import UserInformation from '../../components/UserInformation/UserInformation';
import profileMob1x from '../../assets/images/profileSettings/profile-mob@1x.png';
import profileMob2x from '../../assets/images/profileSettings/profile-mob@2x.png';
import profileTab1x from '../../assets/images/profileSettings/profile-tab@1x.png';
import profileTab2x from '../../assets/images/profileSettings/profile-tab@2x.png';
import profileDesk1x from '../../assets/images/profileSettings/profile-desk@1x.png';
import profileDesk2x from '../../assets/images/profileSettings/profile-desk@2x.png';
import {
  SettingsPageTitle,
  SettingsPageImg,
  UserContentWrapper,
  SettingsContainer,
  UserPrivateSettingsWrapper,
} from './SettingsPage.styled';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';
import DeleteUser from '../../components/DeleteUser/DeleteUser';
import LogOutButton from '../../components/LogOutButton/LogOutButton';

export default function SettingsPage() {
  return (
    <main>
      <SettingsContainer>
        <SettingsPageTitle>Profile setting</SettingsPageTitle>
        <LogOutButton />
        <UserContentWrapper>
          <SettingsPageImg
            $imageDesk1x={profileDesk1x}
            $imageDesk2x={profileDesk2x}
            $imageTab1x={profileTab1x}
            $imageTab2x={profileTab2x}
            $imageMob1x={profileMob1x}
            $imageMob2x={profileMob2x}
            $heightMob="296px"
            $heightTab="376px"
            $heightDesk="588px"
          />
          <section>
            <UserInformation />
          </section>
        </UserContentWrapper>
        <UserPrivateSettingsWrapper>
          <ChangePasswordForm />
          <DeleteUser />
        </UserPrivateSettingsWrapper>
      </SettingsContainer>
    </main>
  );
}
