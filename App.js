import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import TaskCard from './TaslCard';

export default function App() {
 
 const  [task,setTask] =useState();
const [taskArray,setTasArray]=useState([]);
const [key,setKey]= useState(0);


 const addTask=()=>{
  
  Keyboard.dismiss();
  setTasArray([...taskArray,task])
  setKey(key+1);
  console.log(task);
  setTask(null)
 }

  return (
      <View style={styles.container}>
      <View style={styles.tasksArea}>
        <Text style={styles.headerText}>Tasks</Text>
        <View>
        <FlatList
        data={taskArray}
        renderItem={
          ({item})=>{
            return(
              <TaskCard  text={item.text} array ={taskArray} setArray={setTasArray} keyy={item.key} />

            );
          }
        }
        />
        </View>
      </View>
      
      
        <KeyboardAvoidingView style={styles.footer}>
          <View style={styles.inputView}>
            <TextInput style={styles.placeholder}
            placeholder='Type Here' onChangeText={text=> setTask({
              key: key ,
              text:text

            })} value={task || ''}
            />
          </View>
          <View>
            <TouchableOpacity onPress={()=> addTask()}>
              <Text style={styles.button}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#385d8f',
    justifyContent:"space-between",
    alignItems:"center"
    
  },
 
  headerText:{
    
    color:"white",
    alignItems:'center',
    fontSize: 30,
    fontWeight: "bold",
    padding:30
  },
  footer:{
    position:"absolute",
    marginHorizontal:30,
    padding:10,
    borderRadius:10,
    backgroundColor:"white",
    bottom:20,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    
  },
  inputView:{

    padding:15,
    backgroundColor:"white",
    borderRadius:60,
    borderColor:"#385d8f",
    borderWidth:1,
    width:230,
    height:50
  },
  button:{
    padding:10,
    paddingHorizontal:15,
    borderRadius:30,
    backgroundColor:"#385d8f",
    fontSize:20,
    color:"white"
  }
});
