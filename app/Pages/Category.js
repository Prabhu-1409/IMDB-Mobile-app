import {View,Text, Dimensions,ScrollView,Pressable,Image} from  'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import axios from 'axios'




function Category({navigation,route}){
    const {name} = route.params
    const [page,setpage] = useState(1)
    const[category_data,setcategory_data] = useState()
    const dim = Dimensions.get('screen')
    useEffect(()=>{
        axios.post(`https://imdb-mobile-app-4.onrender.com/list/${name}/${page}`).then((received)=>{
            setcategory_data(received.data.results)
            console.log(received.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[page])
    return(
        <SafeAreaView style={{height:dim.height,backgroundColor:'black',flex:1}}>
            <View style={{backgroundColor:'black',flex:1}}>{name==='tv'? <Text style={{color:'white',fontSize:30,padding:10}}>TV Shows</Text>: <Text style={{color:'white',fontSize:30,padding:10}}>Movies</Text>}</View>
            <View style={{backgroundColor:'black',flex:12,width:dim.width}}>
                <ScrollView style={{paddingBottom:20}}>
                <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',columnGap:10,rowGap:20,justifyContent:'center',alignItems:'flex-start'}}>
                {category_data && category_data.map((item,i)=>{
                return<>
                    <Pressable key={item.id} style={{height:'auto',width:'auto',borderRadius:0,backgroundColor:'black'}} onPress={()=>{
                        axios.post(`http://10.0.2.2:3001/movie/${item.id}`)
                        navigation.navigate('single',{
                            movie_id:item.id
                        })
                    }}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w400${item.poster_path}`}} resizeMode='stretch' style={{height:150,width:110,borderRadius:0}}></Image>
                    </Pressable>
                </>
            })}
            </View>
            <View style={{display:'flex',flexDirection:'row',width:'100%',backgroundColor:'black',justifyContent:'center'}}>
            {page===1? <>
            </>:<Pressable style={{paddingLeft:20,paddingRight:20,paddingTop:20}} onPress={()=>{
                setpage(page-1)
            }}>
                <Text style={{color:'white'}}>Prev</Text>
            </Pressable>
            }{page===500?<></>:
            <Pressable style={{padding:20,paddingRight:20,paddingTop:20}} onPress={()=>{
                setpage(page+1)
            }}>
                <Text style={{color:'white'}}>Next</Text>
            </Pressable>
            }
            </View>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Category