import React, { Component } from 'react';

import {
    Text,
    View ,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Dimensions, TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BGImage from '../img/background.jpg';
import {styles} from '../styles/PhotoAlbum_styles'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
let imagedataVerify='';
let imagedata='';

const {width:WIDTH}=Dimensions.get('window')

class PhotoAlbum_1 extends Component{
    constructor(props){
        super(props);
        this.state={
            spacebutton:{
                left:20,
                top:30,
                width:WIDTH-50,   
                height:400,
                //backgroundColor:'green',
                zIndex:3,
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute',
            },
            response_uri:'https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/space.png?alt=media&token=3b604e99-f75a-4d0b-82ae-00f004f93f16',
            response_image:'https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/space.png?alt=media&token=3b604e99-f75a-4d0b-82ae-00f004f93f16',

        }}

        componentDidMount(){
       
          this.Enterphotocall()

        }
      

        Enterphotocall=()=>{

          imagedataVerify=this.readValue('response_uri_1')

         
          

          this . timer =setTimeout (()=> { 

          if (imagedataVerify?._W!==null){
              imagedata=imagedataVerify?._W
              this.setState({
                response_image:imagedata,
              })
          }else{
              imagedata=this.state.response_uri
              this.setState({
                response_image:imagedata,
              })
          }

           }, 100)
          
          
        }
        getAllKeys = async () => {
          let keys = []
          try {
            keys = await AsyncStorage.getAllKeys()
          } catch(e) {
            // read key error
          }
        
          // example console.log result:
          // ['@MyApp_user', '@MyApp_key']
        }
      clearAll = async () => {
          try {
            await AsyncStorage.clear()
          } catch(e) {
            // clear error
          }
        
        }

      readValue= async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('response_uri_1')

            return jsonValue != null ? JSON.parse(jsonValue) : null

          } catch(e) {
            console.log('error',e)
             
            }

        }
        storeData = async (key,value) => {
          try {
              key=key.toString() 
              value=JSON.stringify(value)
              await AsyncStorage.setItem(key,value)
              
          } catch (e) {
              console.log("saving error",e)
            
          }
        }

        useCamera=()=>{
            let response_uri=''
            let response_image=
            launchCamera({
                saveToPhotos:true,
                mediaType:'photo',
                includeBase64:false},
                (response) => {
                    try {
                      
                      this.setState({
                        response_uri:response.assets[0].uri,
                        response_image:response.assets[0].uri,
                      })
                      this.storeData('response_uri_1',response.assets[0].uri)
                     
                  } catch (e) {

                     console.log('拍照失敗')
                  }
                     
                })
                
                
                
                this.setState({
                    spacebutton:{
                    left:20,
                    top:30,
                    width:WIDTH-50,
                    height:400,
                    //backgroundColor:'green',
                    zIndex:1,
                    
                }})
                
                
               

        }
    render(){
        return(
            <ImageBackground source={BGImage} style={styles.backgroundContainer}>

            <View style={styles.Header}>
                
                   <Text style={styles.Text}>回憶錄</Text>
                
               
                   
            </View>


            <View style={styles.main}>
                        
                <View style={styles.photo}>
                    <Image style={styles.image} source={{uri:this.state.response_image}} /> 
                    
                    <Image style={styles.photo} source={require('../img/PhotoAblum1.png') } />
                    <TouchableOpacity  style={this.state.spacebutton}
                        onPress={this.useCamera} >
         
                    </TouchableOpacity>
                </View>  
            </View>

            <View style={styles.footer}>
                     {/* <View style={styles.back} >
                        <TouchableOpacity 
                          onPress={()=>{this.getAllKeys(),console.log('這裡面現在是this.state.response_image=',this.state.response_image)}}>
                            <Icon name="times-circle" size={45} color="red" />
                        </TouchableOpacity>
                    </View> */}
                    {/* <View style={styles.back} >
                        <TouchableOpacity 
                          onPress={()=>{this.readValue()}}>
                            <Icon name="times-circle" size={45} color="pink" />
                        </TouchableOpacity>
                    </View>  */}
                    <View style={styles.back} >
                      <TouchableOpacity >
                            <Icon name="arrow-left" size={45} color="black" />
                          </TouchableOpacity>
                    </View>
                    
                    <View style={styles.back} >
                          <TouchableOpacity 
                          onPress={()=>{this.props.navigation.navigate('MainView')}}>
                            <Icon name="times-circle" size={45} color="black" />
                          </TouchableOpacity>
                    </View>
                    

                    <View style={styles.back} >
                          <TouchableOpacity 
                          onPress={()=>{this.props.navigation.navigate('PhotoAlbum_2')}}>
                            <Icon name="arrow-right" size={45} color="black" />
                          </TouchableOpacity>
                    </View>
                     {/* <View style={styles.back} >
                        <TouchableOpacity 
                          onPress={()=>{this.clearAll()}}>
                            <Icon name="times-circle" size={45} color="blue" />
                        </TouchableOpacity>
                    </View>  */}



            </View>


            </ImageBackground>
        )}
}
export default PhotoAlbum_1;
