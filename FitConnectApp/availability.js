
import React, { Component } from 'react'
import { View, Switch, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert } from 'react-native'
import Slider from '@react-native-community/slider';
import SwitchSelector from 'react-native-switch-selector';
import RoundCheckbox from 'rn-round-checkbox';



class Inputs extends Component {

// All the states for the program
state = { 
   mondayLeftTime: 1,
   mondayRightTime: 1,
   tuesdayLeftTime: 1,
   tuesdayRightTime: 1,
   wedLeftTime: 1,
   wedRightTime: 1,
   thursdayLeftTime: 1,
   thursdayRightTime: 1,
   fridayLeftTime: 1, 
   fridayRightTime: 1,
   saturdayLeftTime: 1, 
   saturdayRightTime: 1,
   sundayLeftTime: 1, 
   sundayRightTime: 1,
   isSelectedMonday: false, 
   isSelectedTuesday: false,
   isSelectedWed: false,
   isSelectedThursday: false,
   isSelectedFriday: false, 
   isSelectedSaturday: false,
   isSelectedSunday: false,
   color: "grey",
   colorMonday: 'grey',
   colorTuesday: 'grey',
   colorWednesday: 'grey',
   colorThursday: 'grey',
   colorFriday: 'grey',
   colorSaturday: 'grey',
   colorSunday: 'grey',
   mondayleftS: null,
   mondayrightS: null,
   tuesdayleftS: null,
   tuesdayrightS: null,
   wedrightS: null,
   wedleftS: null,
   thursdayleftS: null,
   thursdayrightS: null,
   fridayleftS: null,
   fridayrightS: null,
   saturdayleftS: null,
   saturdayrightS: null, 
   sundaryrightS: null,
   sundayleftS: null,
   mondayLeftSliderStatus: true,
   mondayLeftSwitchStatus: true,
   mondayRightSliderStatus: true, 
   mondayRightSwitchStatus: true,
   tuesdayLeftSliderStatus: true,
   tuesdayLeftSwitchStatus: true,
   tuesdayRightSliderStatus: true, 
   tuesdayRightSwitchStatus: true,
   weddayLeftSliderStatus: true,
   weddayLeftSwitchStatus: true,
   weddayRightSliderStatus: true, 
   weddayRightSwitchStatus: true,
   thursdayLeftSliderStatus: true,
   thursdayLeftSwitchStatus: true,
   thursdayRightSliderStatus: true, 
   thursdayRightSwitchStatus: true,
   fridayLeftSliderStatus: true,
   fridayLeftSwitchStatus: true,
   fridayRightSliderStatus: true, 
   fridayRightSwitchStatus: true,
   saturdayLeftSliderStatus: true,
   saturdayLeftSwitchStatus: true,
   saturdayRightSliderStatus: true, 
   saturdayRightSwitchStatus: true,
   sundayLeftSliderStatus: true,
   sundayLeftSwitchStatus: true,
   sundayRightSliderStatus: true, 
   sundayRightSwitchStatus: true

  }

getVal(val){
}     

//Prints message when you click "Confirm"
confirm(){
  Alert.alert("Times Selected")
}


//Methods for selecting checkbox... disables/enables switches, sliders and color
mondayClick(){
  if(this.state.isSelectedMonday == true){
    this.setState({ isSelectedMonday: false })
    this.setState({ colorMonday: 'grey' }) 
    this.setState({mondayLeftSliderStatus: true})
    this.setState({mondayLeftSwitchStatus: true})
    this.setState({mondayRightSliderStatus: true})
    this.setState({mondayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorMonday: '#ff1c99' }) 
    this.setState({ isSelectedMonday: true }) 
    this.setState({mondayLeftSliderStatus: false})
    this.setState({mondayLeftSwitchStatus: false})
    this.setState({mondayRightSliderStatus: false})
    this.setState({mondayRightSwitchStatus: false})
  }
}

tuesdayClick(){
  if(this.state.isSelectedTuesday == true){
    this.setState({ isSelectedTuesday: false })
    this.setState({ colorTuesday: 'grey' }) 
    this.setState({tuesdayLeftSliderStatus: true})
    this.setState({tuesdayLeftSwitchStatus: true})
    this.setState({tuesdayRightSliderStatus: true})
    this.setState({tuesdayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorTuesday: '#ff1c99' }) 
    this.setState({ isSelectedTuesday: true }) 
    this.setState({tuesdayLeftSliderStatus: false})
    this.setState({tuesdayLeftSwitchStatus: false})
    this.setState({tuesdayRightSliderStatus: false})
    this.setState({tuesdayRightSwitchStatus: false})
  }
}
wednedsayClick(){
  if(this.state.isSelectedWed == true){
    this.setState({ isSelectedWed: false })
    this.setState({ colorWednesday: 'grey' }) 
    this.setState({weddayLeftSliderStatus: true})
    this.setState({weddayRightSliderStatus: true})
    this.setState({weddayLeftSwitchStatus: true})
    this.setState({weddayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorWednesday: '#ff1c99' }) 
    this.setState({ isSelectedWed: true }) 
    this.setState({weddayLeftSliderStatus: false})
    this.setState({weddayRightSliderStatus: false})
    this.setState({weddayLeftSwitchStatus: false})
    this.setState({weddayRightSwitchStatus: false})
  }
}
thursdayClick(){
  if(this.state.isSelectedThursday == true){
    this.setState({ isSelectedThursday: false })
    this.setState({ colorThursday: 'grey' }) 
    this.setState({thursdayLeftSliderStatus: true})
    this.setState({thursdayRightSliderStatus: true})
    this.setState({thursdayLeftSwitchStatus: true})
    this.setState({thursdayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorThursday: '#ff1c99' }) 
    this.setState({ isSelectedThursday: true }) 
    this.setState({thursdayLeftSliderStatus: false})
    this.setState({thursdayRightSliderStatus: false})
    this.setState({thursdayLeftSwitchStatus: false})
    this.setState({thursdayRightSwitchStatus: false})
  }
}
fridayClick(){
  if(this.state.isSelectedFriday == true){
    this.setState({ isSelectedFriday: false })
    this.setState({ colorFriday: 'grey' }) 
    this.setState({fridayLeftSliderStatus: true})
    this.setState({fridayRightSliderStatus: true})
    this.setState({fridayLeftSwitchStatus: true})
    this.setState({fridayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorFriday: '#ff1c99' }) 
    this.setState({ isSelectedFriday: true }) 
    this.setState({fridayLeftSliderStatus: false})
    this.setState({fridayRightSliderStatus: false})
    this.setState({fridayLeftSwitchStatus: false})
    this.setState({fridayRightSwitchStatus: false})
  }
}
saturdayClick(){
  if(this.state.isSelectedSaturday == true){
    this.setState({ isSelectedSaturday: false })
    this.setState({ colorSaturday: 'grey' }) 
    this.setState({saturdayLeftSliderStatus: true})
    this.setState({saturdayRightSliderStatus: true})
    this.setState({saturdayLeftSwitchStatus: true})
    this.setState({saturdayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorSaturday: '#ff1c99' }) 
    this.setState({ isSelectedSaturday: true }) 
    this.setState({saturdayLeftSliderStatus: false})
    this.setState({saturdayRightSliderStatus: false})
    this.setState({saturdayLeftSwitchStatus: false})
    this.setState({saturdayRightSwitchStatus: false})
  }
}
sundayClick(){
  if(this.state.isSelectedSunday == true){
    this.setState({ isSelectedSunday: false })
    this.setState({ colorSunday: 'grey' }) 
    this.setState({sundayLeftSliderStatus: true})
    this.setState({sundayRightSliderStatus: true})
    this.setState({sundayLeftSwitchStatus: true})
    this.setState({sundayRightSwitchStatus: true})
  }
  else{
    this.setState({ colorSunday: '#ff1c99' }) 
    this.setState({ isSelectedSunday: true }) 
    this.setState({sundayLeftSliderStatus: false})
    this.setState({sundayRightSliderStatus: false})
    this.setState({sundayLeftSwitchStatus: false})
    this.setState({sundayRightSwitchStatus: false})
  }
}

