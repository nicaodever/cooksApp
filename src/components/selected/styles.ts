import { theme } from "@//theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
     backgroundColor:theme.colors.black,
     padding: 24,
     bottom:28,
     width:"100%",
     alignSelf:"center",
     borderRadius: theme.borderRadius.lg,
     position:"absolute",
    },
    header:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom:34,
    },
    text:{
       fontFamily: theme.fonts.family.regular,
       color: theme.colors.white, 
       fontSize: theme.fonts.size.body.sm
    },
    
})