import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HeroSection from './pages/client/HeroSection'
import Login from './pages/Login'
import Courses from './pages/client/Courses'
import MyCourses from './pages/client/MyCourses'
import Profile from './pages/client/Profile'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
    children: [
      {
        path: '/',
        element: 
          <>
            <HeroSection />
            <Courses />
          </>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/my-courses',
        element: <MyCourses />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
	}
])

function App() {
  return (
    <>
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </>
  )
}

export default App
