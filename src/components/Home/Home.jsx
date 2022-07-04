import React, {useEffect} from 'react'
import Carrousel from './Carrousel'
import Featured from './Featured'
import Menu from './Menu'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Home = () => {
const user = useSelector((state)=>state.user)


useEffect(() => {
if(user.id)console.log("ESTO ES ESPAAARTAAA!!",user)

}, [user])


  return (
  <>

  <Carrousel/>

  <Featured/>
  <Menu />
  <Footer/>

  </>
  )
}

export default Home