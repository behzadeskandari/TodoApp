import React from 'react';
import {Text , View , StyleSheet ,TextInput, ScrollView,TouchableOpacity} from 'react-native'
import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Note from './Note';
// import { Container } from './styles';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
  render(){
      let notes = this.state.noteArray.map((val,key) => {
        return <Note key={key} keyval={key} val={val}
            deleteMethod={() => this.deleteNote(key)}
        />
      })
    return (
        <View styles={styles.container}>
            <View style={styles.header}>
                    <Text style={styles.headerText}>-- NOTER </Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText} 
                style={styles.TextInput} placeholder=">Note" placeholderTextColor="white" underlineColorAndroid="transparent">
                     

                </TextInput>
            </View>
            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )  
  }
  deleteNote(key){
      this.state.noteArray.splice(key,1)
      this.setState({noteArray : this.state.noteArray})
  }
  addNote(){
    if(this.state.noteText){

        var d = new Date();
        this.state.noteArray.push({
            'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/"+ d.getDate(),
            'note': this.state.noteText
        });
        this.setState({noteArray :this.state.noteArray})
        this.setState({noteText: ''})
    }
  }
    
}

export default Main;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    header:{
        backgroundColor: '#e91e63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',height: 150
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        padding: 32,
    },
    scrollContainer:{
        flex: 1,
        marginBottom: 100,
        height: 150
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        top:0,
        right: 0,
        zIndex: 10,
    },
    TextInput:{
        alignSelf: 'stretch',
        color: '#fff',
        padding:20,
        marginTop: 100,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 0,
        top: 350,
        left:300,
        backgroundColor: '#E91E63',
        width:90,
        height: 90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    }
})