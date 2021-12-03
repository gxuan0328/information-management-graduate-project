import {StyleSheet,Dimensions} from 'react-native'
const {width:WIDTH}=Dimensions.get('window')
const {height:HEIGHT}=Dimensions.get('window')
export const styles = StyleSheet.create({
	Header:{
        flex:3,
        //backgroundColor:'blue' ,
        justifyContent:'center',
        alignItems:'center' , 
    },
    main:{
        flex:15,
        justifyContent:'flex-start',
        alignItems:'center' , 
        //backgroundColor:'#b6c649',

    },
    footer:{
        flex:2,
        justifyContent: 'space-around',
       // backgroundColor:'blue',
        
        flexDirection: 'row',
        alignItems:'center' , 
     
    },
    /** 手機頁面切三等份1:5:1分成Header,main,footer*/
    /** 把按鈕輸入框等元件都放在main中 */
    Text:{

        fontSize:40,
        textAlign:'center',

        //borderRadius:30,
        //olor:"#2C4251",
        //backgroundColor:'#b6c649',
        justifyContent:'center',
        alignItems:'center' , 


    },
    backgroundContainer:{
        flex:1,


    },
    photo:{
        resizeMode:'stretch',
        height:(HEIGHT/4*3)-40,
        width:WIDTH-10,
        zIndex:2,
        position:'absolute',
        alignSelf: 'center',
        // opacity:0.5,
    },
   
    image:{
        left:20,
        top:45,
        resizeMode:'cover',
        height:(HEIGHT/4*3*24/31)-65,
        width:WIDTH-50,
        zIndex:1,
        justifyContent: 'center',
        alignItems: 'center',
        //position:'absolute',
        position:'absolute',
        paddingVertical:40,
        paddingHorizontal:20,
        backgroundColor:'yellow',
        
    },
    image_top:{
        height:440,
        width:WIDTH,
       
        
        
        // paddingVertical:40,
        // paddingHorizontal:20,
        backgroundColor:'red',
        position:'absolute',
        zIndex:1,
        //backgroundColor:'blue',
    },
   
    



    
});