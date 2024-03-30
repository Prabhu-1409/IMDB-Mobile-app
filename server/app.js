const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
  origin:'http://localhost:3000',
  methods:['GET','POST']
}))
const port = process.env.port || 3001

const options = {
  url : 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
  }
};





app.get('/',async(req,res)=>{
    try{
       await axios.request(options).then((da)=>{
          //console.log(da.data.results)
          res.send(da.data.results)
       })
    }catch(err){
      console.log(err)
    }
})

app.post('/movie/:id',async(req,res)=>{
   console.log(req.params.id)
   const movie_id = req.params.id
   try{
     await axios.request({
        url:`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
        method:'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
        }
      }).then((movie)=>{
        //console.log(movie.data)
        //console.log(movie.data)
        res.send(movie.data)
      })
   }catch(err){
    //console.log(err)
   }
})

app.get('/top_rated',async (req,res)=>{
  try{
    await axios.request({
      url:`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      method:'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
      }
    }).then((top)=>{
      //console.log(top.data)
      res.send(top.data)
    })
  }catch(err){
    console.log(err)
  }
})

app.get('/upcoming',async(req,res)=>{
  try{
    await axios.request({
      url:`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      method:'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
      }
    }).then((se)=>{
      res.send(se.data)
    })
  }catch(err){
    console.log(err)
  }
})

app.get('/now_playing',async (req,res)=>{
  try{
    await axios.request({
      url:`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
      method:'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
      }
    }).then((se)=>{
      res.send(se.data)
    })
  }catch(err){
    console.log(err)
  }
})

app.post('/list/:name/:page',async(req,res)=>{
  const name = req.params.name
  const page = req.params.page
  try{
    await axios.request({
      url:`https://api.themoviedb.org/3/discover/${name}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      method:'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
      }
    }).then((se)=>{
      console.log(se.data)
      res.send(se.data)
    })
  }catch(err){
    console.log(err)
  }
})

app.get('/top_rated_tv',async(req,res)=>{
  try{
       await axios.request({
        url:`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
        method:'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWE4MDUzNTM3MzU5MWQ5OTgyN2U4MjFhMjQ1YjhhNiIsInN1YiI6IjY2MDMwMTAyMTk3ZGU0MDE0OTE2MGVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0epmKlIpyfgSCWTG5UK2w866ZPiseA6HwSXKkVVgj0'
        }
      }).then((se)=>{
        console.log(se.data)
        res.send(se.data)
      })
  }catch(err){
    console.log(err)
  }
})

app.listen(port,(req,res)=>{
    console.log("Listening")
})