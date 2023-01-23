import React from 'react';
import VideoCard from './videoCard';
import Player from './player';


class VideoList extends React.Component{
        constructor(props){
            super(props);
            this.state = { video: [] };
        }
    play = (video) => {
         
        console.log('playavideo', video);
        this.setState({video:video});
        console.log('state',this.state.video)
    }
    render(){
        const vid=this.props.Videos;
        console.log('videolist',vid);
        const Videos=vid.map((video)=>{
             return <VideoCard  video={video} play={this.play} key={video.id.videoId}/>
        });
        return(
            <div style={{ display: 'flex' }}>
                 <Player videotoplay={this.state.video}/>
                 <div style={{ display: "flex", flexDirection: 'column', alignItems: 'end' }}>{Videos}</div>
            </div>
           
              );
           }
}
export default VideoList;