import MyInfo from './components/MyInfo'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Form from './components/Form'
import Footer from './components/Footer'
import { Route,Router } from 'react-router-dom/dist/umd/react-router-dom.development'


function App() {
  

  return (
    <div className='  bg-black  mx-auto p-10'>
     <MyInfo/>
     <Skills />
     <Projects/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default App
