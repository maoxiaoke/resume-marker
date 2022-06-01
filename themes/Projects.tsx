import Divider from './Divider';

import './projects.css'

import type { ThemeOptions } from './type';

const WorkExperience = ({ projects }: { projects: ThemeOptions['projects'] }) => {
  return (
    <>
      <Divider title='项目经历' />

      {
        projects.map(project => (
          <>
            <div className="project-infos">
              <div>
                <span style={{ fontWeight: '600' }}>{project.name}</span>
                <span style={{ fontSize: '12px', opacity: 0.6, display: 'inline-block', marginLeft: '4px' }}>{project.time}</span>
              </div>
              <span style={{ fontSize: '12px', opacity: 0.6 }} className="project-role-button">{project.role}</span>
            </div>
            { project.github && <div className="project-text">代码地址：<a href={project.github} target="_blank">{project.github}</a></div> }
            { project.intro && <div className="project-text"> 项目介绍：{project.intro} </div> }
            <div className="project-text">主要工作：{project.desc}</div>
          </>
        ))
      }
    </>
  )
}

export default WorkExperience;
