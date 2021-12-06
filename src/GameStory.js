import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, 
    TouchableOpacity,
} from 'react-native';
import GameStory_1 from '../img/GameStory_img/GameStory_1.jpg';
import GameStory_2 from '../img/GameStory_img/GameStory_2.jpg';
import GameStory_3 from '../img/GameStory_img/GameStory_3.jpg';
import GameStory_4 from '../img/GameStory_img/GameStory_4.jpg';
import GameStory_5 from '../img/GameStory_img/GameStory_5.jpg';
import GameStory_6 from '../img/GameStory_img/GameStory_6.jpg';
import GameStory_7 from '../img/GameStory_img/GameStory_7.jpg';
import GameStory_8 from '../img/GameStory_img/GameStory_8.jpg';
const { width: WIDTH } = Dimensions.get('window')
class GameStory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imagepage: 0,
            image: [
                GameStory_1,
                GameStory_2,
                GameStory_3,
                GameStory_4,
                GameStory_5,
                GameStory_6,
                GameStory_7,
                GameStory_8,
            ]

        };
    }



    Nextimage = () => {
        if (this.state.imagepage == (this.state.image.length - 1)) {
            this.props.navigation.navigate('MainView', { RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
        }
        this.setState({
            imagepage: (Number(this.state.imagepage) + 1)
        })
    }

    render() {


        return (
            <ImageBackground source={this.state.image[this.state.imagepage]} style={styles.backgroundContainer}>

                <View style={styles.Header}>
                    <Image source={GameStory_1} style={{ opacity: 0 }} />
                    <Image source={GameStory_2} style={{ opacity: 0 }} />
                    <Image source={GameStory_3} style={{ opacity: 0 }} />
                    <Image source={GameStory_4} style={{ opacity: 0 }} />
                    <Image source={GameStory_5} style={{ opacity: 0 }} />
                    <Image source={GameStory_6} style={{ opacity: 0 }} />
                    <Image source={GameStory_7} style={{ opacity: 0 }} />
                    <Image source={GameStory_8} style={{ opacity: 0 }} />

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
        width: WIDTH,
    },
    footer: {
        flex: 1,
        backgroundColor: 'yellow',
    },
})

export default GameStory;
