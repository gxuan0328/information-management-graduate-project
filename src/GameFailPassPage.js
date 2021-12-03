import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Dimensions, TouchableOpacity,
} from 'react-native';

import Failpass_1 from '../img/Failpass/Failpass_1.png';
import Failpass_2 from '../img/Failpass/Failpass_2.png';
import Failpass_3 from '../img/Failpass/Failpass_3.png';
import Failpass_4 from '../img/Failpass/Failpass_4.png';
import Failpass_5 from '../img/Failpass/Failpass_5.png';


const { width: WIDTH } = Dimensions.get('window')
class GameFailPassPage extends Component {



    constructor(props) {
        super(props);

        this.state = {
            imagepage: 0,
            image: [
                Failpass_1,
                Failpass_2,
                Failpass_3,
                Failpass_4,
                Failpass_5,
            ]

        };
    }



    Nextimage = () => {
        if (this.state.imagepage == (this.state.image.length - 1)) {
            this.props.navigation.navigate('MainView', { LocationNumber: this.state.LocationNumber })
        }
        this.setState({
            imagepage: (Number(this.state.imagepage) + 1)
        })
    }

    render() {


        return (
            <ImageBackground source={this.state.image[this.state.imagepage]} style={styles.backgroundContainer}>

                <View style={styles.Header}>
                    <Image source={Failpass_1} style={{ opacity: 0 }} />
                    <Image source={Failpass_2} style={{ opacity: 0 }} />
                    <Image source={Failpass_3} style={{ opacity: 0 }} />
                    <Image source={Failpass_4} style={{ opacity: 0 }} />
                    <Image source={Failpass_5} style={{ opacity: 0 }} />

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
    Header: {
        flex: 1,

        //backgroundColor: '#f4a460',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 99,
        //backgroundColor:'red' ,

        justifyContent: 'center',
        alignItems: 'center',

    },
    /** 手機頁面切三等份1:5:1分成Header,main,footer*/
    /** 把按鈕輸入框等元件都放在main中 */


    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        flex: 1,
        // backgroundColor: 'red',
        width: WIDTH,
        // justifyContent:'center',
        // /*flexDirection:'row',*/
        // alignItems:'center' ,


    },
    footer: {
        flex: 1,
        backgroundColor: 'yellow',
        // justifyContent:'center',
        // alignItems:'center' , 
    },

})

export default GameFailPassPage;
