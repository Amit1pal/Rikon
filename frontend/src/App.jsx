import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./pages/Home"
import { Toaster } from "sonner"
export default function App() {
  return (
   <BrowserRouter>
   <Toaster position="top-right"/>
    <Routes>
      <Route path="/"element={<UserLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route>{/* Admin Layou */}</Route>
    </Routes>
   </BrowserRouter>
  )
}