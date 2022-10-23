import { RouteObject } from 'react-router-dom'
import Main from './pages/Main'
import Dictionary from './pages/Dictionary'

export default [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/dict',
    element: <Dictionary />
  }
] as RouteObject[]