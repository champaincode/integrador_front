import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Favorites = () => {
  return (
    
 
<>
<Container  sx={{marginTop:"100px"}}>
<Container>
<Divider variant='middle' />
 <Typography sx={{padding:"20px",fontFamily:"Lobster",fontSize:"25px",color:"white", textAlign:"center"}}>Favorites</Typography>
<Divider variant='middle'/>

</Container>
<Box sx={{marginTop:"10px", }}>
<Container  maxWidth="lg"  >
<Grid container   spacing={{ xs: 8, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(8)).map((_, index) => (
          <Grid  item xs={2} sm={4} md={2} key={index}>
            <Item  sx={{width:"100px",borderRadius:"100px",height:"100px",padding:{xs:2, md:2}, backgroundColor:"#795548", cursor:"pointer"}}> 
            <img className='img_adptable' src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMezzaluna-425-x-425_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop" />
            </Item>
            <h2 style={{marginLeft:"10px"}}> Featureds </h2>
          </Grid>
        ))}
      </Grid>
     </Container>
</Box>



</Container>



</>

  )
}

export default Favorites


