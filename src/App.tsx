import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'

function App(){
  const elements = useRoutes(routes)

  return (
    <div id="App">
      {elements}
    </div>
  )
}

export default App
