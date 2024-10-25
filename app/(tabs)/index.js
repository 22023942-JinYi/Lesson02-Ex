import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

//Testing 1
/*const Welcome = ({code,name})=> {
  return (
    <View>
      <Text>
        {code} - {name} is easy.
      </Text>
    </View>
  );
}; */
/*class ModuleInfo extends React.Component {
  render() {
    return (
      <View>
        <Text>These:</Text>
        <Welcome code="C326" name="Mobile App Development" />
      </View>
    );
  }
}*/


const Movie = ({poster,title,year, icon_name})=> {
    return (
        <View>
            <Image source={poster} style={{width: 400, height: 500}} />
            <Text>
                {title} {year}
            </Text>
            <Icon name={icon_name} size={20} color="#B23B23" />
        </View>
    );
};

class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Movie
                        poster={require('./img/doctor-sleep.jpg')}
                        title="Doctor Sleep"
                        year="2019"
                        icon_name="skull"
                    />
                    <Movie poster={require('./img/midway.jpg')}
                           title="Midway"
                           year="2020"
                           icon_name="person-rifle"
                    />
                </View>
            </ScrollView>
        );
    }
}

export default AllMovies;


