import { Slot } from "expo-router";

import{
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    useFonts,
} from "@expo-google-fonts/poppins";

export default function Layuou(){
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    })
    if(!fontsLoaded){

    }
    return fontsLoaded ? <Slot/> : null;
}