import Theme from '../../themes/DefaultTheme';
import './App.css'

function App() {
  return (
    <div className='page'>
      <div className="resume">
        <Theme profile={{
          name: '毛强强',
          avator: 'https://avatars.githubusercontent.com/u/13417006?v=4'
        }} />
      </div>
    </div>
  )
}

export default App
