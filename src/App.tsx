import { Route, Routes } from "react-router-dom"

import { Toaster } from "react-hot-toast"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import List from "./pages/List"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
         < Route  path="products" element={<List/>}/>
         
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      <Toaster/>
    </>
  )
}

export default App
