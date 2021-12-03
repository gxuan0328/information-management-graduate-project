import React, { Component } from 'react';

import {
    Text,
    View ,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Dimensions, TouchableOpacity,
    BackHandler,

} from 'react-native';
import  station_1_1 from './image/station_1_1.png';
import  station_1_2 from './image/station_1_2.png';
import  station_2_1 from './image/station_2_1.png';
import  station_2_2 from './image/station_2_2.png';
import  station_3 from './image/station_3.png';
import  station_4 from './image/station_4.png';
import  station_5 from './image/station_5.png';
import  station_6 from './image/station_6.png';
import  station_7 from './image/station_7.png';
import  station_8 from './image/station_8.png';
import  station_9 from './image/station_9_to_temple.png';

const {width:WIDTH}=Dimensions.get('window')
class station_page_final extends Component{

    
    

 
    constructor(props) {
        super(props);
        
        this.state = {
            imagepage:0,
            image:[
                station_1_1,
                station_1_2,
                station_2_1,
                station_2_2,
                station_3,
                station_4,
                station_5,
                station_6,
                station_7,
                station_8,
                station_9 
            ]
          
        };}

        Nextimage=()=>{
            if (this.state.imagepage==(this.state.image.length-1)){
                this.props.navigation.navigate('Game',{LocationNumber:this.props.route.params.LocationNumber,RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players})
            }
            this.setState({
                imagepage:(Number(this.state.imagepage)+1)
               })
        }
        
    render(){
        

        return(
            <ImageBackground source={this.state.image[this.state.imagepage]} style={styles.backgroundContainer}>
               
                    <View style={styles.Header}>
                        <Image source={station_1_1} style={{opacity:0}}/>
                        <Image source={station_1_2} style={{opacity:0}}/>
                        <Image source={station_2_1} style={{opacity:0}}/>
                        <Image source={station_2_2} style={{opacity:0}}/>
                        <Image source={station_3} style={{opacity:0}}/>
                        <Image source={station_4} style={{opacity:0}}/>
                        <Image source={station_5} style={{opacity:0}}/>
                        <Image source={station_6} style={{opacity:0}}/>
                        <Image source={station_7} style={{opacity:0}}/>
                        <Image source={station_8} style={{opacity:0}}/>
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

export default station_page_final;
