import "./menuAdmin.css"
import MenuInfo from "../../menuInfo/MenuInfo"
import React,{useState, } from "react"
import axios from "axios"


const HomeAdmin = () => {
  const [allUsers, setAllUsers] = useState([])


 axios.get('http://localhost:5000/api/admin/alluser',)
    .then((res) => {
      setAllUsers(res.data)
   
    })

    



  return (
    <div className="menu">
     <MenuInfo />
   <div className="menu_content">
  
   <>

  <table className="redTable">
    <thead>
      <tr >
      <th>id</th>
      {allUsers.map((id, i)=>{
           return (<th key={i}>{id.id}</th>)
          })}
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colSpan={7}>
          <div className="links">
            <a href="#">«</a>{" "}
            <a className="active" href="#">
              1
            </a>{" "}
            <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
            <a href="#">»</a>
          </div>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Firstname</td>
      {allUsers.map((user, i)=>{
           return (<td key={i}>{user.firstname}</td>)
          })}
      </tr>
      <tr>
      <td>Lastname</td>
      {allUsers.map((user, i)=>{
           return (<td key={i}>{user.lastname}</td>)
          })}
      </tr>
      <tr>
        <td>Email</td>
        {allUsers.map((user, i)=>{
           return (<td key={i}>{user.email}</td>)
          })}
   
      </tr>
      <tr>
        <td>Status</td>
        {allUsers.map((user, i)=>{
           return (<td key={i}>{user.isAdmin ?"Admin" : "Usuario"}</td>)
          })}
      </tr>
    </tbody>
  </table>
</>

   </div>
   
    </div>
  )
}

export default HomeAdmin


// const setAllUsersHandle = () => {
//   nameButton === "Abrir" ? 
//    axios.get('http://localhost:5000/api/admin/alluser',)
//    .then((res) => {
//      setAllUsers(res.data)
//      setNameButton("Cerrado")
//    }):setNameButton("Abrir")
//     setAllUsers([])

   
//  }
