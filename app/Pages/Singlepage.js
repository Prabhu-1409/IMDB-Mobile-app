import {View,Text,Image, Dimensions, ImageBackground,ScrollView, Pressable, Linking} from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'




function Single({navigation,route}){
    const dim = Dimensions.get('window')
    const[genre,setgenre]= useState([])
    const {movie_id} = route.params
    const[singlemovie,setsinglemovie] = useState([])
    useEffect(()=>{
        axios.post(`https://imdb-mobile-app-4.onrender.com/movie/${movie_id}`).then((res)=>{
            console.log(res.data)
            setsinglemovie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <SafeAreaView style={{backgroundColor:'black',height:dim.height,width:dim.width}}>
            <View style={{flexDirection:'column',flex:1,position:'relative'}}>
                <View style={{height:200,width:dim.width,backgroundColor:'black',flex:1.5}}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w400${singlemovie.backdrop_path}`}} resizeMode='cover' height={'100%'} width={dim.width}></Image>
                </View>
                <View style={{position:'absolute',display:'flex',flexDirection:'row',columnGap:10,width:dim.width,height:'auto',marginTop:'40%',marginLeft:'10%',marginRight:'10%'}}>
                    <View style={{height:200,width:150,backgroundColor:'black'}}>
                        <Image source={{uri:`https://image.tmdb.org/t/p/w400${singlemovie.poster_path}`}} resizeMode='cover' height={'100%'}></Image>
                    </View>
                    <View style={{height:200,width:150,justifyContent:'flex-end',paddingBottom:30,rowGap:5}}>
                         <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>{singlemovie.original_title}</Text>
                         <Text style={{color:'grey',fontSize:12}}>Language: {singlemovie.original_language}</Text>
                         <Text style={{color:'grey',fontSize:12}}>Runtime: {singlemovie.runtime}</Text>
                         <Text style={{color:'grey',fontSize:12}}>Release Date: {singlemovie.release_date}</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                </View>
                <View style={{backgroundColor:'black',height:100,width:dim.width,flex:3,marginBottom:20,paddingBottom:10}}>
                    <ScrollView>
                        <View style={{padding:20,rowGap:2}}>
                            <Text  style={{color:'grey'}}>Overview</Text>
                            <Text style={{textAlign:'justify',color:'white'}}>{singlemovie.overview}</Text>
                        </View>
                        <View style={{paddingLeft:20,paddingRight:20}}>
                        <Text style={{color:'white'}}>Production Companies:</Text>
                        <ScrollView horizontal={true} style={{paddingTop:10,display:'flex',flexDirection:'row'}}>
                            {singlemovie.production_companies && singlemovie.production_companies.map((item,i)=>{
                                return <>
                                    <View style={{marginLeft:20,alignItems:'center'}}>
                                        <Image source={{uri:`https://image.tmdb.org/t/p/w400${item.logo_path}`}} style={{}} resizeMode='contain' height={40} width={80} alt='logo'></Image>
                                        <Text style={{color:'grey'}}>{item.name}</Text>
                                    </View>
                                </>
                            })}
                        </ScrollView>
                        </View>
                        <View style={{padding:20}}>
                        <Text style={{color:'grey'}}>Genres</Text>
                        <View style={{display:'flex',flexDirection:'row',columnGap:10,paddingTop:10}}>
                            {singlemovie.genres && singlemovie.genres.map((item,i)=>{
                                return <>
                                    <View style={{height:'auto',width:'auto',backgroundColor:'grey',borderRadius:30}}>
                                        <Text style={{padding:5,color:'white'}}>{item.name}</Text>
                                    </View>
                                </>
                            })}
                        </View>
                        </View>
                        <View style={{paddingLeft:20,display:'flex',flexDirection:'column',rowGap:20,paddingRight:20}}>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:20}}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                            <Text style={{color:'grey'}}>Tagline:</Text><Text style={{color:'white',width:'50%'}}> {singlemovie.tagline==''? "Null": singlemovie.tagline}</Text>
                            </View>
                            <View style={{display:'flex',flexDirection:'row'}}>
                            <Text style={{color:'grey'}}>Budget:</Text><Text style={{color:'white'}}> {singlemovie.budget}</Text>
                            </View>
                            </View>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:20}}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                            <Text style={{color:'grey'}}>Revenue:</Text><Text style={{color:'white'}}> {singlemovie.revenue}</Text>
                            </View>
                            <View style={{display:'flex',flexDirection:'row'}}>
                            <Text style={{color:'grey'}}>Status:</Text><Text style={{color:'white'}}> {singlemovie.status}</Text>
                            </View>
                            </View>
                            <View>
                            <Text style={{color:'grey'}}>Spoken Languages</Text>
                            <View style={{display:'flex',flexDirection:'row',columnGap:10,paddingTop:10}}>
                                {singlemovie.spoken_languages && singlemovie.spoken_languages.map((item,i)=>{
                                    return <>
                                        <View style={{height:'auto',width:'auto',backgroundColor:'grey',borderRadius:30}}>
                                            <Text style={{padding:5,color:'white'}}>{item.name}</Text>
                                        </View>
                                    </>
                                })}
                            </View>
                            </View>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:20}}>
                            <View style={{display:'flex',flexDirection:'row'}} >
                            <Text style={{color:'grey'}}>Popularity:</Text><Text style={{color:'white'}}> {singlemovie.popularity}</Text>
                            </View>
                            <View style={{display:'flex',flexDirection:'row'}} >
                            <Text style={{color:'grey'}}>Vote Average</Text><Text style={{color:'white'}}> {singlemovie.vote_average}</Text>
                            </View>
                            </View>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:20}}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                            <Text style={{color:'grey'}}>Vote Count:</Text><Text style={{color:'white'}}> {singlemovie.vote_count}</Text>
                            </View>
                            <Pressable onPress={()=>{
                            Linking.openURL(singlemovie.homepage)
                        }}>
                            <Text style={{color:'grey'}}> See more</Text>
                        </Pressable>
                        </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Single