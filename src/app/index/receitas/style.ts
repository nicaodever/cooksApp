import { theme } from "@//theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        padding:28,
        marginTop: 48,
        width:"100%",
    },
    title:{
        fontFamily:theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.md,
        marginHorizontal:6,
    },
    receitas:{
        padding:32,
    },
    receitasContent:{
        gap:16,
    }
})