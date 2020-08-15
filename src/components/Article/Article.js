import React from 'react'
import classes from './Article.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const Article = (props) => {

  const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      // maxWidth: 900,
      border: '1px solid #ddd'
    },
    title: {
      color: 'white',
      fontFamily: 'Arial',
      fontStyle: 'normal'  
      },
    content: {
      color: 'white',
      marginTop: '5px',
      marginBottom: '3px',
      fontStyle: 'normal'
    },
    image: {
      width: 158,
      height: 128,
      paddingTop: '10px'
    },
    img: {
      margin: 'auto',
      display: 'block',
      width: 150,
      height: 120
    },
    sourceName: {
    color: 'honeydew',
    fontSize: 'small',
    },
    link: {
      textDecoration: 'none'
    },
    red: {
      backgroundColor: 'rgb(255,0,0)',
      padding: '5px'
    },
    blue: {
      backgroundColor: 'rgb(0, 0, 102)',
      padding: '5px'
    },
    purple: {
      backgroundColor: 'rgb(51, 102, 153)',
      padding: '5px'
    },
    gray: {
      backgroundColor: 'rgb(54, 74, 94)',
      padding: '5px'
    }
  }));

  const classes = useStyles();

  const colorClasses = [];
  if(props.counter %4 == 0) {
    colorClasses.push(classes.purple); 
  }
  else if(props.counter %4 == 1) {
    colorClasses.push(classes.blue); 
  }
  else if(props.counter %4 == 2){
    colorClasses.push(classes.gray); 
  }
  else if(props.counter %4 == 3){
    colorClasses.push(classes.red); 
  }

  var content=props.description;
  // if(props.selectedCountry === "IL" || props.selectedCountry === "RU" || props.selectedCountry === "KR" ||
  //    props.selectedCountry === "UA" || props.selectedCountry === "JP" || props.selectedCountry === "CN" ||
  //    props.selectedCountry === "TW" || props.selectedCountry === "EG" || props.selectedCountry === "HK" ||
  //    props.selectedCountry === "GR" || props.selectedCountry === "LT" || props.selectedCountry === "LV" ||
  //    props.selectedCountry === "TH"){
  //   content=props.description;
  // }
  // else{
  //   content=props.content;
  // }


    return (
      
      //  <div className="singleArticle">
      //    <div className= "articleText">
      //     <p>{props.source}</p>
      //     <h5> {props.title}</h5>
      //     <span className="content">{props.content}</span>
      //    </div>
      //   <img src={props.urlToImage}></img>
      //   <br/><br/>
      
    

      <div>
        <a className={classes.link} href={props.url} target="_blank">
          <Paper className={colorClasses.join(' ')}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm container>
              <Grid item>
                  <Typography varian="body2" style={{ cursor: 'pointer'}}>      
                  <b className={classes.title}>{props.title}</b>
                  </Typography>
                  <Typography className={classes.content} variant="body2" color="textSecondary">
                      {content}
                    </Typography>
                </Grid>
              </Grid>
              <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={props.urlToImage} />
              </ButtonBase>
            </Grid>
          </Grid>
          <span className={classes.sourceName}><i>{props.source}</i></span>
        </Paper>
        
      <br/>
      </a>
       </div>
      )
    };

  export default Article