import watchDesk1x from '../../assets/images/watch/watch-desk@1x.png';
import watchDesk2x from '../../assets/images/watch/watch-desk@2x.png';
import watchTab1x from '../../assets/images/watch/watch-tab@1x.png';
import watchTab2x from '../../assets/images/watch/watch-tab@2x.png';
import watchMob1x from '../../assets/images/watch/watch-mob@1x.png';
import watchMob2x from '../../assets/images/watch/watch-mob@2x.png';
import hikingDesk1x from '../../assets/images/hiking/hiking-desk@1x.png';
import hikingDesk2x from '../../assets/images/hiking/hiking-desk@2x.png';
import hikingTab1x from '../../assets/images/hiking/hiking-tab@1x.png';
import hikingTab2x from '../../assets/images/hiking/hiking-tab@2x.png';
import hikingMob1x from '../../assets/images/hiking/hiking-mob@1x.png';
import hikingMob2x from '../../assets/images/hiking/hiking-mob@2x.png';
import fitnessDesk1x from '../../assets/images/fitness/fitness-desk@1x.png';
import fitnessDesk2x from '../../assets/images/fitness/fitness-desk@2x.png';
import fitnessTab1x from '../../assets/images/fitness/fitness-tab@1x.png';
import fitnessTab2x from '../../assets/images/fitness/fitness-tab@2x.png';
import fitnessMob1x from '../../assets/images/fitness/fitness-mob@1x.png';
import fitnessMob2x from '../../assets/images/fitness/fitness-mob@2x.png';
import parametersDesk1x from '../../assets/images/parameters/parametrs-desk@1x.png';
import parametersDesk2x from '../../assets/images/parameters/parametrs-desk@2x.png';
import parametersTab1x from '../../assets/images/parameters/parameters-tab@1x.png';
import parametersTab2x from '../../assets/images/parameters/parameters-tab@2x.png';
import parametersMob1x from '../../assets/images/parameters/parameters-mob@1x.png';
import parametersMob2x from '../../assets/images/parameters/parameters-mob@2x.png';
import activityDesk1x from '../../assets/images/activity/activity-desk@1x.png';
import activityDesk2x from '../../assets/images/activity/activity-desk@2x.png';
import activityTab1x from '../../assets/images/activity/activity-tab@1x.png';
import activityTab2x from '../../assets/images/activity/activity-tab@2x.png';
import activityMob1x from '../../assets/images/activity/activity-mob@1x.png';
import activityMob2x from '../../assets/images/activity/activity-mob@2x.png';
import { BackgroundImage } from './SignUpImage.styled';

export default function SignUpImage({ currentStep }) {
  return (
    <>
      {currentStep === 1 && (
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
      )}
      {currentStep === 2 && (
        <BackgroundImage
          $imageDesk1x={hikingDesk1x}
          $imageDesk2x={hikingDesk2x}
          $imageTab1x={hikingTab1x}
          $imageTab2x={hikingTab2x}
          $imageMob1x={hikingMob1x}
          $imageMob2x={hikingMob2x}
          $heightMob="290px"
          $heightTab="368px"
          $heightDesk="574px"
        />
      )}
      {currentStep === 3 && (
        <BackgroundImage
          $imageDesk1x={fitnessDesk1x}
          $imageDesk2x={fitnessDesk2x}
          $imageTab1x={fitnessTab1x}
          $imageTab2x={fitnessTab2x}
          $imageMob1x={fitnessMob1x}
          $imageMob2x={fitnessMob2x}
          $heightMob="288px"
          $heightTab="366px"
          $heightDesk="570px"
        />
      )}
      {currentStep === 4 && (
        <BackgroundImage
          $imageDesk1x={parametersDesk1x}
          $imageDesk2x={parametersDesk2x}
          $imageTab1x={parametersTab1x}
          $imageTab2x={parametersTab2x}
          $imageMob1x={parametersMob1x}
          $imageMob2x={parametersMob2x}
          $heightMob="302px"
          $heightTab="382px"
          $heightDesk="594px"
        />
      )}
      {currentStep === 5 && (
        <BackgroundImage
          $imageDesk1x={activityDesk1x}
          $imageDesk2x={activityDesk2x}
          $imageTab1x={activityTab1x}
          $imageTab2x={activityTab2x}
          $imageMob1x={activityMob1x}
          $imageMob2x={activityMob2x}
          $heightMob="304px"
          $heightTab="384px"
          $heightDesk="598px"
        />
      )}
    </>
  );
}
