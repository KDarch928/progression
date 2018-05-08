import React, { Component } from "react";
import API from "../../utils/API";

class Fileuploader extends Component {

    state = {
        file: null
    };
    
    uploadHandler = event => {
        event.preventDefault();
        // this.getSignedRequest(this.state.file);
        API.fileUpload(this.state.file);

    };
    
    fileChangeHandler = event => {
        this.setState({file:event.target.files[0]})
    };

    render() {
        return (
            <form>
                <input type="file" onChange={this.fileChangeHandler} />
                <button type="submit" onClick={this.uploadHandler}>Upload</button>
            </form>
        );
    }
}

export default Fileuploader;