import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from '@mui/material';
import { useNavigate, Link,useParams } from "react-router-dom";

import { useSelector,useDispatch } from 'react-redux'


const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height:40,
  display:"flex",
  justifyContent:"center",
};

export default function Search() {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
 

  const handleronChange= (e) =>{
    setSearchInput(e.target.value)
  }

  const handleX = () =>{
        setSearchInput("")
      }
 
  
  const handlerSummit = (e) =>{
    e.preventDefault()
 
    navigate(`/search/${searchInput}`);
    setOpen(false);
   
  }

  return (
    <div>
    <div> <IconButton onClick={handleOpen} >
   
    <SearchIcon sx={{fontSize:"30px",color:"#352620"}}/>
 
 </IconButton>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form className="form" onSubmit={handlerSummit} >
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input className="input" placeholder="Type your text" required="" type="text"  value={searchInput} onChange={handleronChange}/>
      <button className="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={handleX} className="h-6 w-6" fill="none" viewBox="0 0 24 24"     stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
    </form>
        </Box>
      </Modal>

    </div>
      <div>
   

      </div>
    
    </div>
  );
}