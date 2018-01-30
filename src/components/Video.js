import React from 'react';
import '../css/video.css';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'video': 'http://alexcassell.com/videos/sunset-smaller.mp4'};
    }



render() {
    return (
        <video className="background-video" loop autoPlay>
            <source src={this.state.video} type="video/mp4" />
            <source src={this.state.video} type="video/ogg" />
            Your will need to upgrade your video to see the video tag.
        </video>
    );
}
}

export default Video;

