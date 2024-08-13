import { Outlet } from 'react-router'
import Footer from '../../shared/footer/Footer'
import Header from '../../shared/header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home
