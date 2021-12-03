import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  Animated,
  Alert,
  LogBox,
  Dimensions,
  Button,
  TouchableOpacity,
  ImageBackground,BackHandler
  
} from 'react-native';
import _ from 'lodash' ;

import crossroad from './roads/crossroad.jpg';
import d_right from './roads/right_1.jpg';
import d_left from './roads/left_1.jpg';
import u_right from './roads/left_2.jpg';
import u_left from './roads/right_2.jpg';
import s_right from './roads/down_right.jpg';
import s_left from './roads/down_left.jpg';
import h_up from './roads/up_right.jpg';
import h_down from './roads/up_left.jpg';
import horizontal from './roads/left_right.jpg';
import straight from './roads/up_down.jpg';
import BGImage from  './img/background.jpg'



const {width:WIDTH, height:HEIGHT }=Dimensions.get('window')
class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      zIndex: 0,
      
    };
  }

  handleOnLayout(event) {
    const { addDropzone } = this.props;
    const { layout } = event.nativeEvent;
    
    this.layout = layout;
    addDropzone(this, layout);
  }
  
  UNSAFE_componentWillMount() {

    
    const { inDropzone, swapItems, index, aroundItem } = this.props;
    this._panResponder = PanResponder.create({
      
      onMoveShouldSetResponderCapture: () => true,
      
      onMoveShouldSetPanResponderCapture: (e,gestureState)=> {
        let moveing=false 
        if (index>=63 && this.props.item != 0)
        {
          moveing=true
        } return moveing;
      },
      
      onPanResponderGrant: (e, gestureState) => {
        
        
        this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
      
        
        this.state.pan.setValue({ x:0, y: 0 });

        Animated.spring(this.state.scale, { toValue: 0.75, friction: 3, useNativeDriver: false}).start();
        
        this.setState({  zIndex: 1 });
        
      },

      onPanResponderMove: Animated.event([null, { dx: this.state.pan.x, dy: this.state.pan.y }], {useNativeDriver: false}),

      onPanResponderRelease: (e, gesture) => {
        this.state.pan.flattenOffset();
        Animated.spring(this.state.scale, { toValue: 1 , useNativeDriver: false,}).start();
        this.setState({  zIndex: 1 });

        let dropzone = inDropzone(gesture);
        
        if (dropzone) {
          // adjust into place
          
          
          if(aroundItem(dropzone.index, this.props.item)){
            Animated.spring(this.state.pan, { toValue: {
            x: dropzone.x - this.layout.x,
            y: dropzone.y - this.layout.y,
          }, useNativeDriver: false }).start();
          
            if (index !== dropzone.index && dropzone.index < 55 && this.props.item != 0 ) {
              
              swapItems(index, dropzone.index);
              
            }
          }
          
        }
        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },

    });



  }



  render() {
    
    const { pan, scale, zIndex} = this.state;
    const [translateX, translateY] = [pan.x, pan.y];
    const rotate = '0deg';
    const imageStyle = {
      transform: [{ translateX }, { translateY }, { rotate }, { scale }],
    };

    return (
      <View
        style={[styles.dropzone, { zIndex }]}
        onLayout={event => this.handleOnLayout(event)}
      >
        <Animated.View 
          {...this._panResponder.panHandlers}
          style={[imageStyle, styles.draggable]}
        >
          <Image style={styles.image} source={this.props.item} />
          
          
        </Animated.View>
        


      </View>
    );
  }
}

const swap = (array, fromIndex, toIndex) => {
  const newArray = array.slice(0);
  newArray[fromIndex] = array[toIndex];
  newArray[toIndex] = array[fromIndex];
  newArray.splice(fromIndex,1)

  return newArray;
}

