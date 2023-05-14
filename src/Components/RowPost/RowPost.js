import React from 'react'
import Youtube from "react-youtube"
import "./RowPost.css"
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../Constants/constant'
function RowPost(props) {
  console.log(props)
  const [movies,setMovies]=useState([])
  const [Urlid,setUrlId]=useState('')
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
       // console.log(response.data.results)
        setMovies(response.data.results)
      }).catch(err=>{
       // alert("Network error")
      })
  },[])
    // console.log(movies)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, 
    },
  };


  const handleMovie=(id)=>{
          console.log(id)
        
         axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
          }else{
            console.log("array empty")
          }
         })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
       
        {movies.map((obj)=>{
            return(
            <div >
            <img  onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            <h2  onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall ? "Movie_name" : "Movie_title_large"}>{obj.name || obj.title}</h2>
           
            
            </div>
            ) }
           
        )}
      </div>
     
      { Urlid &&  < Youtube opts={opts} videoId={Urlid.key}/>}
     
    </div>
  )
}

export default RowPost


