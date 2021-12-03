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

import BGImage from '../img/Backgroundimage.jpg';
import {styles} from '../styles/Seting_styles'
//放背景圖片
import Slider from '@react-native-community/slider';
const {width:WIDTH}=Dimensions.get('window')


class Seting extends Component{


    render(){
        

        let {LocationNumber} =this.props.route.params;
        // LocationNumber =10000;

        
        

       

        return(
            <ImageBackground source={BGImage} style={styles.backgroundContainer}>

             <View style={styles.Header}>
            </View>

            <View style={styles.main}>
                <View style={styles.SetingView}><Text style={styles.Text}>
                    設定{JSON.stringify(LocationNumber)}</Text>
                    <TouchableOpacity style={styles.SetingView} 
                  onPress={()=>{ this.props.navigation.state.params.callBack({LocationNumber:3000}),
                    this.props.navigation.goBack()}}>
                  <Text style={styles.buttonText}> 2</Text>
                  </TouchableOpacity> 
                    <View><Slider style={styles.Slider}>
                        </Slider>
                    </View>
                    
                </View>


            </View>

            <View style={styles.footer}>

            </View>


            </ImageBackground>
        )}
}
export default Seting;
