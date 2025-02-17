import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout' 
import './styles/MainApp.css'
import Home from './pages/Home'
function App() {

  return (
    <div className='app-container'>
      <Router>
        <Layout>
          <Main />
        </Layout>
      </Router>
    </div>
  )
}

export default App


const Main = () => {
  return (
    <div>
        <main className='main-container'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
  )
}
