import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, TouchableOpacity,
} from 'react-native';
import Successpass_1 from '../img/Successpass/Successpass_1.png';
import Successpass_2 from '../img/Successpass/Successpass_2.png';
import Successpass_3 from '../img/Successpass/Successpass_3.png';
import Successpass_4 from '../img/Successpass/Successpass_4.png';
import Successpass_5 from '../img/Successpass/Successpass_5.png';
import Successpass_6 from '../img/Successpass/Successpass_6.png';

const { width: WIDTH } = Dimensions.get('window')
class GameSuccessPassPage extends Component {



    constructor(props) {
        super(props);

        this.state = {
            imagepage: 0,
            image: [
                Successpass_1,
                Successpass_2,
                Successpass_3,
                Successpass_4,
                Successpass_5,
                Successpass_6,
            ]

        };
    }

    Nextimage = () => {
        if (this.state.imagepage == (this.state.image.length - 1)) {
            this.props.navigation.navigate('Gift')
        }
        this.setState({
            imagepage: (Number(this.state.imagepage) + 1)
        })
    }

    render() {


        return (
            <ImageBackground source={this.state.image[this.state.imagepage]} style={styles.backgroundContainer}>
                <View style={styles.Header}>
                    <Image source={Successpass_1} style={{ opacity: 0 }} />
                    <Image source={Successpass_2} style={{ opacity: 0 }} />
                    <Image source={Successpass_3} style={{ opacity: 0 }} />
                    <Image source={Successpass_4} style={{ opacity: 0 }} />
                    <Image source={Successpass_5} style={{ opacity: 0 }} />
                    <Image source={Successpass_6} style={{ opacity: 0 }} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 99,
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
        width: WIDTH,
    },
    footer: {
        flex: 1,
        backgroundColor: 'yellow',
    },

})

export default GameSuccessPassPage;
