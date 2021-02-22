
import React, { Component } from 'react'
import { View, Switch, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert } from 'react-native'
import Slider from '@react-native-community/slider';
import SwitchSelector from 'react-native-switch-selector';
import RoundCheckbox from 'rn-round-checkbox';



class Inputs extends Component {
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
   isSelected: false, 
   color: "gray",
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
   sundayleftS: null

  }
getVal(val){
}     
textboxErrors(){
  RoundCheckbox.checked = true 
  if(this.state.isSelected == true){
    this.setState({ isSelected: false }) 
  }
  else{
    this.setState({ isSelected: true }) 
  }
  this.setState({ color: '#ff1c99' }) 
}


   render() {
      return (

          <ScrollView contentInset={{bottom: 120}}
            style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Select Availability </Text>
            </View>
            
            <ScrollView horizontal = {true} scrollEnabled = {false}>
              <Text style={styles.buffer}>
                  soo
              </Text>

              <RoundCheckbox
                size={40}
                borderColor= "black"
                backgroundColor= '#ff1c99'
                iconColor	= 'white'
                checked = {this.state.isSelected}
                onValueChange = {() => {this.textboxErrors()}}
              />
             
              <Text style = {styles.days}> Monday </Text>
              
            </ScrollView>


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>
            
              <SwitchSelector
                style={{ width: 100 }}
                //disabled = 'false'
                initial={0}
                onPress={value => this.setState({ mondayleftS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor= {this.state.color} 
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
                onPress={value => this.setState({ mondayrightS: value })}
                textColor= 'grey'
                selectedColor='white'
                buttonColor='grey'
                borderColor='grey'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
            
              <Slider
                style={{ width: 150 }}
                step={1}
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
                minimumValue={1}
                maximumValue={12}
                value={this.state.mondayRightTime}
                onValueChange={val => this.setState({ mondayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.mondayLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.mondayRightTime}
             </Text> 
























             <View>
              <Text style = {styles.Tuesday}> Tuesday </Text>
            </View>
             
            </ScrollView>    
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>

              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                onPress={value => this.setState({ tuesdayleftS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
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
                onPress={value => this.setState({ tuesdayrightS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
              <Slider
                style={{ width: 150 }}
                step={1}
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
                minimumValue={1}
                maximumValue={12}
                value={this.state.tuesdayRightTime}
                onValueChange={val => this.setState({ tuesdayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.tuesdayLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.tuesdayRightTime}
             </Text> 














             <View>
              <Text style = {styles.Wednesday}> Wednesday </Text>
            </View>
             
            </ScrollView>    
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>

              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                onPress={value => this.setState({ wedleftS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
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
                onPress={value => this.setState({ wedrightS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>
           <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
              <Slider
                style={{ width: 150 }}
                step={1}
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
                minimumValue={1}
                maximumValue={12}
                value={this.state.wedRightTime}
                onValueChange={val => this.setState({ wedRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.wedLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.wedRightTime}
             </Text> 














             <View>
              <Text style = {styles.Tuesday}> Thursday </Text>
            </View>
             
            </ScrollView>    

            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>

              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                onPress={value => this.setState({ thursdayleftS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
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
                onPress={value => this.setState({ thursdayrightS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
              <Slider
                style={{ width: 150 }}
                step={1}
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
                minimumValue={1}
                maximumValue={12}
                value={this.state.thursdayRightTime}
                onValueChange={val => this.setState({ thursdayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.thursdayLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.thursdayRightTime}
             </Text> 











             <View>
              <Text style = {styles.Friday}
              > Friday </Text>
            </View>
             
            </ScrollView>    
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>

              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                onPress={value => this.setState({ fridayleftS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
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
                onPress={value => this.setState({ fridayrightS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
              <Slider
                style={{ width: 150 }}
                step={1}
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
                minimumValue={1}
                maximumValue={12}
                value={this.state.fridayRightTime}
                onValueChange={val => this.setState({ fridayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.fridayLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.fridayRightTime}
             </Text> 













             <View>
              <Text style = {styles.Tuesday}> Saturday </Text>
            </View>
             
            </ScrollView>   
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>

              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                onPress={value => this.setState({ saturdayleftS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
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
                onPress={value => this.setState({ saturdayrightS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
              <Slider
                style={{ width: 150 }}
                step={1}
                minimumValue={1}
                maximumValue={12}
                value={this.state.sat}
                onValueChange={val => this.setState({ saturdayLeftTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />

              <Text style={styles.buffer}>
                  buf
              </Text>
               <Slider
                style={{ width: 150 }}
                step={1}
                minimumValue={1}
                maximumValue={12}
                value={this.state.saturdayRightTime}
                onValueChange={val => this.setState({ saturdayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.saturdayLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.saturdayRightTime}
             </Text> 












             <View>
              <Text style = {styles.Tuesday}> Sunday </Text>
            </View>
          
            </ScrollView>   
              
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  soooos
              </Text>

              <SwitchSelector
                style={{ width: 100 }}
                initial={0}
                onPress={value => this.setState({ sundayleftS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
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
                onPress={value => this.setState({ sundaryrightS: value })}
                textColor= '#ff1c99'
                selectedColor='white'
                buttonColor='#ff1c99'
                borderColor='#ff1c99'
                hasPadding
                options={[
                        { label: "AM", value: "AM"}, 
                        { label: "PM", value: "PM" } 
                ]}
              />

            </ScrollView>
            
            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.buffer}>
                  so
              </Text>
              <Slider
                style={{ width: 150 }}
                step={1}
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
                minimumValue={1}
                maximumValue={12}
                value={this.state.sundayRightTime}
                onValueChange={val => this.setState({ sundayRightTime: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
            </ScrollView> 


            <ScrollView horizontal = {true} scrollEnabled = {false}> 
              <Text style={styles.sliderTextLeft}>
                {this.state.sundayLeftTime}
              </Text>      
             <Text style={styles.sliderTextRight}>
                {this.state.sundayRightTime}
             </Text> 

             <TouchableOpacity style = {styles.createContainer}
                onPress = {() => {this.textboxErrors()}}>
                <Text style = {styles.createButtonText}> Confirm </Text>
            </TouchableOpacity>
           
            <View>
              <Text style = {styles.Tuesday}>  </Text>
            </View>
            
          
             
            </ScrollView> 

            


         










          
         
         

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
    position: 'absolute'

   },
   sliderTextRight:{
    color: 'black',
    fontWeight: "bold",
    fontSize: 24,
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
    marginBottom: 20
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
    marginTop: 66,
    marginBottom: 20,
    marginLeft: 130,
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
