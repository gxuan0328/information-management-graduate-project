import React, { Component } from 'react';
import {
    View ,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, TouchableOpacity,
} from 'react-native';
import  temple_1 from './image/temple_1.png';
import  temple_2 from './image/temple_2.png';
import  temple_3 from './image/temple_3.png';
import  temple_4 from './image/temple_4.png';
import  temple_5 from './image/temple_5.png';
import  temple_6 from './image/temple_6.png';
import  temple_7 from './image/temple_7.png';
import  temple_8 from './image/temple_8_to_police.png';

const {width:WIDTH}=Dimensions.get('window')
class temple_page_final extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            imagepage:0,

            image:[
                temple_1,
                temple_2,
                temple_3,
                temple_4,
                temple_5,
                temple_6,
                temple_7,
                temple_8
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
                        <Image source={temple_1} style={{opacity:0}}/>
                        <Image source={temple_2} style={{opacity:0}}/>
                        <Image source={temple_3} style={{opacity:0}}/>
                        <Image source={temple_4} style={{opacity:0}}/>
                        <Image source={temple_5} style={{opacity:0}}/>
                        <Image source={temple_6} style={{opacity:0}}/>
                        <Image source={temple_7} style={{opacity:0}}/>
                        <Image source={temple_8} style={{opacity:0}}/>

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

export default temple_page_final;
