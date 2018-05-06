import React, { Component } from "react";
import API from "../../utils/API";

class Fileuploader extends Component {

    state = {
        file: null
    };

    getSignedRequest = (file) => {
        const xhr = new XMLHttpRequest();
        const test = xhr.open('GET', `/api/goals/uploads/${file.name}`);
        console.log(test);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    const response = xhr.responseText;

                    //console.log(response);
                    //this.uploadFile(file, response.signedRequest, response.url);
                } else {
                    alert("Could not get signed URL.");
                }
            }
        };
        xhr.send();
    }

    uploadFile = (file, signedRequest, url) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log("Connected");
                    console.log(url);
                } else {
                    alert("Could not upload file.");
                }
            }
        };
        xhr.send(file);
    }

    uploadHandler = event => {
        event.preventDefault();
        this.getSignedRequest(this.state.file);
        // let formData = new FormData();
        // formData.append("image", this.state.file);
        // API.fileUpload(this.state.file);

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