class Playground extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      card: [1,1,1,2,2,3,4,5,6,6,6,7,7,8,8,9],
      items: [
       2,
       10,
       10,
       10,
       10,
       10,
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
       straight,
       10,
       10,
       5,
       

       
       crossroad,
       straight,
       horizontal,
       d_right,
       u_left,
      ],
      dropzoneLayouts: [{"height": 69.81818389892578, "width": 70.18181610107422, "x": 21.454545974731445, "y": 0}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 91.2727279663086, "y": 0}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 161.4545440673828, "y": 0}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 231.27272033691406, "y": 0}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 301.4545593261719, "y": 0}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 371.2727355957031, "y": 0}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 441.4545593261719, "y": 0}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 21.454545974731445, "y": 70.18181610107422}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 91.2727279663086, "y": 70.18181610107422}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 161.4545440673828, "y": 70.18181610107422}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 231.27272033691406, "y": 70.18181610107422}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 301.4545593261719, "y": 70.18181610107422}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 371.2727355957031, "y": 70.18181610107422}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 441.4545593261719, "y": 70.18181610107422}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 21.454545974731445, "y": 140}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 91.2727279663086, "y": 140}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 161.4545440673828, "y": 140}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 231.27272033691406, "y": 140}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 301.4545593261719, "y": 140}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 371.2727355957031, "y": 140}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 441.4545593261719, "y": 140}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 21.454545974731445, "y": 210.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 91.2727279663086, "y": 210.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 161.4545440673828, "y": 210.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 231.27272033691406, "y": 210.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 301.4545593261719, "y": 210.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 371.2727355957031, "y": 210.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 441.4545593261719, "y": 210.18182373046875}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 21.454545974731445, "y": 280}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 91.2727279663086, "y": 280}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 161.4545440673828, "y": 280}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 231.27272033691406, "y": 280}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 301.4545593261719, "y": 280}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 371.2727355957031, "y": 280}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 441.4545593261719, "y": 280}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 21.454545974731445, "y": 350.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 91.2727279663086, "y": 350.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 161.4545440673828, "y": 350.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 231.27272033691406, "y": 350.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 301.4545593261719, "y": 350.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 371.2727355957031, "y": 350.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 441.4545593261719, "y": 350.18182373046875}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 21.454545974731445, "y": 420}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 91.2727279663086, "y": 420}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 161.4545440673828, "y": 420}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 231.27272033691406, "y": 420}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 301.4545593261719, "y": 420}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 371.2727355957031, "y": 420}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 441.4545593261719, "y": 420}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 21.454545974731445, "y": 490.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 91.2727279663086, "y": 490.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 161.4545440673828, "y": 490.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 231.27272033691406, "y": 490.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 301.4545593261719, "y": 490.18182373046875}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 371.2727355957031, "y": 490.18182373046875}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 441.4545593261719, "y": 490.18182373046875}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 21.454545974731445, "y": 560}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 91.2727279663086, "y": 560}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 161.4545440673828, "y": 560}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 231.27272033691406, "y": 560}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 301.4545593261719, "y": 560}, {"height": 69.81818389892578, "width": 69.81818389892578, "x": 371.2727355957031, "y": 560}, {"height": 69.81818389892578, "width": 70.18181610107422, "x": 441.4545593261719, "y": 560}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 91.2727279663086, "y": 630.1818237304688}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 161.4545440673828, "y": 630.1818237304688}, {"height": 70.18181610107422, "width": 69.81818389892578, "x": 231.27272033691406, "y": 630.1818237304688}, {"height": 70.18181610107422, "width": 70.18181610107422, "x": 301.4545593261719, "y": 630.1818237304688}],
    };
  }
 

//太久了QQ，有空改善  

