import React, {useEffect} from 'react'
import Carrousel from './Carrousel'
import Featured from './Featured'
import Menu from './Menu'
import Footer from './Footer'
import { useSelector } from 'react-redux'


const Home = () => {
const user = useSelector((state)=>state.user)




  return (
  <>

  <Carrousel/>

  <Menu />
  <Featured/>

  <Footer/>

  </>
  )
}

export default Home