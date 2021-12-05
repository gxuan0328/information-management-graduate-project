import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, TouchableOpacity,
} from 'react-native';

import bad_event_1 from './bad_event_1.png';

const { width: WIDTH } = Dimensions.get('window')
class bad_event_page_1 extends Component {



    constructor(props) {
        super(props);

        this.state = {
            imagepage: 0,
            image: [
                bad_event_1

            ]

        };
    }

    Nextimage = () => {
        if (this.state.imagepage == (this.state.image.length - 1)) {
            this.props.navigation.navigate('Game', { LocationNumber: this.props.route.params.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
        }
        this.setState({
            imagepage: (Number(this.state.imagepage) + 1)
        })

    }
    render() {
        return (
            <ImageBackground source={this.state.image[this.state.imagepage]} style={styles.backgroundContainer}>

                <View style={styles.Header}>
                    <Image source={bad_event_1} style={{ opacity: 0 }} />

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
        flex: 22,
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
        // justifyContent:'center',
        // /*flexDirection:'row',*/
        // alignItems:'center' ,


    },
    // Dialog_box:{

    //     justifyContent:'center',
    //     alignItems:'center' ,

    // },
    Text: {
        flex: 1,
        textAlignVertical: 'center',
        marginLeft: '3%',
        marginRight: '30.3%',
        color: '#424B54',
        fontSize: 20,
        fontWeight: 'bold',
        //backgroundColor:'red' ,



    },
    footer: {
        flex: 1,
        //backgroundColor:'yellow' ,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default bad_event_page_1;


