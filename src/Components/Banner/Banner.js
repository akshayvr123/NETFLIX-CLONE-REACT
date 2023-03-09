import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { API_KEY,imageUrl } from '../../Constants/constant'
import "./Banner.css"
import axios from "../../axios"
function Banner() {
  const[movie,setMovie]=useState()
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[2])
    setMovie(response.data.results[Math.floor(Math.random()*15)])
   })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path: ""  } )` }} className='banner'>
         <div className='content'>
         <h1 className='title'>{movie ? movie.name ? movie.name:movie.title :""}</h1>
         <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
         </div>
            <h1 className='Description'>{movie ? movie.overview : ""}</h1>
         </div>
         <div className='fade-bottom'>
            
         </div>
    </div>
  )
}

export default Banner
//22 min watched