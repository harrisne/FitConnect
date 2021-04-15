import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert } from 'react-native'

class Inputs extends Component {
   state = {
      
      startTime: 1, 
      endTime: 0,

      colorBox_1_2pm: 'transparent',
      moveBox_1_2pm: 7,
      //disabled_1_2pm: true,

      colorBox_2_3pm: 'transparent',
      moveBox_2_3pm: 7,
      //disabled_2_3pm: true, 

      colorBox_3_4pm: 'transparent',
      moveBox_3_4pm: 7,
      //disbaled_3_4pm: true,

      colorBox_4_5pm: 'transparent',
      moveBox_4_5pm: 7,
      //disabled_4_5pm: true,

      colorBox_5_6pm: 'transparent',
      moveBox_5_6pm: 7,
      //disabled_5_6pm: true,

      colorBox_6_7pm: 'transparent',
      moveBox_6_7pm: 7,
      //disabled_6_7pm: true,

      colorBox_7_8pm: 'transparent',
      moveBox_7_8pm: 7,
      //disabled_7_8pm: true, 

      colorBox_8_9pm: 'transparent',
      moveBox_8_9pm: 7,
      //disabled_8_9pm: true,

      colorBox_9_10pm: 'transparent',
      moveBox_9_10pm: 7,
      //disabled_9_10pm: true,

      colorBox_10_11pm: 'transparent',
      moveBox_10_11pm: 7,
      //disabled_10_11pm: true, 

      colorBox_11_12am: 'transparent',
      moveBox_11_12am: 7,
      //disabled_11_12am: true,

      colorBox_12am_1am: 'transparent',
      moveBox_12am_1am: 7,
      //disabled_12am_1am: true,

      colorBox_1am_2am: 'transparent',
      moveBox_1am_2am: 7,
      //disabled_1am_2am: true,

      colorBox_2am_3am: 'transparent',
      moveBox_2am_3am: 7,
      //disabled_2am_3am: true, 

      colorBox_3am_4am: 'transparent',
      moveBox_3am_4am: 7,
      //disabled_3am_4am: true,

      colorBox_4am_5am: 'transparent',
      moveBox_4am_5am: 7,
      //disabled_4am_5am: true,

      colorBox_5am_6am: 'transparent',
      moveBox_5am_6am: 7,
      //disabled_5a_6am: true,

      colorBox_6am_7am: 'transparent',
      moveBox_6am_7am: 7,
      //disabled_6am_7am: true,

      colorBox_7am_8am: 'transparent',
      moveBox_7am_8am: 7,
      //disabled_7am_8am: true,

      colorBox_8am_9am: 'transparent',
      moveBox_8am_9am: 7,
      //disabled_8am_9am: true,

      colorBox_9am_10am: 'transparent',
      moveBox_9am_10am: 7,
      //disabled_9am_10am: true,

      colorBox_10am_11am: 'transparent',
      moveBox_10am_11am: 7,
      //disabled_10am_11am: true,

      colorBox_11am_12pm: 'transparent',
      moveBox_11am_12pm: 7,
      //disabled_11am_12pm: true,

      colorBox_12pm_1pm: 'transparent',
      moveBox_12pm_1pm: 7,
      //disabled_12pm_1pm: true 

      AMColor: "black",
      otherColor: 'black',
      PMColor: 'black',

      loc12: 0,
      otherLoc: 0,
      pmLoc: 0 

      


      



   }
   
trial() {
  this.setState({ colorBox_1_2pm: '#ff1c99'})
} 

colorChange() {
  /* if(this.state.colorBox_1_2pm == 'black'){
    this.setState({ colorBox_1_2pm: '#ff1c99' }) 
  }
  else{
    this.setState({ colorBox_1_2pm: 'black' }) 
  } */

}

colorChange2() {
  /* if(this.state.colorBox_2_3pm == 'black'){
    this.setState({ colorBox_2_3pm: '#ff1c99' }) 
  }
  else{
    this.setState({ colorBox_2_3pm: 'black' }) 
  } */

}


componentDidMount(){
  //var arr = this.trial();
  //var arr = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  var arr = [13] // 4
  var noAMPresent = !arr.includes(1) && !arr.includes(2) && !arr.includes(3) && !arr.includes(4) && !arr.includes(5) && !arr.includes(6) && !arr.includes(7) && !arr.includes(8) && !arr.includes(9) && !arr.includes(10)
  var noPMPresnet = !arr.includes(13) && !arr.includes(14) && !arr.includes(15) && !arr.includes(16) && !arr.includes(17) && !arr.includes(18) && !arr.includes(19) && !arr.includes(20) && !arr.includes(21) && !arr.includes(22) && !arr.includes(23)
  var noOtherPresent = !arr.includes(11) && !arr.includes(12)

  if(!arr.includes(11) && !arr.includes(12)){
    this.setState({ otherColor: 'white' }) 
  }


  if(noAMPresent == true){
    this.setState({ AMColor: 'white' }) 
  }
   
  if(noPMPresnet == true){
    this.setState({PMColor: 'white'})
  }

  if(noOtherPresent == true){
    this.setState({otherColor: 'white'})
  }
  
  if(noOtherPresent == true && noAMPresent == true){
    this.setState({pmLoc: 990})
  }

  if(noAMPresent == true && noPMPresnet == true){
    this.setState({otherLoc: 780})
  }
  

  

  if(arr.length != 0){
    for(let i = 0; i < arr.length; i++){

      if(arr[i] == 0){  //1 -- 2pm 
        if(i != 0){
          this.setState({ colorBox_12am_1am: '#ff1c99' })
        }
        else{
          this.setState({ colorBox_12am_1am: '#ff1c99' })
        }
      }

      if(arr[i] == 1){
        this.setState({ colorBox_1am_2am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_1am_2am: (arr[i]) * -60})
        }
      }

      if(arr[i] == 2){
        this.setState({ colorBox_2am_3am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_2am_3am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 3){
        this.setState({ colorBox_3am_4am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_3am_4am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 4){
        this.setState({ colorBox_4am_5am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_4am_5am: (arr[i]+1) * -52})
        }
      }

      if(arr[i] == 5){
        this.setState({ colorBox_5am_6am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_5am_6am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 6){
        this.setState({ colorBox_6am_7am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_6am_7am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 7){
        this.setState({ colorBox_7am_8am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_7am_8am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 8){
        this.setState({ colorBox_8am_9am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_8am_9am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 9){
        this.setState({ colorBox_9am_10am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_9am_10am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 10){
        this.setState({ colorBox_10am_11am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_10am_11am: (arr[i]) * -65})
        }
      }

      if(arr[i] == 11){
        this.setState({ colorBox_11am_12pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_11am_12pm: (arr[i]) * -70})
          this.setState({otherLoc: 786})
        }
      }

      if(arr[i] == 12){
        this.setState({ colorBox_11_12am: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_11_12am: (arr[i]) * -70})
          this.setState({otherLoc: 786})
        }
      }

      if(arr[i] == 13){
        this.setState({ colorBox_12pm_1pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_12pm_1pm: (arr[i]) * -75})
        }
      }

      if(arr[i] == 14){
        this.setState({ colorBox_1_2pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_1_2pm: (arr[i]) * -75})
        }
      }

      if(arr[i] == 15){
        this.setState({ colorBox_2_3pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_2_3pm: (arr[i]) * -74})
        }
      }

      if(arr[i] == 16){
        this.setState({ colorBox_3_4pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_3_4pm: (arr[i]) * -74})
        }
      }

      if(arr[i] == 17){
        this.setState({ colorBox_4_5pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_4_5pm: (arr[i]) * -74})
        }
      }

      if(arr[i] == 18){
        this.setState({ colorBox_5_6pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_5_6pm: (arr[i]) * -73})
        }
      }

      if(arr[i] == 19){
        this.setState({ colorBox_6_7pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_6_7pm: (arr[i]) * -73})
        }
      }

      if(arr[i] == 20){
        this.setState({ colorBox_7_8pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_7_8pm: (arr[i]) * -73})
        }
      }

      if(arr[i] == 21){
        this.setState({ colorBox_8_9pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_8_9pm: (arr[i]) * -72})
        }
      }

      if(arr[i] == 22){
        this.setState({ colorBox_9_10pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_9_10pm: (arr[i]) * -72})
        }
      }

      if(arr[i] == 23){
        this.setState({ colorBox_10_11pm: '#ff1c99' })
        if(i == 0){
          this.setState({moveBox_10_11pm: (arr[i]) * -72})
        }
      }

    }


  }
  else{
    this.setState({ AMColor: 'white' })
    Alert.alert("No times available")
  }
  
  
}


   render() {
      return (
        

          <ScrollView contentInset={{bottom: 100}}
            style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Select Time </Text>
              <Text style= {{
                 textAlign: 'center',
                 margin: 12,
                 fontWeight: "bold",
                 color: this.state.AMColor,
                 fontSize: 30
              }}> AM </Text>
            </View>


           

        

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_12am_1am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_12am_1am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_1_2pm}
            //visible = {false}
            onPress = {() => {this.colorChange()}}>

            <Text style = {styles.createButtonText}> 12am-1am </Text>
          </TouchableOpacity>



          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_1am_2am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_1am_2am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_2_3pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 1am-2am </Text>
          </TouchableOpacity>






          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_2am_3am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_2am_3am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_3_4pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 2am-3am </Text>
          </TouchableOpacity>
         
          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_3am_4am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_3am_4am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_4_5pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 3am-4am </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_4am_5am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_4am_5am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_5_6pm}
            onPress = {() => {this.colorChange2()}}>
            <Text style = {styles.createButtonText}> 4am-5am </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_5am_6am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_5am_6am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_6_7pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 5am-6am </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_6am_7am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_6am_7am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_7_8pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 6am-7am </Text>
          </TouchableOpacity>


          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_7am_8am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_7am_8am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_8_9pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 7am-8am</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_8am_9am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_8am_9am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_9_10pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 8am-9am </Text>
          </TouchableOpacity>


          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_9am_10am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_9am_10am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_10_11pm}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 9am-10am </Text>
          </TouchableOpacity>


          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_10am_11am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_10am_11am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 10am-11am </Text>
          </TouchableOpacity>

          <View>
            <Text style = {{
              textAlign: 'center',
              margin: 12,
              fontWeight: "bold",
              color: this.state.otherColor,
              fontSize: 30,
              bottom: this.state.otherLoc 
            
            }}> Other </Text> 
          </View>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_11am_12pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_11am_12pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 11am-12pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_11_12am,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_11_12am,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 11pm-12am </Text>
          </TouchableOpacity>

          <Text style = {
             {textAlign: 'center',
              margin: 12,
              fontWeight: "bold",
              color: this.state.PMColor,
              fontSize: 30,
              bottom: this.state.pmLoc}}> PM </Text> 

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_12pm_1pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_12pm_1pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 12pm-1pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_1_2pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_1_2pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 1pm-2pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_2_3pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_2_3pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 2pm-3pm </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_3_4pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_3_4pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 3pm-4pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_4_5pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_4_5pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 4pm-5pm </Text>
          </TouchableOpacity>


          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_5_6pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_5_6pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 5pm-6pm </Text>
          </TouchableOpacity>


          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_6_7pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_6_7pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 6pm-7pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_7_8pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_7_8pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 7pm-8pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_8_9pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_8_9pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 8pm-9pm </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_9_10pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_9_10pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 9pm-10m </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {
            {
              backgroundColor: this.state.colorBox_10_11pm,
              borderRadius: 13,
              borderWidth: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 380,
              height: 60,
              marginLeft: 18,
              marginTop: this.state.moveBox_10_11pm,
              marginBottom: 0,
              flexDirection: 'row',
              borderColor: "white"
            }}
            //disabled = {this.state.disabled_11_12am}
            onPress = {() => {this.colorChange2()}}>

            <Text style = {styles.createButtonText}> 10pm-11pm </Text>
          </TouchableOpacity>

          

         </ScrollView>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 100,
      
   },
   input: {
      margin: 16,
      height: 44,
      borderWidth: 0.7,
      borderRadius: 13,
      borderColor: "black",
      fontSize: 16
   },
   text: {
    textAlign: 'center',
    margin: 12,
    fontWeight: "bold",
    color: '#ff1c99',
    fontSize: 36
  },
  textAM: {
    textAlign: 'center',
    margin: 12,
    fontWeight: "bold",
    color: 'black',
    fontSize: 30
  },
   buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 30

   },
  createButtonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  }

  
})
