import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { styles } from '../styles/MainView_styles'
import station from '../img/station.png';
import police from '../img/police.png';
import school from '../img/school.png';
import temple from '../img/temple.png';
import woodpecker from '../img/woodpecker.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MainView extends Component {

  backhandler = null;

  getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) {

    }
  }
  clearAll = async () => {
    try {

      await AsyncStorage.clear()
    } catch (e) {
    }
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

  async componentDidMount() {
    let pic = await this.readValue('picture')
    this.setState({ picture: pic })

    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          Nowlat: Number(position.coords.latitude),
          Nowlon: Number(position.coords.longitude),
        }
        );
      }, error => this.setState({ error: error.message }),
      { enableHighAccuracy: true }
    );

    let Progress_save = this.readValue('Progress_save')

    this.timer = setTimeout(() => {
      if (Progress_save._W !== null) {
        this.setState({
          LocationNumber: (parseInt(Progress_save._W))
        })
      } else {
        Progress_save = 0
        this.storeData('Progress_save', Progress_save)
        this.setState({
          LocationNumber: (parseInt(Progress_save))
        })
      }
    }, 100)


    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          Nowlat: Number(position.coords.latitude),
          Nowlon: Number(position.coords.longitude),
        }
        );
        this.Location_judgment()
      }, error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, distanceFilter: 1 }
    );

  }

  Location_judgment = () => {
    let distance = Math.sqrt(Math.pow((this.state.Nowlat - this.state.Attractions[2 * this.state.LocationNumber]), 2) + Math.pow((this.state.Nowlon - this.state.Attractions[2 * this.state.LocationNumber + 1]), 2))
    if (distance < 0.0002) {

      this.setState({
        LocationNumber: (Number(this.state.LocationNumber) + 1)

      })

      this.storeData('Progress_save', this.state.LocationNumber)


      switch (this.state.LocationNumber) {
        case 1:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('station_page_final', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 2:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('bad_event_page_3', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 3:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('temple_page_final', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 4:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('police_page_final', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 5:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('bad_event_page_2', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 6:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('woodpecker_page_final', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 7:
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('bad_event_page_1', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })
          break;
        case 8:
          this.timer = setTimeout(() => {
            this.storeData('MainView_Finsh', 'Finsh')
          }, 10)
          this.props.navigation.navigate('MainView')
          this.props.navigation.navigate('school_page_final', { LocationNumber: this.state.LocationNumber, RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players })

          break;
      }
    }

  }


  constructor(props) {
    super(props);
    this.state = {
      picture: {},
      point_lat: 0,
      point_lon: 0,

      latitude: 23.897781271357665,
      longitude: 121.54017904379525,
      error: null,
      Nowlat: 0,
      Nowlon: 0,
      LocationNumber: 0,
      //大富景點座標
      // Attractions:[
      //   23.605698494140167, 121.38963503518224,
      //   23.605637189234383, 121.39038233209047,
      //   23.60507549710492, 121.39067582373123,
      //   23.60555356085042, 121.39244634290118,
      //   23.605602652654742, 121.39128997707203,
      //   23.605683741823935, 121.39002465320216,
      //   23.606265155086312, 121.39055006400037,
      //   23.60710820458588, 121.39074800682278]

      //管院測試座標
      Attractions: [
        23.89789597185507, 121.53962346141924,
        23.897419180887876, 121.53986395579356,
        23.89789597185507, 121.53962346141924,
        23.897419180887876, 121.53986395579356,
        23.89789597185507, 121.53962346141924,
        23.897419180887876, 121.53986395579356,
        23.89789597185507, 121.53962346141924,
        23.897419180887876, 121.53986395579356]

    }
  }

  UNSAFE_componentWillMount() {
    this.backhandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('MainView')
      return true;
    });
  }

  clearAll = async () => {
    try {
      this.setState({ LocationNumber: 0 })
      await AsyncStorage.clear()
    } catch (e) {
      // clear error
    }
    console.log('Done.')
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.center}
          style={styles.map}
          showsUserLocation={true}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0032922,
            longitudeDelta: 0.000821,
          }}

        >


          <Marker
            coordinate={{ latitude: 23.897859215126708, longitude: 121.53963959301575, }}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
            image={station}>
            <Callout tooltip={true}>
              <View style={styles.marker_frame}>
                <Text style={styles.marker_text_1}>大富車站</Text>
                <Text style={styles.marker_text_2}>大富車站距離光復車站僅一站，每日會有數班區間車停靠，站內已無售票員，故採特別的「先上車後補票」制度。當地居民對車站的閒置空間發起了認養，並佈滿了裝置藝術、，希望旅人能心體會這座充滿情懷的車站。</Text>
              </View>
            </Callout>
          </Marker>


          <Marker
            coordinate={{ latitude: 23.897347234006276, longitude: 121.53990235150802, }}
            image={school}><Callout tooltip={true}>
              <View style={styles.marker_frame}>
                <Text style={styles.marker_text_1}>大富國小</Text>
                <Text style={styles.marker_text_2}>大富國小已有七八十年的歷史，隨著街道的繁榮不再，國小也因師生人數不足而併校，如今由大富社區發展協會接手後，創立嘎嘎啷創克基地，期望能和一同進駐的其他單位打造永續教育的場所</Text>
              </View>
            </Callout>

          </Marker>

          {/* //////////////////////////////////////// */}

          <Marker
            coordinate={{ latitude: 23.605698494140167, longitude: 121.38963503518224 }}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
            image={station}>
            <Callout tooltip={true}>
              <View style={styles.marker_frame}>
                <Text style={styles.marker_text_1}>大富車站</Text>
                <Text style={styles.marker_text_2}>大富車站距離光復車站僅一站，每日會有數班區間車停靠，站內已無售票員，故採特別的「先上車後補票」制度。當地居民對車站的閒置空間發起了認養，並佈滿了裝置藝術、，希望旅人能心體會這座充滿情懷的車站。</Text>
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{ latitude: 23.605128184245647, longitude: 121.39069882818104 }} image={temple}>
            <Callout tooltip={true}>
              <View style={styles.marker_frame}>
                <Text style={styles.marker_text_1}>富安宮</Text>
                <Text style={styles.marker_text_2}>富安宮住要祭拜古公三王。每年農曆11/15-11/16會有熱鬧的慶典。大婦人都會在這時返鄉參與，除了繞境祈求平安外，還有過火儀式來除污去穢，場面熱鬧非凡</Text>
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{ latitude: 23.6055864590864, longitude: 121.39254731953275 }} image={police}>


          </Marker>
          <Marker
            coordinate={{ latitude: 23.605649900634567, longitude: 121.39009316386819 }} image={woodpecker}>

          </Marker>
          <Marker
            coordinate={{ latitude: 23.60722570773282, longitude: 121.39090235529595 }} image={school}><Callout tooltip={true}>
              <View style={styles.marker_frame}>
                <Text style={styles.marker_text_1}>大富國小</Text>
                <Text style={styles.marker_text_2}>大富國小已有七八十年的歷史，隨著街道的繁榮不再，國小也因師生人數不足而併校，如今由大富社區發展協會接手後，創立嘎嘎啷創克基地，期望能和一同進駐的其他單位打造永續教育的場所</Text>
              </View>
            </Callout>

          </Marker>
        </MapView>


        <View style={styles.Buttonspace1}>
          <TouchableOpacity style={styles.ImageHeader} activeOpacity={1}
            onPress={() => {
              Geolocation.getCurrentPosition(
                position => {
                  this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                    Nowlat: Number(position.coords.latitude),
                    Nowlon: Number(position.coords.longitude),
                  }
                  );
                }, error => this.setState({ error: error.message }),
                { enableHighAccuracy: true }
              )
            }}
            onLongPress={() => {
              Alert.alert("參數設定", "", [
                {
                  text: '清除進度', onPress: () => {
                    this.clearAll();
                  }
                },
                {
                  text: '觀看結局', onPress: () => {
                    this.setState({ LocationNumber: 8 })
                    this.storeData('Gift_state', 'get')
                    this.props.navigation.navigate('GameSuccessPassPage')
                  }
                },
                { text: '大富概觀', onPress: () => { this.setState({ latitude: 23.605698494140167, longitude: 121.38963503518224 }) } },
              ], { cancelable: true })
            }}>
            <Image source={{ uri: this.state.picture.photo }} style={styles.ImageHeader} />
            <View style={styles.space}></View>
            <View style={styles.Roomnum}>
              <Text style={styles.IDtext}>房號:{this.props.route.params.RoomNum}
              </Text>
            </View>


            <View style={styles.name}>
              <Text style={styles.IDtext}>ID:{this.props.route.params.UserName}</Text>
            </View>
          </TouchableOpacity>



          <View style={styles.back} >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("警告", "離開房間可能會遺失先前遊戲進度喔，確定要離開房間嗎", [
                  {
                    text: '確定', onPress: async () => {
                      this.backhandler.remove();
                      this.props.navigation.popToTop()
                    }
                  },
                  { text: '取消', onPress: () => console.log('取消') }
                ])
              }}>
              <Icon name="reply" size={35} color="#141115" />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.Buttonspace2}></View>
        <View style={styles.buttom}>
          <View style={styles.navbar}>
            <TouchableOpacity style={styles.tag}
              onPress={() => { this.props.navigation.navigate('Game', { RoomNum: this.props.route.params.RoomNum, UserName: this.props.route.params.UserName, Players: this.props.route.params.Players }) }}>
              <Icon name="extension" size={35} color="black"></Icon>
              <Text>拼圖遊戲</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}
              onPress={() => { this.props.navigation.navigate('Gift') }}>
              <Icon name="redeem" size={35} color="black"></Icon>
              <Text>禮品兌換</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}
              onPress={() => { this.props.navigation.navigate('SmallMap') }}>
              <Icon name="map" size={35} color="black"></Icon>
              <Text>導覽地圖</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}
              onPress={() => { this.props.navigation.navigate('PhotoAlbum_1') }}>
              <Icon name="collections" size={35} color="black"></Icon>
              <Text>回憶錄</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}
export default MainView;


