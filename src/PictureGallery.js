//import react lib and component var
import React, { Component } from 'react';


class PictureGallery extends Component{
    state = {
        photoWidth: 200,
        photoHeight: 200
    }
    render(){
        return (
            <div>
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`}/>
                <img src="https://picsum.photos/200/200"/>
                <img src="https://picsum.photos/200/200"/>
                <img src="https://picsum.photos/200/200"/>
            </div>
        );
    }
}

export default PictureGallery;