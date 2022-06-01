import Theme from '../../themes/DefaultTheme';
import './App.css'

function App() {
  return (
    <div className='page'>
      <div className="resume">
        <Theme
          profile={{
            name: '毛强强',
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

        />
      </div>
    </div>
  )
}

export default App
