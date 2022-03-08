import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text } from "native-base";

export default function Card(props:any){


    const {data} = props
    return(
        <Box alignItems="center" m={4}>
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
                }} _web={{
                shadow: 2,
                borderWidth: 0
                }} _light={{
                backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: data.image
                            }} alt="image" />
                        </AspectRatio>
                    <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                    }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        Image
                    </Center>
                    </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {data.name}
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </Box>
    )
}