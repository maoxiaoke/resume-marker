import Divider from './Divider';
import './workExperience.css';

import type { ThemeOptions } from './type';

const WorkExperience = ({ workExperience }: { workExperience: ThemeOptions['workExperience'] }) => {
  return (
    <>
      <Divider title='工作经历' />
      {
        workExperience.map(exp => (
          <div>
            <div className=""></div>
          </div>
        ))
      }
    </>
  )
}

export default WorkExperience;
