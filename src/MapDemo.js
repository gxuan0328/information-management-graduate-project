import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
  Platform,
  Navigator,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE,Marker,Callout, Polygon, Circle} from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import RNLocation from 'react-native-location';
export default class Map extends Component{  
  markers=[ 
    { name:'大富車站',coordinate:{ latitude:'23.605710201702152', longitude:' 121.38968168870394'}},
    { name:'啄木鳥觸發', coordinate:{ latitude:'23.60564560779151', longitude:' 121.39007955318571'}},
    { name:'大富國小', coordinate:{ latitude:'23.606709272117303',longitude:'121.39069904268355'}},
    { name:'遊樂場', coordinate:{ latitude:'23.607591556368423', longitude:'121.39046529113095'}},
    { name:'操場', coordinate:{ latitude:'23.60798948939224', longitude:'121.39090456814056'}},
    {name:'富安宮',coordinate:{ latitude:'23.605036242212073', longitude:' 121.3906355538751'}},
    {name:'警察局',coordinate:{ latitude:'23.605591651745147', longitude:'121.39236413365619'}},
  ];

  LocationCurrentPosition = () => {
    Geolocation.getCurrentPosition(
        position=>{
          let intialPosition ={
            latitude: position.coords.latitude,
            longitude:  position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.035,
          }
          this.setState({intialPosition});
        },error =>Alert.alert(error.message),{
          enableHighAccuracy:true,timeout:10000,marginTop:1000}
        )
      }

      componentDidMount(){
        this.reguestLocationPremission();

      }

     reguestLocationPremission = async()=>{
      if( Platform.OS ==='ios'){
        var response=await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        console
        if(response==='grandted'){
          this.LocationCurrentPosition();
        }
      }
      else{
        var response = await request(PERMISSIONS.ANDROID.LOCATION_WHEN_IN_USE)
      }
    }  
    constructor(props){
      super(props);
      this.setState={
        latitude:0,
        longitude:0,
        error:null,
      };

      }
     componentDidMount(){
      Geolocation.getCurrentPosition(
            (position) => {
            },
            (error) => {
              // See error code charts below.
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            
      // navigator.geolocation.getCurrentPosition(
      //   position=>{
      //   this.setState({
      //     latitude:position.coords.latitude,
      //     longitude:position.coords.longitude,
      //     error:null,
      //   });
      // },error=>this.setState({error:error.message}),
      // {enableHighAccuracy:true,timeout:20000,maximumAge:2000}
      ); 
    }
  
 




  render(){
        return( 
          // <View>
          //   <MapView 
          //      style={styles.map}
          //       region={{
          //       latitude:this.state.latitude ,
          //       longitude: this.state.longitude,
          //       latitudeDelta: 0.0922,
          //       longitudeDelta: 0.0421,
          //       }}
          //       > 
          //       </MapView>
          // </View>
          //     <View style={styles.center}>
          //     <TouchableOpacity  style={styles.bar} onPress={function(){ console.log('按到我了') }}>
          //     <Text style={styles.buttonText}> 狀態列表 </Text>
          //     </TouchableOpacity>
          //    </View>
          //   <View style={styles.center}>
          //      <TouchableOpacity   style={styles.button} >
          //      <Text style={styles.buttonText}> 1 </Text>
          //      </TouchableOpacity>
          //      <TouchableOpacity style={styles.button}>
          //      <Text style={styles.buttonText}> 2 </Text>
          //      </TouchableOpacity>
          //      <TouchableOpacity style={styles.button}>
          //      <Text style={styles.buttonText}> 3 </Text>
          //      </TouchableOpacity>
          //      <TouchableOpacity style={styles.button}>
          //      <Text style={styles.buttonText}> 4 </Text>
          //      </TouchableOpacity>
          //  </View>
          <MapView 
            provider={PROVIDER_GOOGLE}
            ref={map=>this._map=map}
            showsUserLocation={true}
            style={styles.map}
            initialRegion={this.props.intialPosition}>
               
              {/* <Polygon coordinates={this.state.coordinates}
                fillColor={'rgba(100,100,200,0.3)'}  
                strokeColor={3}
              />
            <Circle
            center={{latitude:'23.90329638423666', longitude:'121.53961975397097'}}
            radius={1000}
            fillColor={'rgba(200,300,200,0.3)'} 
            /> */}
            {/* <Marker
             coordinates={{ latitude:23.89737267013758, longitude: 121.54033532541509}} title={'管理學院'}>
              <Callout >
                <Image source={require('../img/mess.png')} />
                <Text>fucking dig</Text>
              </Callout>
              <Image source={require('../img/mess.png')} />

            </Marker> */}
          </MapView>
          
          
);
}};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  // button: {
    
  //   height:60,
  //   width:60,
  //   margin: 20,
  //   marginTop:650,
  //   padding: 10,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   backgroundColor: '#406E9F',
  //   borderRadius: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // bar: {
  //   height:60,
  //   width:300,
  //   margin: 20,
  //   marginTop:50,
  //   padding: 10,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   backgroundColor: '#406E9F',
  //   borderRadius: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  map:{
    
    ...StyleSheet.absoluteFillObject
  }

});
