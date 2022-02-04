import React from "react";

function PhotoAlbum() {
    function genBlocks(n) {
        let result = []
        for(let i = 0; i < n; i++) {
            result.push(<div class = "grey-block">Photo</div>)
        }
        return result;
    }
    return <div class = "buffer">
        <h1>Photo Album</h1>
        <div class = "photo-container">
               {genBlocks(50)} 

        </div>
    </div>
    
}


export default PhotoAlbum;