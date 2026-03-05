
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './assets/Banner/Banner'
import Container from './assets/Container/Container'
import IssuesManagement from './assets/IssuesManagement/IssuesManagement'
import Navbar from './Navbar/Navbar'
import Footer from './assets/Footer/Footer'
import { ToastContainer } from 'react-toastify'


const fetchIssues = async () => {
  const result = await fetch("/public/issues.json");
  return result.json()

}
function App() {
  const fetchPromise = fetchIssues()
  const [inProgress, setInprogress]=useState(0)
  const [resloved, setResloved]=useState(0)
  return (
    <div>
    <Container>
      <Navbar></Navbar>
      <Banner inProgress={inProgress} resloved={resloved}></Banner>
      <Suspense fallback="Loading">
        <IssuesManagement resloved={resloved} setResloved={setResloved} fetchPromise={fetchPromise} inProgress={inProgress} setInprogress={setInprogress}></IssuesManagement>
      </Suspense>
    </Container>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
   </div>
   
 
  )
}

export default App
