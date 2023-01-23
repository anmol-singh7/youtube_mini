import React from 'react';


const Player =(props)=>{
    if (props.videotoplay.length === 0){
        return <div style={Styles} ><img alt='youtube logo' height='20%' width='17%' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png' /> </div>

    }
       console.log('vidtoplay',props)
        return(
                        <div>
                            <div className="ui embed">
                    <iframe src={`https://www.youtube.com/embed/${props.videotoplay.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        </div>
                        <div className="ui segment">
                            <h4 className="ui header">{props.videotoplay.snippet.title}</h4>
                            <p>{props.videotoplay.snippet.description}</p>
                        </div>
                     </div>
        );
}

const Styles = {
   
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '75vh', 
        width: '67vw', 
        margin: '5px', 
        marginLeft: '15px',
        border: '1px solid grey', 
        backgroundColor: 'black' 
 }

export default Player;
