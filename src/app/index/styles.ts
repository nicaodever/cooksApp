import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { StyleSheet } from "react-native";
import { theme } from "@//theme";
export const style = StyleSheet.create({
    container:{
       width:"100%",
       height:"100%",
       padding:24,
       
    },
    title:{
        fontSize: theme.fonts.size.heading.xl,
        fontFamily: theme.fonts.family.bold,
        lineHeight:44,
        marginTop:40
    },
    subtitulo:{
        fontFamily: theme.fonts.family.medium,
        fontSize: theme.fonts.size.heading.xl,

    },
    descricao:{
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.body.md,
        marginTop:12,
        marginBottom:24,
        color: theme.colors.gray_400
    },
    containerScroll:{
        width:"100%",
        flexWrap:"wrap",
        flexDirection:"row",
        gap:6
    }
})