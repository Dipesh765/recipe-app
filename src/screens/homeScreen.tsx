import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Box, Center, Heading, Text, ScrollView, Input } from "native-base";
import { Pressable } from "react-native";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import Card from "../components/card";
import LoadingComponent from "../components/loading";
import { setIdOfRecipe } from "../redux/reducers/recipe";
import { homePageQuery } from "../utils/queries";
export type RootStackParamList = {
    Home: undefined;
    Recipe: undefined;
};
type screenProp = StackNavigationProp<RootStackParamList, 'Home'>;
export default function HomeScreen(){
    const queryFn = homePageQuery()
    const {data, isLoading} = useQuery('homePage', queryFn)
    const dispatch = useDispatch()
    const navigation = useNavigation<screenProp>();


    const setRecipeId =(id: any)=>{
        console.log('presssed')
        dispatch(setIdOfRecipe(id))
        navigation.navigate('Recipe')
    }

    
    return(
        <Box mt={10}>
            <Center>
            <Heading>Recipe Application</Heading>
            {
                isLoading ? 
                <Box mt={20}>
                    <Center>
                        <LoadingComponent/>
                    </Center>
                </Box>
                 :
                <ScrollView>
                    <Input mt={2} placeholder="Search for dishes..."/>

                    {
                        data.searchResults[0].results.map((data:any, index:number)=>{
                            return(
                                    <Pressable key={index} onPress={()=>setRecipeId(data.id)}>
                                        <Card data={data}/>
                                    </Pressable>
                            )
                        })
                    }
                    
                </ScrollView>

            }
            <Text>All rights reserved Hello World</Text>
            
        </Center>
        </Box>
    )
}