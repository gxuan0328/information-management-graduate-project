import { scan1 } from 'prelude-ls';
import React,{Component} from 'react';
import {Image, Text, StyleSheet, View, ImageBackground,Dimensions,          TouchableOpacity
            } from 'react-native';
import BGImage from '../img/background.jpg';
import Map from '../img/small_map.jpg' 
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width:WIDTH}=Dimensions.get('window')
 class SmallMap extends Component{
	render(){
		return(
           
                <ImageBackground source={BGImage} style={styles.background}>

                    <View style={styles.Header}>
                        <View style={styles.titlespace2}> 
                        
                        </View>
                        <View style={styles.titlespace1}>
                             <Text style={styles.text}>地圖</Text> 
                        </View>  
                        <View style={styles.titlespace2}>
                        
                        </View>
                    </View>
                    
                    
                    <View style={styles.main}>
                    <ImageZoom panToMove={true}  pinchToZoom={true}
                        cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height}
                        imageWidth={600}
                        imageHeight={800}
                       >
                        <Image source={Map} style={styles.images}/>
                    </ImageZoom>
                    </View>
                    
                    <View style={styles.footer}>
                        <View style={styles.back} >
                          <TouchableOpacity 
                          onPress={()=>{ this.props.navigation.navigate('MainView')}}>
                            <Icon name="times-circle" size={45} color="black" />
                          </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
                
                
                
           
            
			
		);
	}
}

const styles = StyleSheet.create({
    
    Header:{
        flex:12,
        //backgroundColor:'blue' ,
        justifyContent:'center',
        alignItems:'center' , 
    },
    main:{
        flex:15,
        justifyContent:'center',
        alignItems:'center' , 
        //backgroundColor:'blue' ,
    },
    footer:{
        flex:5,
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center' , 
     
    },
    images:{
        top:150,
        left:100,
        width:400,
        height:400, 
        resizeMode:'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize:45,
        textAlign:'center',
        textAlignVertical:'top',
        justifyContent:'center',
        alignItems:'center' , 

    },
    bg:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background:{
        flex:1,
    },
    back:{
    },	
    titlespace1:{
        flex:2,
        
    },
    titlespace2:{
        flex:1,
        
    }
})
export default SmallMap;