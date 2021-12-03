import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Dimensions, TouchableOpacity,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BGImage from '../img/background.jpg';
import treasure from '../img/treasure.png';
import circle from '../img/circle.png'
import { styles } from '../styles/Gift_styles '

import AsyncStorage from '@react-native-async-storage/async-storage';
//放背景圖片
const { width: WIDTH } = Dimensions.get('window')
let Gift_state = ''
class Gift extends Component {
    GetToTheGift = () => {
        this.timer = setTimeout(() => {
            if (Gift_state?._W == 'get') {
                Alert.alert("警告", "兌換禮物請由工作人員為您操作進行兌換，確認後不可返回", [
                    {
                        text: '確定', onPress: () => {
                            this.setState({
                                image: circle
                            })
                            this.storeData('Gift_state', 'got')
                        }
                    },
                    { text: '取消', onPress: () => console.log('取消') }
                ])
            }
        }, 10)
    }
    componentDidMount() {
        Gift_state = this.readValue('Gift_state')

        this.timer = setTimeout(() => {
            if (Gift_state?._W == 'got') {
                this.setState({
                    image: circle
                })
            }

        }, 10)
    }
    readValue = async (value) => {
        try {
            const jsonValue = await AsyncStorage.getItem(value)
            console.log("readValue", jsonValue)

            return jsonValue != null ? JSON.parse(jsonValue) : null

        } catch (e) {
            console.log('error', e)

        }

    }
    storeData = async (key, value) => {
        try {
            key = key.toString()
            value = JSON.stringify(value)
            await AsyncStorage.setItem(key, value)

            console.log("saving success")
        } catch (e) {
            console.log("saving error", e)

        }
    }



    constructor(props) {
        super(props);

        this.state = {
            image: treasure,
        };
    }

    render() {
        return (
            <ImageBackground source={BGImage} style={styles.backgroundContainer}>

                <View style={styles.Header}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { this.GetToTheGift() }}>
                        <Text style={styles.Text}>兌換禮物</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.main}>
                    <Image source={this.state.image} style={styles.Giftimg} />


                </View>

                <View style={styles.footer}>

                    <View style={styles.back} >
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('MainView') }}>
                            <Icon name="times-circle" size={45} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>


            </ImageBackground>
        )
    }
}
export default Gift;
