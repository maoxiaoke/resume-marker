import Divider from './Divider';
import './workExperience.css';

import type { ThemeOptions } from './type';

const WorkExperience = ({ workExperience }: { workExperience: ThemeOptions['workExperience'] }) => {
  return (
    <>
      <Divider title='工作经历' />
      {
        workExperience.map(exp => (
          <>
            <div className="exp-infos">
              <div>
                <span style={{ fontWeight: '600' }}>{exp.companyName}</span>
                <span style={{ fontSize: '12px', opacity: 0.6, display: 'inline-block', marginLeft: '4px' }}>{exp.department}</span>
              </div>
              <span style={{ fontSize: '12px', opacity: 0.6 }}>{exp.workTime[0]} ~ {exp.workTime[1] || '至今'}</span>
            </div>

            <div className="exp-desc">{exp.workDesc}</div>
          </>
        ))
      }
    </>
  )
}

export default WorkExperience;
