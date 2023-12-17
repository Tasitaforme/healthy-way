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

export default function SignUpImage({ currentStep }) {
  return (
    <>
      {currentStep === 1 && (
        <img
          srcSet={`${watchDesk1x} 592w, ${watchDesk2x} 1184w, ${watchTab1x} 380w, ${watchTab2x} 760w, ${watchMob1x} 300w,${watchMob2x} 600w`}
          sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
          alt="Watch"
        />
      )}
      {currentStep === 2 && (
        <img
          srcSet={`${hikingDesk1x} 592w, ${hikingDesk2x} 1184w, ${hikingTab1x} 380w, ${hikingTab2x} 760w, ${hikingMob1x} 300w,${hikingMob2x} 600w`}
          sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
          alt="Hiking"
        />
      )}
      {currentStep === 3 && (
        <img
          srcSet={`${fitnessDesk1x} 592w, ${fitnessDesk2x} 1184w, ${fitnessTab1x} 380w, ${fitnessTab2x} 760w, ${fitnessMob1x} 300w,${fitnessMob2x} 600w`}
          sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
          alt="Fitness"
        />
      )}
      {currentStep === 4 && (
        <img
          srcSet={`${parametersDesk1x} 592w, ${parametersDesk2x} 1184w, ${parametersTab1x} 380w, ${parametersTab2x} 760w, ${parametersMob1x} 300w,${parametersMob2x} 600w`}
          sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
          alt="Parameters"
        />
      )}
      {currentStep === 5 && (
        <img
          srcSet={`${activityDesk1x} 592w, ${activityDesk2x} 1184w, ${activityTab1x} 380w, ${activityTab2x} 760w, ${activityMob1x} 300w,${activityMob2x} 600w`}
          sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
          alt="Activity"
        />
      )}
    </>
  );
}
