import React from 'react'
import classes from './Video.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


var count = 1



const Video = (props) => {
    return (
       <div className="videoDiv"> 
          {/* <p>{props.description}</p> */}
          {/* <div>
            <p className="videoPosition">
               {props.youtubeCounter} 
              </p>
          </div>
           */}
          {/* <a href={props.url} target="_blank">
          <div className="descriptionDiv"> 
            <h5>{props.title}</h5>
            <p> {props.publishedTime}</p>
          </div>
          <img className="imgDiv" src={props.urlToImage}></img>
          </a> */}
          <br/>
          <a href={props.url} target="_blank" style={{textDecoration: 'none'}}>
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <div className="ImageLink">
                <MDBCardImage className="imgVide" src={props.urlToImage} waves>
                </MDBCardImage>
                <PlayCircleOutlineIcon className="OverlayIcon" style={{ fontSize: 60 }} />
              </div>
  
              <MDBCardBody>
                <MDBCardTitle style={{marginTop:'2px', marginBottom:'2px'}}>{props.title}</MDBCardTitle>
                <MDBCardText>
                  {props.publishedTime}
                </MDBCardText>
              </MDBCardBody>
              <hr className="videoLine"></hr>

            </MDBCard>

          </MDBCol>
          </a>
       </div>

    // <div>
    //     <div>
    //     <h5>"אייל גולן - בלמךנכ"</h5>
    //     <p>3.3.2020</p>
    //     <p>"עראבייה.........."</p>
    //     <br/><a href="https://www.youtube.com/watch?v=NwDvbCkwGXo"><img src="https://i.ytimg.com/vi/NwDvbCkwGXo/default.jpg"></img></a>
    //     </div>

    // </div>
      )
    };

  export default Video