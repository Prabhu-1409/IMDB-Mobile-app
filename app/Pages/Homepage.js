import {View,Text, Dimensions, StatusBar,Image, ScrollView, Pressable, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Carouseldata from './Carousel'
import menu from '../images/menu.png'
import cancel from '../images/cancel.png'


function Home({navigation}){
    const dim = Dimensions.get('screen')
    const[movies,setmovies] = useState()
    const [upcoming,setupcoming]=useState()
    const[now_playing,setnowplaying] = useState()
    const [topratedtv,settopratedtv] = useState()
    const [navigationbar,setnavigation]= useState(false)
    const [top,settop]= useState()
    useEffect(()=>{
        axios.get('https://imdb-mobile-app-4.onrender.com/').then((info)=>{
            //console.log(info.data)
            setmovies(info.data)
        }).catch((err)=>{
            console.log(err)
        })
        axios.get('https://imdb-mobile-app-4.onrender.com/top_rated').then((info)=>{
            settop(info.data.results)
        }).catch((err)=>{
            console.log(err)
        })
        axios.get('https://imdb-mobile-app-4.onrender.com/upcoming').then((info)=>{
            setupcoming(info.data.results)
        }).catch((err)=>{
            console.log(err)
        })
        axios.get('https://imdb-mobile-app-4.onrender.com/now_playing').then((info)=>{
            setnowplaying(info.data.results)
        }).catch((err)=>{
            console.log(err)
        })
        axios.get('https://imdb-mobile-app-4.onrender.com/top_rated_tv').then((info)=>{
            settopratedtv(info.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <SafeAreaView style={{backgroundColor:'black',height:dim.height,width:dim.width,position:'relative'}}>
        <View style={{height:'5%',width:dim.width,backgroundColor:'black'}}>
            <View style={{display:'flex',flexDirection:'row',height:'100%',flex:1}}>
                <View style={{height:'100%',width:30,backgroundColor:'black',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Pressable onPress={()=>{
                        setnavigation(true)
                    }}>
                        <Image source={menu} resizeMode='cover' width={'100%'} height={300}></Image>
                    </Pressable>
                </View>
                <Pressable style={{height:'100%',flex:7,justifyContent:'flex-start',paddingLeft:20,paddingTop:5}} onPress={()=>{
                    setnavigation(false)
                }}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Movies & TV shows</Text>
                </Pressable>
            </View>
        </View>
        <Pressable onPress={()=>{
            setnavigation(false)
        }}>
        <ScrollView style={{height:dim.height, backgroundColor:'black',width:dim.width,position:'relative'}}>
        <View style={{paddingBottom:40}}>
        <View style={{backgroundColor:'black',height:250,padding:10,display:'flex',flexDirection:'column',rowGap:10,position:'relative'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Now Playing</Text>
            <ScrollView horizontal={true} style={{height:'100%'}}>
            {now_playing && now_playing.map((item,i)=>{
                return<>
                    <Pressable key={item.id} style={{height:'100%',width:'auto',marginLeft:20,borderRadius:0,backgroundColor:'black'}} onPress={()=>{
                        axios.post(`http://10.0.2.2:3001/movie/${item.id}`)
                        navigation.navigate('single',{
                            movie_id:item.id
                        })
                    }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w200${item.poster_path}`}} resizeMode='stretch' style={{height:'100%',width:'100%',padding:60,borderRadius:0}}></Image>
                    </Pressable>
                </>
            })}</ScrollView>
            </View>
        <View style={{backgroundColor:'black',height:250,padding:10,display:'flex',flexDirection:'column',rowGap:10,position:'relative'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Popular</Text>
            <ScrollView horizontal={true} style={{height:'100%'}}>
            {movies && movies.map((item,i)=>{
                return<>
                    <Pressable key={item.id} style={{height:'100%',width:'auto',marginLeft:20,borderRadius:0,backgroundColor:'black'}} onPress={()=>{
                        axios.post(`http://10.0.2.2:3001/movie/${item.id}`)
                        navigation.navigate('single',{
                            movie_id:item.id
                        })
                    }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w200${item.poster_path}`}} resizeMode='stretch' style={{height:'100%',width:'100%',padding:60,borderRadius:0}}></Image>
                    </Pressable>
                </>
            })}</ScrollView>
            </View>
            <View style={{backgroundColor:'black',height:250,padding:10,display:'flex',flexDirection:'column',rowGap:10,position:'relative'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Top Rated</Text>
            <ScrollView horizontal={true} style={{height:'100%'}}>
            {top && top.map((item,i)=>{
                return<>
                    <Pressable key={item.id} style={{height:'100%',width:'auto',marginLeft:20,borderRadius:0,backgroundColor:'black'}} onPress={()=>{
                        axios.post(`http://10.0.2.2:3001/movie/${item.id}`)
                        navigation.navigate('single',{
                            movie_id:item.id
                        })
                    }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w200${item.poster_path}`}} resizeMode='stretch' style={{height:'100%',width:'100%',padding:60,borderRadius:0}}></Image>
                    </Pressable>
                </>
            })}</ScrollView>
            </View>
            <View style={{backgroundColor:'black',height:250,padding:10,display:'flex',flexDirection:'column',rowGap:10,position:'relative'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Top Rated TV Shows</Text>
            <ScrollView horizontal={true} style={{height:'100%'}}>
            {topratedtv && topratedtv.map((item,i)=>{
                return<>
                    <Pressable key={item.id} style={{height:'100%',width:'auto',marginLeft:20,borderRadius:0,backgroundColor:'black'}} onPress={()=>{
                        axios.post(`http://10.0.2.2:3001/movie/${item.id}`)
                        navigation.navigate('single',{
                            movie_id:item.id
                        })
                    }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w200${item.poster_path}`}} resizeMode='stretch' style={{height:'100%',width:'100%',padding:60,borderRadius:0}}></Image>
                    </Pressable>
                </>
            })}</ScrollView>
            </View>
            <View style={{backgroundColor:'black',height:250,padding:10,display:'flex',flexDirection:'column',rowGap:10,position:'relative'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>UpComing</Text>
            <ScrollView horizontal={true} style={{height:'100%'}}>
            {upcoming && upcoming.map((item,i)=>{
                return<>
                    <Pressable key={item.id} style={{height:'100%',width:'auto',marginLeft:20,borderRadius:0,backgroundColor:'black'}} onPress={()=>{
                        axios.post(`http://10.0.2.2:3001/movie/${item.id}`)
                        navigation.navigate('single',{
                            movie_id:item.id
                        })
                    }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w200${item.poster_path}`}} resizeMode='stretch' style={{height:'100%',width:'100%',padding:60,borderRadius:0}}></Image>
                    </Pressable>
                </>
            })}</ScrollView>
            </View>
            </View>
        </ScrollView>
        </Pressable>{
            navigationbar?<View style={{height:'100%',position:'absolute',width:'50%',backgroundColor:'black',flex:1}}>
            <View style={{height:'5%',width:'100%',backgroundColor:'black',justifyContent:'space-between',alignItems:'center',paddingStart:10,flex:1,display:'flex',flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Explore</Text>
                <Pressable onPress={()=>{
                    setnavigation(false)
                }}>
                <Image source={cancel} resizeMode='contain' height={40} style={{padding:7,margin:22,justifyContent:'center'}}></Image>
                </Pressable>
            </View>
            <View style={{width:'100%',backgroundColor:'black',flex:15,display:'flex',flexDirection:'column',rowGap:20,paddingLeft:10}}>
                <Pressable onPress={()=>{
                    setnavigation(false)
                    navigation.navigate('category',{
                        name:"movie"
                    })
                }}>
                <Text style={{padding:10,fontSize:15,color:'white'}}>Movies</Text>
                </Pressable>
                <Pressable onPress={()=>{
                    setnavigation(false)
                    navigation.navigate('category',{
                        name:"tv"
                    })
                }}>
                <Text style={{padding:10,fontSize:15,color:'white'}}>TV Shows</Text>
                </Pressable>
                <Text style={{padding:10,fontSize:15,color:'white'}}>Series (Under Development)</Text>
            </View>
        </View>:
        <></>
        }
        </SafeAreaView>
    )
}

export default Home