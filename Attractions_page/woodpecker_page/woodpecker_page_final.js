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

import woodpecker_1 from'./image/woodpecker_1.png';
import woodpecker_2 from'./image/woodpecker_2.png';
import woodpecker_3 from'./image/woodpecker_3.png';
import woodpecker_4_1 from'./image/woodpecker_4_1.png';
import woodpecker_4_2 from'./image/woodpecker_4_2.png';
import woodpecker_4_3 from'./image/woodpecker_4_3.png';
import woodpecker_5 from'./image/woodpecker_5.png';
import woodpecker_6_1 from'./image/woodpecker_6_1.png';
import woodpecker_6_2 from'./image/woodpecker_6_2.png';
import woodpecker_7 from'./image/woodpecker_7.png';
import woodpecker_8 from'./image/woodpecker_8_to_school.png';

const {width:WIDTH}=Dimensions.get('window')
class woodpecker_page_final extends Component{


    
    constructor(props) {
        super(props);
    
        this.state = {
            imagepage:0,
            image:[
                woodpecker_1,
                woodpecker_2,
                woodpecker_3,
                woodpecker_4_1,
                woodpecker_4_2,
                woodpecker_4_3,
                woodpecker_5,
                woodpecker_6_1,
                woodpecker_6_2,
                woodpecker_7,
                woodpecker_8

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
                        <Image source={woodpecker_1} style={{opacity:0}}/>
                        <Image source={woodpecker_2} style={{opacity:0}}/>
                        <Image source={woodpecker_3} style={{opacity:0}}/>
                        <Image source={woodpecker_4_1} style={{opacity:0}}/>
                        <Image source={woodpecker_4_2} style={{opacity:0}}/>
                        <Image source={woodpecker_4_3} style={{opacity:0}}/>
                        <Image source={woodpecker_5} style={{opacity:0}}/>
                        <Image source={woodpecker_6_1} style={{opacity:0}}/>
                        <Image source={woodpecker_6_2} style={{opacity:0}}/>
                        <Image source={woodpecker_7} style={{opacity:0}}/>
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

export default woodpecker_page_final;


