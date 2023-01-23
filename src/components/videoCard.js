import './ListDesign.css';
import React from 'react'; 


const VideoCard =(props)=>{
        console.log('type', typeof (props.video.snippet.description))
return (
        <div className="side-list" onClick={() => props.play(props.video)}>
        <div  ><img alt=" "  src={props.video.snippet.thumbnails.default.url} /></div>
            
        <div style={{marginLeft:'15px'}}>{props.video.snippet.description}</div>
        </div>
       );
}

export default VideoCard;
