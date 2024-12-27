import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HeroSection from './pages/client/HeroSection'
import Login from './pages/Login'
import Courses from './pages/client/Courses'
import MyCourses from './pages/client/MyCourses'
import Profile from './pages/client/Profile'
import Sidebar from './pages/admin/Sidebar'
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/dev/CourseTable'
import AddCourse from './pages/admin/dev/AddCourse'
import EditCourse from './pages/admin/dev/EditCourse'
import { ThemeProvider } from './components/ThemeProvider'

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
      },
      {
        path: 'admin',
        element: <Sidebar />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'course',
            element: <CourseTable />
          },
          {
            path: 'course/create',
            element: <AddCourse />
          },
          {
            path: 'course/:courseId',
            element: <EditCourse />
          }
        ]
      }
    ]
	}
])

function App() {
  return (
    <>
      <main>
        <ThemeProvider>
          <RouterProvider router={appRouter} />
        </ThemeProvider> 
      </main>
    </>
  )
}

export default App
