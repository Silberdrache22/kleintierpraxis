import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import PraxisPage from './pages/PraxisPage'

function App() {
  
   const router = createBrowserRouter(
     createRoutesFromElements(
     <Route path ='/' element ={<MainLayout/>} >
       <Route index element = { <HomePage /> } />
       <Route path ='/praxis' element = { <PraxisPage /> } />
       <Route path ='/info' element = { <InfoPage /> } />
     </Route>
   )
   )
 
   return <RouterProvider  router={router} />
 }
 
 export default App