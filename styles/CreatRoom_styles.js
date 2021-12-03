import {StyleSheet,Dimensions} from 'react-native'
const {width:WIDTH}=Dimensions.get('window')
export const styles = StyleSheet.create({
    Header:{
        flex:3 ,
        //backgroundColor:'blue' ,
        justifyContent:'center',
        alignItems:'center' , 
    },
    main:{
        flex:6,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center' , 
        //backgroundColor:'blue' ,
        
    },
    footer:{
        flex:2,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center' , 
     
    },
    /** 手機頁面切三等份1:5:1分成Header,main,footer*/
    /** 把按鈕輸入框等元件都放在main中 */


    backgroundContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center' ,   
    },

    title:{
        justifyContent:'center',
        alignItems:'center' ,
        width:390,
        height:100,
        marginTop:10,
       // backgroundColor:'red'
    },

    //大富嗡文字圖片的位置設定
    input:{
        
        width: WIDTH - 160,
        height:60,
        fontSize:30,
        borderRadius:15,
        
        textAlign:'center',
        backgroundColor:'#faebd7',
        marginTop:5,
        marginHorizontal:10,
     
     
     
    /**輸入框樣是設定 */
    },
    buttontoshadow:{
        borderBottomWidth:6,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderRadius:100,
        borderColor:'rgba(0,0,0,0.1)',
    },
    Button:{
        width: 130,
        //marginTop:5,
        borderRadius:100,
        height:50,
        backgroundColor: '#fecb8c',
        justifyContent:'center',
        alignItems:'center' ,
        borderBottomWidth:2,
        borderColor:'rgba(255,223,184,1)',
       

        
  

    },
     /* 按鈕樣式*/
    ButtonText:{
        fontSize:25,
        color:'rgba(0,0,0,0.8)',
        textAlign:'center',
        
    },
    /* 按鈕文字樣式*/
    textbox1:{
        alignItems:'center',
        flex:3,
       // backgroundColor:'yellow'
    },
    space:{
        flex:1
    },
    textbox2:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        //backgroundColor:'green'
    },
    buttonspace:{
        flex:1,
        width:WIDTH-80,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        //backgroundColor:'blue'
    },
    
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
      }
});