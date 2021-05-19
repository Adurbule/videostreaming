import React from 'react'
import queryString from 'query-string'
import { useLocation, useParams } from 'react-router-dom';
function Player(props){
    let location = useLocation();
    let QueryParams = queryString.parse(location.search)

    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-12"> 
                <video controls muted autoPlay width="1000">
                    <source src={`http://localhost:5000/api/playvideo?filename=${QueryParams.filename}`} type="video/mp4"></source>
                </video>
                <h1 className="text-center">{QueryParams.filename}</h1>
            </div>
            
            
            </div>
        </div>
    )
}
export default Player