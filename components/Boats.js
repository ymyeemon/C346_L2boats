import {Image, ScrollView, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const Boat = ({name, description, icon_name, picture}) => {
    return (
        <ScrollView>
            <Icon name = {icon_name} size={20}><Text>{name}</Text></Icon>
            <Text>{description}</Text>
            <Image source={picture} style={{width:400, height: 400}}/>
        </ScrollView>
    );
}

export default Boat;
