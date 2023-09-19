import MyInfo from './components/MyInfo'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Form from './components/Form'
import Footer from './components/Footer'
import { Route,Router } from 'react-router-dom/dist/umd/react-router-dom.development'
import Experience from './components/Experience'


function App() {
  

  return (
    <div className='  bg-black px-10  '>
     <MyInfo/>
     <h1 className='text-white mt-10 font-test text-bold text-[48px]'>Skills</h1>
     <Skills />
     <Experience/>
     <Projects/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default App
