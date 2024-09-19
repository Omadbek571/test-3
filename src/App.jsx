import "./App.css"
import UserList from "./components/UserList"
import data from "./assets/data/data.json"

function App() {
  return (
    <div>
      <UserList data = {data}/>
    </div>
  )
}

export default App