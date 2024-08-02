import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   <div className='row gap-5'>
     <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nigerian meal 1"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://blog.remitly.com/wp-content/uploads/2022/09/different-Nigerian-dishes.jpeg.avif"
        alt="Nigerian dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a Nigerian meal that consist of jollof rice, plantain, white rice and plantain and all other things
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
     <div className='my-[30px]'>
     <Button variant='outlined'  style={{backgroundColor:"red", marginRight:"100px", marginLeft:"10px", color:"white"}}>Delete</Button>
      <Button variant='outlined'  style={{backgroundColor:"yellow",color:"black"}}>Edit</Button>
     </div>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nigerian meal 1"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZn5SMFNFYP6FzrTepxHeNO_OjE7j0RPXIg&s"
        alt="Nigerian dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a Nigerian meal that consist of beans
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
     <div className='my-[30px]'>
     <Button variant='outlined'  style={{backgroundColor:"red", marginRight:"100px", marginLeft:"10px", color:"white"}}>Delete</Button>
      <Button variant='outlined'  style={{backgroundColor:"yellow",color:"black"}}>Edit</Button>
     </div>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nigerian meal 1"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="224"
        image="https://i.ytimg.com/vi/LnfeYXsFi2Y/maxresdefault.jpg"
        alt="Nigerian dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a Nigerian meal that consist of jollof rice, plantain, white rice and plantain and all other things
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
     <div className='my-[30px]'>
     <Button variant='outlined'  style={{backgroundColor:"red", marginRight:"100px", marginLeft:"10px", color:"white"}}>Delete</Button>
      <Button variant='outlined'  style={{backgroundColor:"yellow",color:"black"}}>Edit</Button>
     </div>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nigerian meal 1"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://blog.remitly.com/wp-content/uploads/2022/09/different-Nigerian-dishes.jpeg.avif"
        alt="Nigerian dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a Nigerian meal that consist of jollof rice, plantain, white rice and plantain and all other things
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
     <div className='my-[30px]'>
     <Button variant='outlined'  style={{backgroundColor:"red", marginRight:"100px", marginLeft:"10px", color:"white"}}>Delete</Button>
      <Button variant='outlined'  style={{backgroundColor:"yellow",color:"black"}}>Edit</Button>
     </div>
    </Card>
   </div>
  );
}
