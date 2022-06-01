import Theme from '../../themes/DefaultTheme';
import './App.css'

function App() {
  return (
    <div className='page'>
      <div className="resume">
        <Theme
          profile={{
            name: '毛强强',
            email: 'maoxiaoke@outlook.com',
            github: 'https://github.com/maoxiaoke',
            mobile: '(+86)130-5758-3790',
            blog: 'https://www.nazha.co',
            avator: 'https://avatars.githubusercontent.com/u/13417006?v=4'
          }}

          educations={[
            {
              eduTime: ['2022.02.02', '2333.03.23'],
              school: '南京航空航天大学',
              degree: '本硕'
            }
          ]}

          selfIntroduction="自驱型前端工程师，有过业务和基础技术开发经验，目前负责淘系前端开源产品 ice.js（前端框架）、icestark（微前端框架） 和 @ice/pkg（库开发工具） 的研发。"

          workExperience={[
            {
              companyName: "阿里巴巴淘系技术",
              department: "前端架构",
              workTime: ["2020.12.12", null],
              workDesc: "淘系飞冰团队核心成员，负责 ice.js、icestark 和 @ice/pkg 等技术产品的设计和开发\r\n"
          }, {
            companyName: "饿了么",
            department: "大前端部",
            workTime: ["2018.05.01", "2020.11.02"],
            workDesc: "饿了么商家版交易板块核心负责人。开发：商家版 PC 客户端、订单管理板块、营销板块。开发过支付宝小程序。以核心角色参与商家端版本重构。\r\n"
          }
          ]}

          projects={[
            {
              name: "面向未来的包开发工具 @ice/pkg",
              role: "Owner",
              time: "2022.02 - 至今",
              github: "https://github.com/ice-lab/icepkg",
              desc: "以快、双模式、面向未来为特点的库开发工具，满足 React Components、Node 模块、前端库等多场景开发需求。底层使用 build-scripts 2.x 插件系统，支持用户、开发者进行快速扩展（比如支持 Vue 组件开发）。结合 Docusaurus，提供强大的文档服务以及组件预览服务。"
            }, {
              name: "面向大型系统的微前端解决方案 - icestark",
              role: "Owner",
              time: "2020.12 - 至今",
              github: "https://github.com/ice-lab/icestark",
              desc: "内部项目孵化的微前端解决方案，提供完善的微前端解决方案：样式隔离、脚本沙箱、预加载、通信等。直接或间接服务阿里集团内部 40% 的业务项目。"
            }, {
              name: "基于 React 的渐进式应用框架 - ice.js",
              role: "Maintainer",
              time: "2020.12 - 至今",
              github: "https://github.com/alibaba/ice",
              desc: "ice.js 是一个基于 React 的研发框架，另外包含大量业内开发最佳实践，例如SSG、SSR、数据 Mock、一体化、权限管理。结合 icestark，提供开箱即用微前端接入。技术架构上，基于 build-scripts，只能自定义编译时、运行时能力，提供可插拔能力。在设计上，率先引入 vite 和 webpack 双模式。作为核心开发者，参与了所有能力建设与性能优化。"
            }, {
              name: "饿了么商家端重构",
              role: "Maintainer",
              time: "2019.12 - 2020.11",
              intro: "饿了么商家端是饿了么商户进行订单管理、营销、上菜等功能的管理平台。",
              desc: "对基于 Angular1.x 的商家主应用进行升级重构，负责方案架构设计，基于 iframe 设计主应用与子应用调度系统。支持预加载、LRU 缓存，应用常驻等优化能力。"
            }
          ]}

        />
      </div>
    </div>
  )
}

export default App
