import Divider from './Divider';

import type { ThemeOptions } from './type';

const Educations = ({ educations }: { educations: ThemeOptions['educations'] }) => {
  return (
    <>
      <Divider title='教育背景' />
      {
        educations.map(edu => (
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <span style={{ fontWeight: '600'}}>{edu.school}</span>
              （{edu.degree}）
            </div>
            <span>{edu.eduTime[0]} ~ {edu.eduTime[1]}</span>
          </div>
        ))
      }
    </>
  )
}

export default Educations;
