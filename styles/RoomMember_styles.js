import {StyleSheet,Dimensions} from 'react-native'
const {width:WIDTH}=Dimensions.get('window')
const {height:HEIGHT}=Dimensions.get('window')
export const styles = StyleSheet.create({
    backgroundimageContainer:{
            flex:1,  
        }, //backgroundimage
    maintop:{
        flex:1,
		justifyContent:"center",
		alignItems:"center"
    },
	container:{
        flex:4,
        marginTop:20,
        backgroundColor: 'transparent',
    },
	mainfoot:{
        flex:1, 
		backgroundColor:'transparent',
		justifyContent:"center",
		alignItems:"center"
    },
    roombutton:{
		width: 300,
		height:60,
		borderRadius:10,
		backgroundColor:'#ffa07a',
		justifyContent:'center',
		marginTop:30
	},
    roombuttontext:{
		color:'rgba(255,255,255,1)',
		fontSize:40,
		fontWeight:'bold',
		textAlign:"center",
	},



    
    listItem:{
    margin:10, //distance of outside
    padding:10,// distance of inside
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center", // position of list
    flexDirection:"row", // the direction of list item
    borderRadius:5
    },
    title:{
		fontSize:30,
		fontWeight:'bold',
    },
    box:{
		alignItems:"center",
		backgroundColor: 'rgba(92,92,90,0.8)',
		alignSelf: "center",
		width: WIDTH-50,
		height: (HEIGHT/3*2),
        position:'absolute',

		top:0,
        borderRadius:5
	  },
	  box2:{
		alignItems:"center",
		backgroundColor: "#ffdfb8",
		alignSelf: "center",
		width:WIDTH-70,
		height: (HEIGHT/3*2)-40,
		position:'absolute',

		top:20,
		borderRadius:5
	  },
	  box3:{
		backgroundColor:"#fecb8c",
		alignSelf: "center",
		width: WIDTH-90,
		height:(HEIGHT/3*2)-80,
		position:'absolute',
		// left:10,
		top:20,
        borderRadius:5
	  },
      



    
    startbutton:{
		width: WIDTH -200,
		height:50,
		borderRadius:100,
		backgroundColor:'#ffa07a',
		justifyContent:'center',
		marginTop:20
	},
    startbuttontext:{
		color:'rgba(255,255,255,1)',
		fontSize:30,
		fontWeight:'bold',
		textAlign:'center'
	},
    
});