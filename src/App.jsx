import './App.css'
import users from './data/users.json'
import Card from './component/Card'

function App() {  
  
  return (
    <div className="App">
      <Card data={users}/>
    </div>
  )
}

export default App
