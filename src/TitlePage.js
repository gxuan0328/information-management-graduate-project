import React, { Component } from 'react';
import {
    Text,
    View ,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,TouchableOpacity
} from 'react-native';
import Icon from '../img/logo.png'
import BGImage from '../img/Backgroundimage.jpg'
//放背景圖片
const{height:HEIGHT}=Dimensions.get('window')
const {width:WIDTH}=Dimensions.get('window')
export default class Example extends Component{
    render(){
        return(
            <ImageBackground source={BGImage} style={style.backgroundContainer}>

             <View style={style.Header}>
            </View>

            <View style={style.main}>

                <Image Icon source={Icon} style={style.IconDesign}>
                </Image>
    
                <View>
                <TouchableOpacity style={style.Button}>
                    <Text style={style.ButtonText} >Start</Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style={style.footer}>

            </View>


            </ImageBackground>
        )}
}

const style = StyleSheet.create({
    Header:{
        flex:1,
        backgroundColor:'blue' ,
        justifyContent:'center',
        alignItems:'center' , 
    },
    main:{
        flex:5,
        justifyContent:'center',
        alignItems:'center' , 
    },
    footer:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center' , 
     
    },
    /** 手機頁面切三等份1:5:1分成Header,main,footer*/
    /** 把按鈕輸入框等元件都放在main中 */


    backgroundContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center' ,   
    },
    //放背景圖片
    IconDesign:{

        marginTop:0,
        width: WIDTH - 100,
        height:250,
        justifyContent:'center',
        
    },

    Button:{
   
        width: WIDTH - 250,
        marginTop:150,
        borderRadius:15,
        height:60,
        backgroundColor: '#98DFAF',
        justifyContent:'center',
        alignItems:'center' ,
  
    },
     /* 按鈕樣式*/
    ButtonText:{
        fontSize:30,
        color:"#224378",

    },
    /* 按鈕文字樣式*/

})