import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from "axios"

function Videos() {
    let apiUrl = "http://localhost:5000/api/allassets";
    var [videos, setVideoList] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: apiUrl
        }).then((response) => {
            // console.log(response.data.videos)
            setVideoList(response.data.videos)
        }, (error) => {
            console.log("Error videos >>> ".error);
        })
    }, [])
    var videoDoc = {
        marginBottom: "20px"
    }
    return (
       
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h2 style={{"marginTop":"10px","marginBottom":"20px"}}>
                        <u><i>Trending Now :Top Shows</i></u>
                    </h2>
                </div>
                {videos.map((videoName, index) =>
                    <div className="col-md-3" key={index} style={videoDoc}>
                        <Link to={`/playvideo?filename=${videoName}`}>
                            <video width="400"
                               
                                controls preload="metadata">
                                <source src={`http://localhost:5000/${videoName}`}
                                    type="video/mp4" />
                            </video>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Videos