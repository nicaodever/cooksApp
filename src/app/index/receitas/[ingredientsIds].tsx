import { View, Text,StatusBar, FlatList } from "react-native";
import { style } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@//components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@//services";
import { Ingredients } from "@//components/Ingredients";
import { Ingredient } from "@//components/Ingredient";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { findByIds } from "@//services/ingredientsService";

export default function Receitas(){
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
  const params = useLocalSearchParams<{ ingredientsIds: string }>()
  const ingredientesIds = params.ingredientsIds.split(",")
    
     useEffect(() =>{
        services.ingredients.findByIds(ingredientesIds).then(setIngredients)
     }, [])
     useEffect(() =>{
       services.recipes.findByIngredientsIds(ingredientesIds).then(setRecipes)
    }, [])
     

    return(
        <View style={style.container}>
        <StatusBar/>

            <View style={style.header}>
            <MaterialIcons name="arrow-back" size={32} 
            onPress={() => router.back()} />
            <Text style={style.title}>Ingredientes</Text>   
            </View>
            <Ingredients ingredients={ingredients} />
 <FlatList   
data={recipes}
keyExtractor={(item) => item.id}
renderItem={({item}) => <Recipe recipe={item} onPressOut={() =>
 router.navigate('/recipe/' + item.id )}/>}
style={style.receitas}
contentContainerStyle={style.receitasContent}
showsVerticalScrollIndicator={false}
numColumns={2}
columnWrapperStyle={{gap:16}}
/> 
        </View>
    )
}