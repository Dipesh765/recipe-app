import React from "react";
import { AspectRatio, Box, Center, CheckIcon, Heading, HStack, Image, ScrollView, Text } from "native-base";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import LoadingComponent from "../components/loading";
import { RootState } from "../redux/store";
import {getRecipeInformation} from '../utils/queries'
import RenderHtml, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html';
import { useWindowDimensions } from "react-native";

export default function RecipeDetail(){
    const selector = useSelector((state: RootState)=> state.recipe)
    const id = selector.id
    const querFn = getRecipeInformation(id)
    const {data, isLoading} = useQuery('recipe', querFn)
    const { width } = useWindowDimensions();
    
  

    const customHTMLElementModels = {
        'blue-circle': HTMLElementModel.fromCustomModel({
          tagName: 'blue-circle',
          mixedUAStyles: {
            fontSize:20,
            marginLeft:20,
            marginRight: 20
          },
          contentModel: HTMLContentModel.block
        })
      };
    return(
        <Box>
            {
                isLoading? 
                <Box mt={20}>
                    <Center>
                        <LoadingComponent/>
                    </Center>
                </Box>
                :
                <ScrollView>
                    <Heading size={'2xl'} m={5}>{data.title}</Heading>
                    <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: data.image
                            }} 
                            alt="image" />
                    </AspectRatio>
                    <Heading m={4}>
                        About
                    </Heading>
                    <RenderHtml
                        customHTMLElementModels={customHTMLElementModels}
                        contentWidth={width}
                        source={{
                            html: `<blue-circle>${data.summary}</blue-circle>`
                        }}
                    />
                    <Heading m={4} textAlign="center">
                        Ingredients
                    </Heading>
                    {
                        data.extendedIngredients.map((data: any, index: any)=>{
                            return(
                                <HStack key={index} space={2} ml={4} mt={2}>
                                    <CheckIcon size="5" mt="0.5" color="emerald.500" />
                                    <Text fontSize="lg" fontWeight={'bold'} color="amber.600" textAlign={'left'}>
                                        {data.name}
                                    </Text>
                                </HStack>
                            )
                        })
                    }
                    <Heading textAlign={'center'} mt={8}>
                        Steps to Make {data.title}
                    </Heading>

                    {
                        data.analyzedInstructions[0].steps.map((stepList: any, index: number)=>{
                            return(
                                <HStack key={index} space={2} w={width-48} m={4}>
                                    <CheckIcon size="5" mt="0.5" color="emerald.500" />
                                    <Text fontSize="lg">
                                        {stepList.step}
                                    </Text>
                                </HStack>
                            )

                        })
                    }

                </ScrollView>

            }
            
        </Box>
    )
}