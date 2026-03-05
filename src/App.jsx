
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/Banner/Banner'
import Container from './assets/Container/Container'
import IssuesManagement from './assets/IssuesManagement/IssuesManagement'
import Navbar from './Navbar/Navbar'

const fetchIssues = async () => {
  const result = await fetch("/public/issues.json");
  return result.json()

}
function App() {
  const fetchPromise = fetchIssues()
  return (
    <Container>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback="Loading">
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>
    </Container>
   
 
  )
}

export default App
