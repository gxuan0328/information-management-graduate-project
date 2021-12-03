import {StyleSheet,Dimensions} from 'react-native'
const {width:WIDTH}=Dimensions.get('window')
export const styles = StyleSheet.create({
	Header:{
        flex:1,
        //backgroundColor:'blue' ,
        justifyContent:'center',
        alignItems:'center' , 
    },
    main:{
        flex:7,
        justifyContent:'center',
        alignItems:'center' , 

    },
    footer:{
        flex:1,
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center' , 
     
    },
    /** 手機頁面切三等份1:5:1分成Header,main,footer*/
    /** 把按鈕輸入框等元件都放在main中 */
    Text:{

        fontSize:45,
        textAlign:'center',
        height:70,
        width:150,
        borderRadius:30,
        //color:"#2C4251",
        //backgroundColor:'#b6c649',
        justifyContent:'center',
        alignItems:'center' , 


    },
    backgroundContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center' ,   
    },
    //放背景圖片


    Slider:{
        top:150,
     

    }
    
});