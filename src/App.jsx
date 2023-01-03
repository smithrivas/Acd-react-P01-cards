import './App.css'
import users from './data/users.json'
import Card from './component/Card'

function App() {  
  
  return (
    <div className="App">
      
        {/* users.map((user, index)=><Card key={index} data={user}/>) */}
        <Card data={users}/>
      
    </div>
  )
}

export default App