   render() {
      return (

          <ScrollView contentInset={{bottom: 120}}
            style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Select Availability </Text>
            </View>
            





            {/* Logic for Monday  */}
            <ScrollView horizontal = {true} scrollEnabled = {false}>
              <Text style={styles.buffer}>
                  soo
              </Text>

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedMonday}
                onValueChange = {() => {this.mondayClick()}}
              />
             
              <Text style = {styles.days}> Monday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.mondayLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.mondayRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.mondayLeftSliderStatus}
                vertical = {true}
                minimumValue={1}
                maximumValue={12}
                value={this.state.mondayLeftTime}
                onValueChange={val => this.setState({ mondayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.mondayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.mondayRightTime}
                onValueChange={val => this.setState({ mondayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.mondayLeftSwitchStatus}
                onPress={value => this.setState({ mondayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorMonday} 
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }}
                disabled = {this.state.mondayRightSwitchStatus}
                initial={0}
                onPress={value => this.setState({ mondayrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorMonday} 
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>

            {/* Logic for Tuesday  */}   

           <Text style = {styles.buffer}></Text> 
           <Text style={styles.buffer}></Text>
           <Text style={styles.buffer}></Text>

            <ScrollView horizontal = {true} scrollEnabled = {false}>
              
              
              <Text style={styles.buffer}>soo</Text>
              

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedTuesday}
                onValueChange = {() => {this.tuesdayClick()}}
              />
             
              <Text style = {styles.days}> Tuesday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.tuesdayLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.tuesdayRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.tuesdayLeftSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.tuesdayLeftTime}
                onValueChange={val => this.setState({ tuesdayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.tuesdayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.tuesdayRightTime}
                onValueChange={val => this.setState({ tuesdayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.tuesdayLeftSwitchStatus}
                onPress={value => this.setState({ tuesdayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorTuesday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }
                }
                initial={0}
                disabled = {this.state.tuesdayRightSwitchStatus}
                onPress={value => this.setState({ tuesdayrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorTuesday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>

            {/* Logic for Wednesday  */} 

            <Text style = {styles.buffer}></Text> 
            <Text style={styles.buffer}></Text>
            <Text style={styles.buffer}></Text>

            <ScrollView horizontal = {true} scrollEnabled = {false}>
              
              
              <Text style={styles.buffer}>soo</Text>
              

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedWed}
                onValueChange = {() => {this.wednedsayClick()}}
              />
             
              <Text style = {styles.Wednesday}> Wednesday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.wedLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.wedRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.weddayLeftSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.wedLeftTime}
                onValueChange={val => this.setState({ wedLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.weddayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.wedRightTime}
                onValueChange={val => this.setState({ wedRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.weddayLeftSwitchStatus}
                onPress={value => this.setState({ wedleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorWednesday} 
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }
                }
                initial={0}
                disabled = {this.state.weddayRightSwitchStatus}
                onPress={value => this.setState({ wedrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorWednesday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>


            {/* Logic for Thursday  */} 

            <Text style = {styles.buffer}></Text> 
            <Text style={styles.buffer}></Text>
            <Text style={styles.buffer}></Text>

            <ScrollView horizontal = {true} scrollEnabled = {false}>
              
              
              <Text style={styles.buffer}>soo</Text>
              

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedThursday}
                onValueChange = {() => {this.thursdayClick()}}
              />
             
              <Text style = {styles.days}> Thursday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.thursdayLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.thursdayRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.thursdayLeftSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.thursdayLeftTime}
                onValueChange={val => this.setState({ thursdayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.thursdayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.thursdayRightTime}
                onValueChange={val => this.setState({ thursdayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.thursdayLeftSwitchStatus}
                onPress={value => this.setState({ thursdayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorThursday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.thursdayRightSwitchStatus}
                onPress={value => this.setState({ thursdayrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorThursday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>


            {/* Logic for Friday  */} 

            <Text style = {styles.buffer}></Text> 
            <Text style={styles.buffer}></Text>
            <Text style={styles.buffer}></Text>

            <ScrollView horizontal = {true} scrollEnabled = {false}>
              
              
              <Text style={styles.buffer}>soo</Text>
              

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedFriday}
                onValueChange = {() => {this.fridayClick()}}
              />
             
              <Text style = {styles.days}> Friday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.fridayLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.fridayRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.fridayLeftSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.fridayLeftTime}
                onValueChange={val => this.setState({ fridayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.fridayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.fridayRightTime}
                onValueChange={val => this.setState({ fridayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.fridayLeftSwitchStatus}
                onPress={value => this.setState({ fridayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorFriday} 
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }
                }
                initial={0}
                disabled = {this.state.fridayRightSwitchStatus}
                onPress={value => this.setState({ fridayrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorFriday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>



           {/* Logic for Saturday  */} 
          
            <Text style = {styles.buffer}></Text> 
            <Text style={styles.buffer}></Text>
            <Text style={styles.buffer}></Text>

            <ScrollView horizontal = {true} scrollEnabled = {false}>
              
              
              <Text style={styles.buffer}>soo</Text>
              

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedSaturday}
                onValueChange = {() => {this.saturdayClick()}}
              />
             
              <Text style = {styles.days}> Saturday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.saturdayLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.saturdayRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.saturdayLeftSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.saturdayLeftTime}
                onValueChange={val => this.setState({ saturdayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.saturdayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.saturdayRightTime}
                onValueChange={val => this.setState({ saturdayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.saturdayLeftSwitchStatus}
                onPress={value => this.setState({ saturdayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorSaturday} 
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }
                }
                initial={0}
                disabled = {this.state.saturdayRightSwitchStatus}
                onPress={value => this.setState({ saturdayrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorSaturday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>


          {/* Logic for Sunday  */} 

            <Text style = {styles.buffer}></Text> 
            <Text style={styles.buffer}></Text>
            <Text style={styles.buffer}></Text>

            <ScrollView horizontal = {true} scrollEnabled = {false}>
              
              
              <Text style={styles.buffer}>soo</Text>
              

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelectedSunday}
                onValueChange = {() => {this.sundayClick()}}
              />
             
              <Text style = {styles.days}> Sunday </Text>

              <Text style={styles.sliderTextLeft}>
                {this.state.sundayLeftTime}
              </Text>      
              <Text style={styles.sliderTextRight}>
                {this.state.sundayRightTime}
              </Text> 
              
            </ScrollView>
         

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
                disbaled = {this.state.sundayLeftSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.sundayLeftTime}
                onValueChange={val => this.setState({ sundayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                disabled = {this.state.sundayRightSliderStatus}
                minimumValue={1}
                maximumValue={12}
                value={this.state.sundayRightTime}
                onValueChange={val => this.setState({ sundayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                disabled = {this.state.sundayLeftSwitchStatus}
                onPress={value => this.setState({ sundayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorSunday} 
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />
              <Text style={styles.buffer}>
                  soasdassd
              </Text>


              <SwitchSelector
                padding
                style={{ width: 100 }
                }
                initial={0}
                disabled = {this.state.sundayRightSwitchStatus}
                onPress={value => this.setState({ sundaryrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.colorSunday}
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>

             <TouchableOpacity style = {styles.createContainer}
                onPress = {() => {this.confirm()}}>
                <Text style = {styles.createButtonText}> Confirm </Text>
            </TouchableOpacity>
           
          
        
            </ScrollView> 

      )
   }
}



// Styles for switches, sliders, text, buttons... 
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
    fontSize: 36,
    marginLeft: 0,
    paddingBottom: 20

   },
   buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 30

   },

  
  sliderTextLeft:{
    color: 'black',
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 106,
    marginTop: 46,
    position: 'absolute'

   },
   sliderTextRight:{
    color: 'black',
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 46,
    marginLeft: 292,
    position: 'absolute'

   },
   buffer: {
    color: 'white',
    paddingLeft: 20
   },
   days:{
    color: 'black',
    fontSize: 30,
    marginTop: 10,
    marginLeft: 70,
    marginBottom: 30
   },
   Tuesday:{
     color: 'black',
     fontSize: 30,
     marginTop: 66,
     marginBottom: 20,
     marginLeft: 146,
   },
   Wednesday:{
    color: 'black',
    fontSize: 30,
    marginTop: 10,
    marginLeft: 46,
    marginBottom: 30
  },
  Friday:{
    color: 'black',
    fontSize: 30,
    marginTop: 66,
    marginBottom: 20,
    marginLeft: 164,
  },
  createButtonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  createContainer: {
    backgroundColor: '#ff1c99',
    borderRadius: 13,
    borderWidth: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 60,
    marginLeft: 33,
    marginTop: 70,
    flexDirection: 'row',
    borderColor: "black"
   }
})
