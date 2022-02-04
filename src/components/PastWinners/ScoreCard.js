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
import { ThemeProvider, createTheme } from '@mui/material/styles';

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


function ScoreCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800, textAlign: "left", margin: "20px 0px" }}>
      <CardContent sx= {{padding: "15px 10px 0px 15px"}}>
      <Typography
        sx= {{
          fontSize: "12px",
          textAlign: 'left',
        }}>
        <div> Contestant <b>{props.contestant}</b></div>
        </Typography>
      </CardContent>
      
      <CardContent sx= {{padding: "5px 15px"}}>
        <Typography 
          sx = {
            {
            textAlign: "left",
            padding: "0px"
            }
          }
          variant="body2" 
          color="text.secondary">
          {props.winningYear + " Winner"}
        </Typography>
      </CardContent>

      <CardContent sx= {{display: "inline-block", padding: "5px 15px"}}>
        <Typography 
          sx = {
            {
            textAlign: "left",
            padding: "0px"
            }
          }
          variant="body2" 
          >
          {props.voteCount + " Votes"}
        </Typography>
      </CardContent>



      <CardActions disableSpacing
               sx = {
            {
              position: "relative",
              top: "-20px",
              height: "0px"
            }
          }>
        <ExpandMore
 
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {props.body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ScoreCard