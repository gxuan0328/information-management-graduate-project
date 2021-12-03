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

import police_1 from './image/police_1.png';
import police_2_1 from './image/police_2_1.png';
import police_2_2 from './image/police_2_2.png';
import police_2_3 from './image/police_2_3.png';
import police_3 from './image/police_3.png';
import police_4 from './image/police_4.png';
import police_5 from './image/police_5.png';
import police_6_1 from './image/police_6_1.png';
import police_6_2 from './image/police_6_2.png';
import police_7 from './image/police_7.png';
import police_8 from './image/police_8_to_woodpecker.png';

const {width:WIDTH}=Dimensions.get('window')
class police_page_final extends Component{
    


    constructor(props) {
        super(props);
        
        this.state = {
            imagepage:0,
            image:[
            police_1,
            police_2_1,
            police_2_2, 
            police_2_3,
            police_3,
            police_4,
            police_5,
            police_6_1,
            police_6_2,
            police_7,
            police_8]
          
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
                        <Image source={police_1} style={{opacity:0}}/>
                        <Image source={police_2_1} style={{opacity:0}}/>
                        <Image source={police_2_2} style={{opacity:0}}/>
                        <Image source={police_2_3} style={{opacity:0}}/>
                        <Image source={police_3} style={{opacity:0}}/>
                        <Image source={police_4} style={{opacity:0}}/>
                        <Image source={police_5} style={{opacity:0}}/>
                        <Image source={police_6_1} style={{opacity:0}}/>
                        <Image source={police_6_2} style={{opacity:0}}/>
                        <Image source={police_7} style={{opacity:0}}/>

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
        // backgroundColor: 'red',
        width:WIDTH,
        // justifyContent:'center',
        // /*flexDirection:'row',*/
        // alignItems:'center' ,


    },
    footer:{
        flex:1,
        backgroundColor:'yellow' ,
        // justifyContent:'center',
        // alignItems:'center' , 
    },
    
})

export default police_page_final;
