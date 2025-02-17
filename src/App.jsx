import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout' 
import './styles/MainApp.css'
function App() {

  return (
    <div className='app-container'>
      <Layout>
        <Main />
      </Layout>
    </div>
  )
}

export default App


const Main = () => {
  return (
    <div>
      <Router>
        <main className='main-container'>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  )
}
