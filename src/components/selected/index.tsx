import Animated, {SlideInUp, BounceOutDown} from "react-native-reanimated";
import {View, Text} from 'react-native';

import { style } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@//theme";
import { Button } from "../Button";

type Props = {
    quantity: number,
    onClear: () => void
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props){
   return <>
   <Animated.View style={style.container} 
   entering={SlideInUp} 
   exiting={BounceOutDown.duration(400)} >
    <View style={style.header}>
      <Text style={style.text}> {quantity} selected ingredients</Text>
      <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.white}/>
    </View>
    <Button title="search" onPress={onSearch}/>
   </Animated.View>
   </>
}