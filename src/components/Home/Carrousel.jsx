import { Carousel } from 'react-carousel-minimal';
import {Container} from '@mui/material'

function App() {
 const data = [
    {
        image: "https://images.pexels.com/photos/2526404/pexels-photo-2526404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Enjoy!"
      },
    {
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      caption: `<div>
                  Coffeels
                </div>`
    },
    {
      image: "https://images.unsplash.com/photo-1548226066-f3865161f42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Good Vibes"
    },
    {
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80",
      caption: "Good Energy"
    },
   
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
   
      <div style={{ textAlign: "center" ,marginTop:"80px",  }}>
      
        
        <div style={{
        
        }}>
          <Carousel
            data={data}
            time={5000}
            width="1500px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
        
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1500px",
              maxHeight: "600px",
              margin: "40px auto",
              
            }}
          />
        </div>
      </div>

  );
}

export default App;