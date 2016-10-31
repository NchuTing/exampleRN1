import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

var pixel=1/PixelRatio.get()

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <View style={styles.container} >
          
            <Text>TODO</Text>
            <TodoList items={this.state.items} />
             <View style={[styles.container1,]}>
               <View style={[styles.inputRow]}> 
                  <TextInput style={styles.input}
                          value={this.state.text}
                          underlineColorAndroid='transparent'  
                          onChangeText={this.handleChange}
                          placeholder="新增"
                          placeholderTextColor='#CACACA' />
                </View>
                <TouchableOpacity style={styles.btn}
                onPress={this.handleSubmit} >
                   <Text style={styles.text}>{'新增a #' + (this.state.items.length)}</Text>
                </TouchableOpacity>
            </View>
          
      </View>
    );
  }

  handleChange(e) {
    this.setState({text: e});
  }

  handleSubmit() {
    
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <View style={styles.list}>
        {this.props.items.map(item => (
          <Text key={item.id}>* {item.text}</Text>
        ))}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    //alignItems:"center",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container1:{
    flexDirection:'row',
    borderBottomWidth:pixel,
    borderTopWidth:pixel,
    borderColor:'#ddd',
    backgroundColor:'#ECEDF1',
    paddingHorizontal:10,
    paddingVertical:6,
  },
  inputRow:{
    backgroundColor:'#fff',
    flex:1,
    borderRadius:8,
    //borderWidth:pixel,
  },
  input:{
    flex:1,
    padding:6,
    fontSize:16,
  },
  btn:{
      borderRadius:6,
      backgroundColor:'#12B7F6',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:16,
      height:40,
      marginLeft:16,
  },
  text:{
    color:'#fff',
  },
  list:{
    marginTop:16,
    marginBottom:16,
    paddingLeft:10
  }

});

export default App;
