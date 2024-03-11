import { View, Text, StatusBar, SafeAreaView, ScrollView, Alert } from 'react-native';
import { style } from './styles';
import { useEffect, useState } from 'react';
import { Selected } from '@//components/selected';
import { router } from 'expo-router';
import { services } from '@//services';
import { Ingredient } from '@//components/Ingredient';
import { findAll } from '@//services/ingredientsService';

export default function Main(){
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])


  function handleToggleSelected(value: string){
     if (selected.includes(value)){
      return setSelected((state) => state.filter((item) => item !== value))
     }
     setSelected((state) => [...state, value])
  }
  function handleClearSelected(){
     Alert.alert("Clean","Do you want to clean everything?", [
     {text:"No", style:"cancel"},
     {text:"Yes", onPress: () => {setSelected([])}}
    ])
    
  }
  function handleSearch(){ 
   router.navigate("/receitas/" + selected)

  }

  useEffect(() =>{
    services.ingredients.findAll().then(setIngredients)
  }, [])
  
    return <>
    <SafeAreaView>
    <StatusBar/>
     <View style={style.container}>
       
       <Text style={style.title}>Escolhas{"\n"}
       <Text style={style.subtitulo}>seus ingredients</Text>
     </Text>
       <Text style={style.descricao}>Descubra receitas conforme os ingredientes você tem disponivel </Text>
       <ScrollView 
     contentContainerStyle={style.containerScroll} 
    showsVerticalScrollIndicator={false}
    >
        {ingredients.map((item, index) => (
            <Ingredient
            key={item.id} 
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(item.id)}
            onPress={() =>  handleToggleSelected(item.id) } />
        ))}
    </ScrollView>
    { selected.length > 0 && (
         <Selected quantity={selected.length} 
         onClear={handleClearSelected} 
         onSearch={handleSearch}/>
    )
     
    }
 
   </View>
     </SafeAreaView>
    
    </>
}