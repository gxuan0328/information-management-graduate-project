import {StyleSheet,Dimensions} from 'react-native'
const {width:WIDTH}=Dimensions.get('window')

export const styles = StyleSheet.create({
    center: {
        flex: 1 ,
        ...StyleSheet.absoluteFillObject
      },
    
      container: { 
        flex: 1, 
      },
    
      map:{
        
        ...StyleSheet.absoluteFillObject
        }, 
        
     
        
    
        smallbutton: {
            width:75,
            height:75,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#ffc279',
            borderBottomWidth:2,
            borderColor:'rgba(0,0,0,0.1)',
            borderRadius: 400,
            alignItems: 'center',
        },
        smallbutton2: {
          
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 2,
          paddingLeft: 1,
          paddingRight: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: 400,
          alignItems: 'center',
      },
        Buttonspace1:{
          marginTop:5,
          marginLeft:5,
          flex:2,
          // backgroundColor: 'yellow',
        },
        

        Buttonspace2:{
          flex:10,
          // backgroundColor: 'red',
        },

        button: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 12,
          padding: 0,
          paddingLeft: 5,
          paddingRight: 5,         
          borderRadius: 400,
          alignItems: 'center',
        },
        ImageHeader:{
          backgroundColor:'#ffc279',
          flex:1,
          top:3,
          left:3,
          height:90,
          width:90,
          borderRadius:90,
          position: 'absolute',
        },
        Roomnum:{
          
          left:105,
          width:200,
          //backgroundColor: 'yellow',
          flex:4,
          
        },
        name:{
          
          left:105,
          width:200,
          //backgroundColor: 'blue',
          flex:4,
        },
        space:{
          flex:1,
        },
        IDtext:{
            fontSize:25,
            textAlign:'left',
            textAlignVertical:'bottom',
            color:"#2C4251",
            justifyContent:'center',
            alignItems:'center' ,
        },
        back:{  
          alignContent :'flex-end' ,
          top:20,
          left:-20,
          alignSelf:'flex-end' ,
        },
        marker_frame:{
          width: 200,
          alignSelf: 'flex-start',
          backgroundColor: '#7dcbb3',
          paddingHorizontal: 10,
          paddingVertical: 12,
          borderRadius: 6,
          borderColor: '#007a87',
          borderWidth: 0.5,
        },
        marker_text_1:{
          color:"#ffffff",
          textAlign:"center",
          fontSize:25,
        },
        marker_text_2:{
          color:"#347e6d",
          textAlign:'center',
          fontSize:20,
        },

        //new navigatebar
        buttom: {
          flex:2,
          // backgroundColor:'green',
          justifyContent:'center',
          alignItems:'center',
        },
        navbar: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor:'white',
          width:'95%',
          height:'65%',
          borderRadius:20,
          backgroundColor:'#ffc279'
        },
        tag: {
          justifyContent:'center',
          alignItems:'center',
        }
        
    
});