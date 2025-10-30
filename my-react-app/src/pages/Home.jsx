import Body from '../components/Body.jsx'
import Navbar from '../components/Navbar.jsx'

function Home() {
  return (
    <>
      <div className="frontPage">
        <Navbar />
        <div style={{height: 50}}></div>
        <Body />
      </div>
    </>
  )
}



export default Home
