import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const divRoot = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(divRoot)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)