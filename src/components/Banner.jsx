import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchURL}) {
    /* console.log(fetchURL); */
    const [movie,setmovie] = useState()
    const base_url = 'https://image.tmdb.org/t/p/original/'

    const fetchData = async()=>{
        const {data} = await instance.get(fetchURL)
        // console.log(data.results);
        setmovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div height={'800px'} style={{width:"100%",height:"600px",backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:"cover",backgroundAttachment:"fixed"}}>
        <div className='bannerContent'>
            <h1>{movie?.name}</h1>
            <button type='button' style={{padding:'10px',backgroundColor:'red',borderRadius:'7px'}}>Play <i style={{background:'transparent'}} class="fa-solid fa-play"></i></button>
            <button type='button' style={{marginLeft:'5px',borderColor:'white', padding:'10px',backgroundColor:'transparent',borderRadius:'7px' }}>More info<i style={{background:'transparent',marginLeft:'5px'}} class="fa-solid fa-caret-down"></i></button>

            <h2>{movie?.overview}</h2>
        </div>

    </div>
  )
}

export default Banner