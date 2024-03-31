import {Dimensions, SafeAreaView, Text,Image, Pressable, View, ImageBackground} from 'react-native'
import start from '../images/start.jpg'


function Start({navigation}){
    const dim = Dimensions.get('window')
    return(
        <SafeAreaView>
            <ImageBackground source={start} resizeMode='cover' style={{height:dim.height,width:dim.width,justifyContent:'center',alignItems:'center'}} blurRadius={2.5}>
            <View style={{display:'flex',flexDirection:'column',rowGap:20,alignItems:'center',width:'80%'}}>
                <Text style={{color:'white',fontSize:30,fontWeight:'bold', textAlign:'center'}}>Explore Movies & TV Shows</Text>
                <Pressable style={{height:70,width:150,backgroundColor:'white',justifyContent:'center',alignItems:'center',elevation:10,borderRadius:30}} onPress={()=>{
                    navigation.navigate('home')
                }}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Get Started</Text>
                </Pressable>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


export default Start