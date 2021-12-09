import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Image,
  Alert
} from 'react-native';
import firebase from '../database/firebaseDB'
import { styles } from '../styles/CreatRoom_styles'
import BGImage from '../img/background.jpg'
import Title from '../img/title.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

class CreatRoom extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('GAME');
    this.state = {
      room: "",
      name: "",
      isLoading: false,

    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  readValue = async (value) => {
    try {
      const jsonValue = await AsyncStorage.getItem(value)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      console.log('error', e)
    }

  }

  componentDidMount() {
    let room_save = this.readValue('room_save')
    let name_save = this.readValue('name_save')

    this.timer = setTimeout(() => {
      if ((room_save._W && name_save._W) !== null) {
        this.setState({
          room: room_save._W,
          name: name_save._W,
        })
      } else {
        room_save = ''
        name_save = ''
        this.setState({
          room: room_save,
          name: name_save,
        })
      }
    }, 1000)
  }

  createRoom() {
    if (this.state.name === '' || this.state.room === '') {
      Alert.alert('提醒', '請輸入姓名與房號!')
    } else if (this.state.room.length < 4) {
      Alert.alert('提醒', '請輸入四位數字房號')
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef.doc(this.state.room).get().then((doc) => {
        if (doc.exists) {
          alert('房間已存在')
          this.setState({
            isLoading: false,
          });
        } else {
          let player = this.state.name;
          this.dbRef.doc(this.state.room).set({
            member: firebase.firestore.FieldValue.arrayUnion({ name: this.state.name }),
            order: firebase.firestore.FieldValue.arrayUnion(this.state.name),
            card: this.Shuffle(),

          })
            .then(this.dbRef.doc(this.state.room).collection('Map').doc('public').set({
              list: [
                2,
                11,
                10,
                11,
                10,
                11,
                3,

                11,
                0,
                0,
                0,
                0,
                0,
                11,

                11,
                0,
                0,
                0,
                0,
                0,
                11,

                11,
                0,
                0,
                0,
                0,
                0,
                11,

                11,
                0,
                0,
                0,
                0,
                0,
                11,

                11,
                0,
                0,
                0,
                0,
                0,
                11,

                11,
                0,
                0,
                0,
                0,
                0,
                11,

                11,
                0,
                0,
                0,
                0,
                0,
                11,


                4,
                10,
                10,
                11,
                10,
                10,
                5,




              ],
              treasure: this.Treasure(),
            }))
            .then(this.dbRef.doc(this.state.room).collection('Card').doc(player).set({
              list: [],
            }))
            .then(() => {
              this.searchRoom();
              this.setState({
                isLoading: false,
              });
              this.props.navigation.navigate('RoomMember', { RoomNum: this.state.room })
            })
            .catch((err) => {
              console.error("Error found: ", err);
              alert('系統錯誤')
              this.setState({
                isLoading: false,
              });
            });
        }
      });
    }
  }

  searchRoom() {
    if (this.state.name === '' || this.state.room === '') {
      Alert.alert('提醒','請輸入姓名與房號!')
    } else if (this.state.room.length < 4){
      Alert.alert('提醒', '請輸入四位數字房號')
    } else {
      this.setState({
        isLoading: true,
      });

      this.dbRef.doc(this.state.room).get().then(async (doc) => {
        let name_save = await this.readValue('name_save')
        let room_save = await this.readValue('room_save')
        if ((this.state.name == name_save) && (this.state.room == room_save)) {
          this.props.navigation.navigate('MainView', { RoomNum: this.state.room, UserName: this.state.name, Players: doc.data().order.length })
          return
        }
        else {
          if (doc.data().order.length >= 4) {
            alert('遊戲人數已滿')
            return
          }

          let player = this.state.name;
          this.dbRef.doc(this.state.room).update({
            member: firebase.firestore.FieldValue.arrayUnion({ name: this.state.name }),
            order: firebase.firestore.FieldValue.arrayUnion(this.state.name),
          })
            .then(this.dbRef.doc(this.state.room).collection('Card').doc(player).set({
              list: [],
            }))
            .then(() => {
              this.setState({
                isLoading: false,
              });
              this.props.navigation.navigate('RoomMember', { RoomNum: this.state.room, UserName: this.state.name })
            })
            .catch((err) => {
              console.error("Error found: ", err);
              alert('房間不存在')
              this.setState({
                isLoading: false,
              });
            });
        }

      }).then(() => {
        this.setState({
          isLoading: false,
        });
      }).catch((err) => {
        console.error("Error found: ", err);
        alert('房間不存在，請先創建房間')
        this.setState({
          isLoading: false,
        });
      });
    }
  }


  //設定寶藏位置
  Treasure() {
    return Math.floor(Math.random() * 3) + 1;
  }

  Shuffle() {
    let shuffle = [
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
    ];
    for (let i = shuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    return shuffle;
  }





  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (
      <ImageBackground source={BGImage} style={styles.backgroundContainer}>
        <View style={styles.Header}>
          <Image source={Title} style={styles.title} />
        </View>

        <View style={styles.main}>


          <View style={styles.textbox1}>
            <View style={styles.space}></View>
            <View style={styles.textbox2}>
              <TextInput style={styles.input}
                placeholder={"輸入姓名"}
                placeholderTextColor={'#8e8880'}
                value={this.state.name}
                onChangeText={(val) => this.inputValueUpdate(val, 'name')}
              />
            </View>
            {/* 輸入ID的輸入框*/}

            <View style={styles.textbox2}>
              {/* 加入房間按鈕*/}
              <TextInput style={styles.input}
                placeholder={'搜尋房號'}
                placeholderTextColor={'#8e8880'}
                value={this.state.room}
                onChangeText={(val) => this.inputValueUpdate(val, 'room')}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
            {/* 輸入ID的輸入框*/}
          </View>

          <View style={styles.buttonspace}>
            <View style={styles.buttontoshadow}>
              <View style={styles.Button}>
                <TouchableOpacity onPress={() => this.searchRoom()}>
                  <Text style={styles.ButtonText}>進入房間</Text>
                </TouchableOpacity>

              </View>
            </View>
            <View style={styles.buttontoshadow}>
              <View style={styles.Button}>
                <TouchableOpacity onPress={() => this.createRoom()}>
                  <Text style={styles.ButtonText}>創建房間</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
        </View>


        <View style={styles.footer}></View>

      </ImageBackground>

    );
  }

}
export default CreatRoom;
