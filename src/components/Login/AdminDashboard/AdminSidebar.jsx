// import "./sidebar.css"
// import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
// import StarIcon from "@mui/icons-material/Star";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
// import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
// import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
// import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import { useSelector } from "react-redux";


// const AdminSidebar = () => {
//     const user = useSelector((state) => state.user);
//   return (
    
//    <div className="sidebar">
//     <h3 className="sidebarTitleAdmin">Admin: {user.firstname} {user.lastname}</h3>
//    <div className="sidebarWrapper">
//     <div className="sidebarMenu">
//         <button>OPEN</button>
//         <h3 className="sidebarTitle">Dashboard</h3>
//         <ul className="sidebarList ">
       
//             <li className="sidebarListItem active">
                
//             <MenuBookSharpIcon className="sidebarIcon"/>
//             Menu
//             </li>
       
//             <li className="sidebarListItem">
//             < StarIcon className="sidebarIcon"/>
//             Featured
//             </li>
//             <li className="sidebarListItem">
//             <CalendarTodayIcon className="sidebarIcon"/>
//             Bookings
//             </li>
//         </ul>
//         <h3 className="sidebarTitle">Quick Menu</h3>
//         <ul className="sidebarList">
//             <li className="sidebarListItem ">
//             <PersonOutlineOutlinedIcon  className="sidebarIcon"/>
//             Users
//             </li>
//             <li className="sidebarListItem">
//             <StorefrontSharpIcon className="sidebarIcon"/>
//              Products
//             </li>
//             <li className="sidebarListItem">
//             <AttachMoneyIcon className="sidebarIcon"/>
//             Transactions
//             </li>           
//         </ul>
//         <h3 className="sidebarTitle">Notifications</h3>
//         <ul className="sidebarList">
//             <li className="sidebarListItem ">
//             <MailOutlineSharpIcon className="sidebarIcon"/>
//             Mail
//             </li>
//             <li className="sidebarListItem">
//             <DynamicFeedIcon className="sidebarIcon"/>
//              Feedback
//             </li>
//             <li className="sidebarListItem">
//             <ChatBubbleOutlineSharpIcon  className="sidebarIcon"/>
//             Messages
//             </li>
//         </ul>
        
        
//     </div>
//    </div>
//    </div>
//   )
// }
// export default AdminSidebar