addDropzone(dropzone, dropzoneLayout) {
  const { items, dropzones, dropzoneLayouts } = this.state;
  // HACK: to make sure setting state does not re-add dropzones
    
}  


  inDropzone(gesture,item) {
    const { dropzoneLayouts,items } = this.state;
    // HACK: with the way they are added, sometimes the layouts end up out of order, so we need to sort by y,x (x,y doesn't work)
    const sortedDropzoneLayouts = _.sortBy(dropzoneLayouts, ['y', 'x']);
    let inDropzone = false;
    
    sortedDropzoneLayouts.some((dropzone, index) => {

      const inX = gesture.moveX+70 > dropzone.x && gesture.moveX+70 < dropzone.x + dropzone.width;
      const inY = gesture.moveY+10 > dropzone.y && gesture.moveY+10 < dropzone.y + dropzone.height;
      
       
        if (inX && inY) {
        inDropzone = dropzone;
        inDropzone.index = index;
        
        return true;
        }
      
      
    });
    return inDropzone;
   
  }


  aroundItem(dropzone, item){
    const { items } = this.state;
    let flag = false;
    if(items[dropzone]!=0||(items[dropzone-7]==0&&
       items[dropzone+7]==0&&
       items[dropzone-1]==0&&
       items[dropzone+1]==0))
       {}
    else
    {
      switch(item){
        case 1:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==8||
            items[dropzone-7]==10)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
            flag =true;
            break;
            }
        case 2:
          if(items[dropzone-7]==1||
            items[dropzone-7]==2||
            items[dropzone-7]==3||
            items[dropzone-7]==6||
            items[dropzone-7]==7||
            items[dropzone-7]==9||
            items[dropzone-7]==11)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==1||
                  items[dropzone-1]==2||
                  items[dropzone-1]==4||
                  items[dropzone-1]==6||
                  items[dropzone-1]==8||
                  items[dropzone-1]==9||
                  items[dropzone-1]==10)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
              if(items[dropzone+7]==0&&(items[dropzone-7]!=0||items[dropzone-1]==0)&&items[dropzone+1]==0&&(items[dropzone-7]==4||
                items[dropzone-7]==5||
                items[dropzone-7]==8||
                items[dropzone-7]==10)){
                    break;
                  }              
              else if(items[dropzone+7]==0&&(items[dropzone-7]==0||items[dropzone-1]!=0)&&items[dropzone+1]==0&&(items[dropzone-1]==3||
                      items[dropzone-1]==5||
                      items[dropzone-1]==7||
                      items[dropzone-1]==11)){
                    break;
                  }             
              else{
                    flag =true;
                    break;
                  }
            }
        case 3:
          if(items[dropzone-7]==1||
            items[dropzone-7]==2||
            items[dropzone-7]==3||
            items[dropzone-7]==6||
            items[dropzone-7]==7||
            items[dropzone-7]==9||
            items[dropzone-7]==11)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

            else if(items[dropzone+1]==1||
                    items[dropzone+1]==3||
                    items[dropzone+1]==5||
                    items[dropzone+1]==7||
                    items[dropzone+1]==8||
                    items[dropzone+1]==9||
                    items[dropzone+1]==10)
            {
            break;
            }

          else
            {
            
              if(items[dropzone+7]==0&&items[dropzone-1]==0&&(items[dropzone-7]!=0||items[dropzone+1]==0)&&(items[dropzone-7]==4||
                items[dropzone-7]==5||
                items[dropzone-7]==8||
                items[dropzone-7]==10)){
                    break;
                  }
              else if(items[dropzone+7]==0&&items[dropzone-1]==0&&(items[dropzone-7]==0||items[dropzone+1]!=0)&&(items[dropzone+1]==2||
                      items[dropzone+1]==4||
                      items[dropzone+1]==6||
                      items[dropzone+1]==11)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            }
        case 4:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==9||
            items[dropzone-7]==10)
            {
            break;
            }

          else if(items[dropzone+7]==1||
                  items[dropzone+7]==4||
                  items[dropzone+7]==5||
                  items[dropzone+7]==6||
                  items[dropzone+7]==7||
                  items[dropzone+7]==8||
                  items[dropzone+7]==11)
            {
            break;
            }

          else if(items[dropzone-1]==1||
                  items[dropzone-1]==2||
                  items[dropzone-1]==4||
                  items[dropzone-1]==6||
                  items[dropzone-1]==8||
                  items[dropzone-1]==9||
                  items[dropzone-1]==10)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
              
              if(items[dropzone-7]==0&&(items[dropzone+7]!=0||items[dropzone-1]==0)&&items[dropzone+1]==0&&(items[dropzone+7]==2||
                      items[dropzone+7]==3||
                      items[dropzone+7]==9||
                      items[dropzone+7]==10)){
                    break;
                  }
              else if(items[dropzone-7]==0&&(items[dropzone+7]==0||items[dropzone-1]!=0)&&items[dropzone+1]==0&&(items[dropzone-1]==3||
                      items[dropzone-1]==5||
                      items[dropzone-1]==7||
                      items[dropzone-1]==11)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 5:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==8||
            items[dropzone-7]==10)
            {
            break;
            }

            else if(items[dropzone+7]==1||
                    items[dropzone+7]==4||
                    items[dropzone+7]==5||
                    items[dropzone+7]==6||
                    items[dropzone+7]==7||
                    items[dropzone+7]==8||
                    items[dropzone+7]==11)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

          else if(items[dropzone+1]==1||
                  items[dropzone+1]==3||
                  items[dropzone+1]==5||
                  items[dropzone+1]==7||
                  items[dropzone+1]==8||
                  items[dropzone+1]==9||
                  items[dropzone+1]==10)
            {
            break;
            }

          else
            {
            
              if(items[dropzone-7]==0&&items[dropzone-1]==0&&(items[dropzone+1]==0||items[dropzone+7]!=0)&&(items[dropzone+7]==2||
                      items[dropzone+7]==3||
                      items[dropzone+7]==9||
                      items[dropzone+7]==10)){
                    break;
                  }
              else if(items[dropzone-7]==0&&items[dropzone-1]==0&&(items[dropzone+1]!=0||items[dropzone+7]==0)&&(items[dropzone+1]==2||
                      items[dropzone+1]==4||
                      items[dropzone+1]==6||
                      items[dropzone+1]==1)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 6:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==8||
            items[dropzone-7]==10)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==1||
                  items[dropzone-1]==2||
                  items[dropzone-1]==4||
                  items[dropzone-1]==6||
                  items[dropzone-1]==8||
                  items[dropzone-1]==9||
                  items[dropzone-1]==10)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
            
              if(items[dropzone-7]==0&&items[dropzone+7]==0&&items[dropzone-1]!=0&&items[dropzone+1]==0&&(items[dropzone-1]==3||
                      items[dropzone-1]==5||
                      items[dropzone-1]==7||
                      items[dropzone-1]==11)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 7:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==8||
            items[dropzone-7]==10)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

          else if(items[dropzone+1]==1||
                  items[dropzone+1]==3||
                  items[dropzone+1]==5||
                  items[dropzone+1]==7||
                  items[dropzone+1]==8||
                  items[dropzone+1]==9||
                  items[dropzone+1]==10)
            {
            break;
            }

          else
            {
            
              if(items[dropzone-7]==0&&items[dropzone+7]==0&&items[dropzone-1]==0&&items[dropzone+1]!=0&&(items[dropzone+1]==2||
                      items[dropzone+1]==4||
                      items[dropzone+1]==6||
                      items[dropzone+1]==1)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 8:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==8||
            items[dropzone-7]==10)
            {
            break;
            }

          else if(items[dropzone+7]==1||
                  items[dropzone+7]==4||
                  items[dropzone+7]==5||
                  items[dropzone+7]==6||
                  items[dropzone+7]==7||
                  items[dropzone+7]==8||
                  items[dropzone+7]==11)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
            
              if(items[dropzone-7]==0&&items[dropzone+7]!=0&&items[dropzone-1]==0&&items[dropzone+1]==0&&(items[dropzone+7]==2||
                      items[dropzone+7]==3||
                      items[dropzone+7]==9||
                      items[dropzone+7]==10)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 9:
          if(items[dropzone-7]==1||
            items[dropzone-7]==2||
            items[dropzone-7]==3||
            items[dropzone-7]==6||
            items[dropzone-7]==7||
            items[dropzone-7]==9||
            items[dropzone-7]==11)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
            
              if(items[dropzone-7]!=0&&items[dropzone+7]==0&&items[dropzone-1]==0&&items[dropzone+1]==0&&(items[dropzone-7]==4||
                items[dropzone-7]==5||
                items[dropzone-7]==8||
                items[dropzone-7]==10)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 10:
          if(items[dropzone-7]==1||
            items[dropzone-7]==2||
            items[dropzone-7]==3||
            items[dropzone-7]==6||
            items[dropzone-7]==7||
            items[dropzone-7]==9||
            items[dropzone-7]==11)
            {
            break;
            }

          else if(items[dropzone+7]==1||
                  items[dropzone+7]==4||
                  items[dropzone+7]==5||
                  items[dropzone+7]==6||
                  items[dropzone+7]==7||
                  items[dropzone+7]==8||
                  items[dropzone+7]==11)
            {
            break;
            }

          else if(items[dropzone-1]==3||
                  items[dropzone-1]==5||
                  items[dropzone-1]==7||
                  items[dropzone-1]==11)
            {
            break;
            }

          else if(items[dropzone+1]==2||
                  items[dropzone+1]==4||
                  items[dropzone+1]==6||
                  items[dropzone+1]==11)
            {
            break;
            }

          else
            {
            
              if((items[dropzone-7]!=0||items[dropzone+7]==0)&&items[dropzone-1]==0&&items[dropzone+1]==0&&(items[dropzone-7]==4||
                items[dropzone-7]==5||
                items[dropzone-7]==8||
                items[dropzone-7]==10)){
                    break;
                  }
              else if((items[dropzone-7]==0||items[dropzone+7]!=0)&&items[dropzone-1]==0&&items[dropzone+1]==0&&(items[dropzone+7]==2||
                      items[dropzone+7]==3||
                      items[dropzone+7]==9||
                      items[dropzone+7]==10)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            } 
        case 11:
          if(items[dropzone-7]==4||
            items[dropzone-7]==5||
            items[dropzone-7]==8||
            items[dropzone-7]==10)
            {
            break;
            }

          else if(items[dropzone+7]==2||
                  items[dropzone+7]==3||
                  items[dropzone+7]==9||
                  items[dropzone+7]==10)
            {
            break;
            }

          else if(items[dropzone-1]==1||
                  items[dropzone-1]==2||
                  items[dropzone-1]==4||
                  items[dropzone-1]==6||
                  items[dropzone-1]==8||
                  items[dropzone-1]==9||
                  items[dropzone-1]==10)
            {
            break;
            }

          else if(items[dropzone+1]==1||
                  items[dropzone+1]==3||
                  items[dropzone+1]==5||
                  items[dropzone+1]==7||
                  items[dropzone+1]==8||
                  items[dropzone+1]==9||
                  items[dropzone+1]==10)
            {
            break;
            }

          else
            {
            
              if(items[dropzone-7]==0&&items[dropzone+7]==0&&(items[dropzone-1]!=0||items[dropzone+1]==0)&&(items[dropzone-1]==3||
                      items[dropzone-1]==5||
                      items[dropzone-1]==7||
                      items[dropzone-1]==11)){
                    break;
                  }
              else if(items[dropzone-7]==0&&items[dropzone+7]==0&&(items[dropzone-1]==0||items[dropzone+1]!=0)&&(items[dropzone+1]==2||
                      items[dropzone+1]==4||
                      items[dropzone+1]==6||
                      items[dropzone+1]==1)){
                    break;
                  }
              else{
                    flag =true;
                    break;
                  }
            }
        
      }
    }
    return flag;
  }

  swapItems(fromIndex, toIndex) {
    const { items, dropzones } = this.state;
    this.setState({
      items: swap(items, fromIndex, toIndex),
    });
  }

  AddCard() {
    const { items, card } = this.state;
    let newArray = items.slice(0);
    newArray.push(card.pop());
    this.setState({
      items: newArray,
    });
  }

  Shuffle() {
    const { card } = this.state;
    let shuffle = card.slice(0);
    for(let i = shuffle.length-1;i > 0;i--){
      let j = Math.floor(Math.random()*(i+1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    this.setState({
      card: shuffle,
    })
  }
  
  DeleteCard() {
    const { items } = this.state;
    let newArray = items.slice(0);
    for(let n=0;n<3;n++){
      newArray.some( (item, index) => {
        if(item != 0 && index%7 != 0 && index%7 != 6 && index > 7 && index < 55){
          newArray[index] = 0;
          return true;
        }
      })
    }
    
    this.setState({
      items: newArray,
    });
  }

  render() {

    const {LocationNumber} =this.props.route.params;
     
    return (
      <ImageBackground source={BGImage} style={styles.backgroundimageContainer}>
       <View style={styles.container1}>

       
      <View style={styles.container}>
        <View style={styles.Box1}>
          <View style={styles.test}>
              <Image source={require('./img/BOX.png')} style={styles.imagebox} />
              <Image source={require('./img/BOX.png')} style={styles.imagebox} />
              <Image source={require('./img/BOX.png')} style={styles.imagebox} />
            {/* <TouchableOpacity style={styles.button} onPress={ this.AddCard.bind(this) }><Text>加</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ this.Shuffle.bind(this) }><Text>洗</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ this.DeleteCard.bind(this) }><Text>減</Text></TouchableOpacity> */}
          </View>          
        </View>


        <View style={styles.Box2}></View>
        <View style={styles.Box3}></View>
        <View style={styles.Box4}>
            <View style={styles.start}>
                <Image source={require('./img/start.png')} style={styles.imagebox} />
            </View>
          
        </View>
          {this.state.items.map((item, index) =>
          <Draggable key={index}
            item={item}
            index={index}
            addDropzone={this.addDropzone.bind(this)}
            inDropzone={this.inDropzone.bind(this)}
            swapItems={this.swapItems.bind(this)}
            aroundItem={this.aroundItem.bind(this)}
            Shuffle={this.Shuffle.bind(this)}
            DeleteCard={this.DeleteCard.bind(this)}/>
            
          
        )}
      </View>
      </View>
      </ImageBackground>
   
    );
  }
}
//程式碼整體大致上是用一個Draggable處理而已，圖片是用item一個一個放進去，但因為設計上沒辦法硬拆，所以
//我用9*5個圖片數去做布局，第8行的五個圖片用一個view蓋掉，在inDropzone中做判斷式，第8行不能被交換

const styles = StyleSheet.create({
  
  backgroundimageContainer:{
    flex:1,  
  },
  container1: {
    paddingTop:5
  
  },
  container: {
    height: HEIGHT+20,
    width:　WIDTH+140,
    left: -70,
    top: -10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  dropzone: {
    // margin: 5,
    zIndex: -1,
    width: 70,
    height: 70,
    backgroundColor: 'transparent',
  },
  draggable: {
    
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor:'#eaac62',
    borderRadius:10,
    width: 70,
    height: 70,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius:10,
  },
  imagebox: {
    width: 75,
    height: 70,
    borderRadius:10,
    marginRight:35,
    marginLeft:35,
  
     
  },
  Box1:{
    flex:1,
    top: 0,   
    left: 0,
    position:'absolute',
    alignItems: 'center',
    backgroundColor: "#ffdfb8",
    alignSelf: "stretch",
    zIndex:1,
    width: WIDTH+140,
    height: 70,
    
  },
  Box2:{
    top:0,
    left:442,
    position:'absolute',
    backgroundColor: "#ffdfb8",
    alignSelf: "stretch",
    zIndex:1,
    height:562,
    width:91,
  },
  Box3:{
    top:0,
    left:0,
    position:'absolute',
    backgroundColor: "#ffdfb8",
    alignSelf: "stretch",
    zIndex:1,
    height:562,
    width:91,
  },
  Box4:{
    top: 561,
    left: 0,
    position:'absolute',
    backgroundColor: "#ffdfb8",
    alignSelf: "stretch",
    zIndex:1,
    width: WIDTH+140,
    height: 69,
    
  },
  start:{
    alignItems: 'center',
    zIndex:0,
  },
  button:{
    top:12,
    width: 55,
    height: 55,
    backgroundColor:"#fccb00",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"transparent",
    borderWidth:5,
    borderRadius:50,
    margin:2,

  },
  test:{
    flexDirection: 'row',
    justifyContent:"space-around",
    paddingLeft:0,
  }
});

export default Playground;

//嚴重的擔心，遊戲在實機上的執行效果是否會造成卡頓，這周可先進行上機測試，不然可能須著手處理Release內的運算量
//目前將洗牌、新增牌、刪除牌(阻擋效果)，以按鍵套function的方式作呈現，未來可由外部傳入指定參數進行執行
//目前須規劃需牌的指令需放於何處執行，目前尚未找到哪個地方是在這個畫面中從頭到尾只會被render一次的，滿困擾的
//目前尚需確認我們遊戲進行時各種卡牌的總數，以及三向牌的形象重製
//以上，若有缺少的提出進行補充