import Profile from './Profile';
import type { ThemeOptions } from './type';

const DefaultTheme = ({ profile }: Partial<ThemeOptions>) => {
  return (
    <div className="default-theme">
      {profile && (
        <Profile {...profile} />
      )}
    </div>
  );
}


export default DefaultTheme;
