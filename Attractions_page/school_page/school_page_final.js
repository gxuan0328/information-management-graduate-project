import React, { Component } from 'react';

import {
    Text,
    View ,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Dimensions, TouchableOpacity,
} from 'react-native';

import school_1 from './image/school_1.png';
import school_2 from './image/school_2.png';
import school_3 from './image/school_3.png';
import school_4 from './image/school_4.png';
import school_5 from './image/school_5.png';
import school_6_1 from './image/school_6_1.png';
import school_6_2 from './image/school_6_2.png';
import school_7 from './image/school_7.png';
import school_8 from './image/school_8.png';
import school_9 from './image/school_9.png';
import school_10 from './image/school_10.png';
import school_11 from './image/school_11.png';

import AsyncStorage from '@react-native-async-storage/async-storage';

const {width:WIDTH}=Dimensions.get('window')


class school_page_final extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            imagepage:0,

            image:[
                school_1,
                school_2,
                school_3,
                school_4,
                school_5,
                school_6_1,
                school_6_2,
                school_7,
                school_8,
                school_9,
                school_10,
                school_11
            ]
          
        };}

        readValue= async (value) => {
            try {
              const jsonValue = await AsyncStorage.getItem(value)
              console.log("readValue",jsonValue)
        
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
                
                console.log("saving success")
            } catch (e) {
                console.log("saving error",e)
              
            }
          }

            
        Nextimage=()=>{
            GameMap_Finsh=this.readValue('GameMap_Finsh')

            this . timer =setTimeout (()=> { 
            if (this.state.imagepage==(this.state.image.length-1)){
                if(GameMap_Finsh?._W=='Finsh'){
                    this.storeData('Gift_state','get')
                    this.props.navigation.navigate('GameSuccessPassPage')
                }else{
                this.storeData('MainView_Finsh','Finsh')
                
                this.props.navigation.navigate('Game',{LocationNumber:this.props.route.params.LocationNumber,RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players})
                }
            } 
            this.setState({
                imagepage:(Number(this.state.imagepage)+1)
               }) 
            
            }, 100)
        }

    render(){

        return(
            <ImageBackground source={this.state.image[this.state.imagepage]} style={styles.backgroundContainer}>
               
                    <View style={styles.Header}>
                        <Image source={school_1} style={{opacity:0}}/>
                        <Image source={school_2} style={{opacity:0}}/>
                        <Image source={school_3} style={{opacity:0}}/>
                        <Image source={school_4} style={{opacity:0}}/>
                        <Image source={school_5} style={{opacity:0}}/>
                        <Image source={school_6_1} style={{opacity:0}}/>
                        <Image source={school_6_2} style={{opacity:0}}/>
                        <Image source={school_7} style={{opacity:0}}/>
                        <Image source={school_8} style={{opacity:0}}/>
                        <Image source={school_9} style={{opacity:0}}/>
                        <Image source={school_10} style={{opacity:0}}/>   
                    </View>

                      <View style={styles.main}>
                        <TouchableOpacity style={styles.Button} onPress={this.Nextimage}>
                            
                        </TouchableOpacity>
                       
                    </View>
                    

                
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    Header:{
        flex:37,
        
        //backgroundColor: '#f4a460',
        justifyContent:'center',
        alignItems:'center' , 
    },
    main:{
        flex:22,
        //backgroundColor:'red' ,
        
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
    Button:{
        flex:1,
        //backgroundColor: '#f4a460',
        width:WIDTH,
        // justifyContent:'center',
        // /*flexDirection:'row',*/
        // alignItems:'center' ,


    },
    // Dialog_box:{
        
    //     justifyContent:'center',
    //     alignItems:'center' ,
  
    // },
    Text:{  
        flex:1,
        textAlignVertical:'center',
        marginLeft:'3%',
        marginRight:'30.3%',
        color:'#424B54',
        fontSize: 20,
        fontWeight: 'bold',
        //backgroundColor:'red' ,
        

        
    },
    footer:{
        flex:1,
        //backgroundColor:'yellow' ,
        justifyContent:'center',
        alignItems:'center' , 
    },
    
})

export default school_page_final;
