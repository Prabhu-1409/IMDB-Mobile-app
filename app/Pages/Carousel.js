import { useState,useEffect } from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import axios  from "axios";




function Carouseldata(){
    const[slider,setslider] = useState()
    useEffect(()=>{
        axios.get('http://10.0.2.2:3001/').then((info)=>{
            console.log(info.data)
            setslider(info.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <Carousel >

        </Carousel>
    )
}


export default Carouseldata