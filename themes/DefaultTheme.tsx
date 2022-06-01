import Profile from './Profile';
import Educations from './Educations';
import Intro from './Intro';
import WorkExperience from './WorkExperience';
import type { ThemeOptions } from './type';

const DefaultTheme = ({
  profile,
  educations,
  selfIntroduction,
  workExperience
}: Partial<ThemeOptions>) => {
  return (
    <div className="default-theme">
      {profile && (
        <Profile {...profile} />
      )}

      {educations && (
        <Educations educations={educations} />
      )}

      {selfIntroduction && (
        <Intro selfIntroduction={selfIntroduction} />
        )}

      {workExperience && (
        <WorkExperience workExperience={workExperience} />
      )}
    </div>
  );
}


export default DefaultTheme;
