//import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import {Text,StyleSheet,View, TouchableOpacity} from "react-native";
const TaskCard =(props)=>{


const Deletetask=()=>{
    let arr = props.array.filter((item)=>{
       return item.key!==props.keyy
    })
    props.setArray(arr)

}
    return(
        <View style={styles.card}>
            <View style={styles.textArea}>
            {/* <CheckBox
              value={state}
              onValueChange={value =>
                setState({
                    ...checkState,
                  state: value,
                })
              }
            /> */}
            <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
            <Text style={{maxWidth:"75%"}}>{props.text}</Text>

            </View>
            <View>
                <TouchableOpacity onPress={()=> Deletetask()}>
                    <Text style={{color:"red"}}>Delete</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );

}

const styles= StyleSheet.create({
    card:{
        width:"100%",
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20
    },
    textArea:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"
    },
    checkBox:{
        height:20,
        width:20,
        borderColor:"green",
        borderWidth:1,
        marginRight:20

    }

});

export default TaskCard;