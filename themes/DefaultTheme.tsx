import Profile from './Profile';
import Educations from './Educations';
import Intro from './Intro';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import type { ThemeOptions } from './type';

const DefaultTheme = ({
  profile,
  educations,
  selfIntroduction,
  workExperience,
  projects
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

      {projects && (
        <Projects projects={projects} />
      )}
    </div>
  );
}


export default DefaultTheme;
