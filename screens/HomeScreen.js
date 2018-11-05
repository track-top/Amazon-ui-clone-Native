import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Container,Content,Header,Left,Right,Icon,Item,Input} from 'native-base'

import FAIcon from 'react-native-vector-icons/FontAwesome'
export default class HomeScreen extends Component {
    render(){
        return (
            <Container>
               <Header style={{ backgroundColor: '#3a455c',
                    height: 65, borderBottomColor: '#757575'}}>
                    <Left style={{ flexDirection: 'row'}}>
                        <Icon name="md-menu" style={{color:'white', marginRight: 15}}/>
                        <FAIcon name="amazon" style={{fontSize: 32, color: 'white', marginRight: 15}} />
                    </Left>
                    <Right>
                        <Icon name='md-cart' style={{color: 'white'}} />
                    </Right>
               </Header>
               <View style={{position: 'absolute', left:0,right:0, top:90,height:70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
                    <TouchableOpacity>
                        <View style={{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>
                            <Text style={{fontSize: 12 }}>Shop by</Text>
                            <Text style={{fontWeight: 'bold'}}>Category</Text>
                        </View>
                    </TouchableOpacity>

                <View style={{flex: 1, height: '100%', marginLeft: 5, justifyContent: 'center'}}>
                    <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4}}>
                        <Icon name="ios-search" style={{fontSize: 20, paddingTop: 5}}/>
                        <Input placeholder= "Search"/>
                    </Item>
                </View>
                </View>


                <Content style={{backgroundColor: '#d5d5d6', marginTop: 70 }}>
                <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5,
                        alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Hello, Angel M.</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Your Account </Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 18}} />
                    </View>
                </View>

                </Content>
        </Container>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });