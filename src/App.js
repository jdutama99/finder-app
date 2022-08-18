import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import About from './Pages/About'
import User from './Pages/User'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import { GithubProvider } from './Context/github/GithubContext'
import { AlertProvider } from './Context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <NavBar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
