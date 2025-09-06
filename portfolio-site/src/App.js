import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ComingSoon from './pages/ComingSoon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/test/coming-soon',
    element: <ComingSoon />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
