import React from 'react'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import NotFound from './pages/NotFound'
import {BrowserRouter,Routes,Route} from 'react-router'

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFound/>} />
       
    </Routes>
  </BrowserRouter>
  )
}

export default App
/*const { location } = window;
  const { pathname } = location
  if (pathname === "/") {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
  else if (pathname === "/search") {
    return (
      <div>
        <SearchPage />
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Oops... Page not found!</h1>
        <a href="/">Home</a>
      </div>
    )
  }*/