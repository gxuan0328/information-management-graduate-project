import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import { styles } from '../styles/RoomMember_styles'
import firebase from '../database/firebaseDB'
import BGImage from '../img/background.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Item({ item }) {
    return (
        <View style={styles.listItem}>
            <Image source={{ uri: item.photo }} style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View style={{ alignItems: "center", justifyContent: 'center', flex: 1 }}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        </View>
    );
}

export default class flatlisttext extends Component {
    state = {
        data: [],
        players: 0,
        picture: '',
        pic: [
            {
                "photo": "https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/hank.png?alt=media&token=88121217-5419-41b7-86b3-745b978894b7"
            },
            {
                "photo": "https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/mei.png?alt=media&token=9887af21-aa4a-4e79-a81b-641de448b57e"
            },
            {
                "photo": "https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/shan.png?alt=media&token=3c544070-608e-4b34-9935-3e4bcef8593e"
            },
            {
                "photo": "https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/sin.png?alt=media&token=fe5b4340-b99b-4004-823d-d540baf90f62"
            },
            {
                "photo": "https://firebasestorage.googleapis.com/v0/b/sugarcane-10d1f.appspot.com/o/yo.png?alt=media&token=bed6c472-09b9-42fd-9b8f-7a93ddea4f87"
            },
        ]
    }


    componentDidMount() {
        this.unsubscribe = firebase.firestore().collection('GAME').doc(this.props.route.params.RoomNum).onSnapshot(this.getData);

        let Gift_state = this.readValue("Gift_state")

        this.timer = setTimeout(() => {
            if ((Gift_state?._W !== "null") && (Gift_state?._W !== "get") && (Gift_state?._W !== "got")) {
                this.storeData("Gift_state", "null")
            }
        }, 100)

    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getData = (doc) => {
        let detail = doc.data().member
        let order = doc.data().order
        detail.forEach((item, index) => {
            item.photo = this.state.pic[index].photo;
        })

        this.setState({
            data: detail,
            players: detail.length,
            picture: this.state.pic[order.indexOf(this.props.route.params.UserName)]
        })
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

        } catch (e) {
            console.log("saving error", e)

        }
    }
    removeValue = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (e) {
            // remove error
        }
    }

    ChangeRoomRemake = () => {
        let name_save = this.readValue('name_save')
        let room_save = this.readValue('room_save')

        this.timer = setTimeout(() => {
            if ((this.props.route.params.UserName !== name_save._W) || (this.props.route.params.RoomNum !== room_save._W)) {
                this.storeData('picture', this.state.picture)
                this.storeData('Progress_save', '0')
                this.storeData('MainView_Finsh', 'null')
                this.storeData('GameMap_Finsh', 'null')
                this.removeValue('response_uri_1')
                this.removeValue('response_uri_2')
                this.removeValue('response_uri_3')
                this.storeData('room_save', this.props.route.params.RoomNum)
                this.storeData('name_save', this.props.route.params.UserName)
                this.props.navigation.navigate('GameStory', { RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.state.players })
            } else {
                this.storeData('picture', this.state.picture)
                this.props.navigation.navigate('MainView', { RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.state.players })
            }

        }, 100)
    }


    render() {

        return (
            <ImageBackground source={BGImage} style={styles.backgroundimageContainer}>

                <View style={styles.maintop}>
                    <View style={styles.roombutton}>
                        <Text style={styles.roombuttontext}>{this.props.route.params.RoomNum}</Text>
                    </View>
                </View>



                <View style={styles.container}>
                    <View style={styles.box}>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <FlatList
                                    style={{ flex: 1 }}
                                    data={this.state.data}
                                    renderItem={({ item }) => <Item item={item} />}
                                    keyExtractor={item => item.name}
                                />
                            </View>

                        </View>

                    </View>

                </View>



                <View style={styles.mainfoot}>
                    <View style={styles.startbutton}>
                        <TouchableOpacity onPress={() => {

                            this.ChangeRoomRemake();
                        }}>
                            <Text style={styles.startbuttontext}>GO</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>


        );
    }
}