import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({picture,name,description})=> {
    return (
        <View>
            <Text>
                {"\n"}
            </Text>
            <View style={{ flexDirection: 'row'}}>
                <Icon name="sailboat" size={20} color="#747474" />
                <Text style={{ fontFamily: 'FontAwesome6', fontSize: 18, textTransform: 'uppercase', marginLeft: 5, color: '#747474' }}>
                    {name}
                </Text>
            </View>
            <Text style={{color: '#747474'}}>
                {description}
            </Text>
            <Image source={picture} style={{width: 400, height: 300}} />
        </View>
    );
};

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{color: '#747474'}}>
                        GetABoat - For Sale
                    </Text>
                    <Boat
                        picture={require('./img/sea_ray.jpg')}
                        name="Sea Ray 500 Sundancer"
                        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    />
                    <Boat
                        picture={require('./img/four_winns.jpg')}
                        name="Four Winns Horizon 180"
                        description="A sporty look and refined details truly set the Horizon 180 above all others."
                    />
                    <Boat
                        picture={require('./img/flipper.jpg')}
                        name="Flipper 640 ST"
                        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    />
                    <Boat
                        picture={require('./img/princess.jpg')}
                        name="Princess V48"
                        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    />
                    <Boat
                        picture={require('./img/bayliner.jpg')}
                        name="Bayliner 175 Bowrider"
                        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    />
                    <Boat
                        picture={require('./img/fairline.jpg')}
                        name="Fairline Targa 47"
                        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    />

                </View>
            </ScrollView>
        );
    }
}

export default AllBoats;
