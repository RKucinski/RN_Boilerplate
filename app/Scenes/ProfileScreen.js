import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { example } from '@actions'

class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'Welcome to Jane Profile',
    };
    render() {
      const {navigate} = this.props.navigation
      return (
        <View>
          <Button
            title="Click Example"
            onPress={() => {
              this.props.example()
              navigate('Home', {name: 'Home'})
            }}
          />
        </View>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      favoritesFilm: state.favoritesFilm
    }
  }

  export default connect(mapStateToProps, {example})(ProfileScreen)