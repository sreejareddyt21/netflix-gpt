import React from 'react'
import {useEffect,useState} from "react";
import {API_OPTIONS} from "../utils/constants";

const VideoBackground = ({movieId}) => {
  const [trailerId, setTrailerId]=useState(null);
  const getMovieVideos=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
    const json=await data.json();
    const filterData=json.results.filter(video => video.type==="Trailer")
    const trailer=filterData.length? filterData[0]: json.results[0]
    setTrailerId(trailer.key)
  }
  useEffect(()=>{
    getMovieVideos();

  },[])
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
       
       src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      
    </div>
  )
}

export default VideoBackground

