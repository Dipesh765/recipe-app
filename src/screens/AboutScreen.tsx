import { Box, Center, Heading, ScrollView, Text } from "native-base";

export default function About(){
    return(
        <Box padding={'4'}>
            <ScrollView>
                <Heading textAlign={'center'}>Hello, I'm Dipesh Subedi</Heading>
                <Text mt="6" textAlign={'left'}>
                    I'm currently pursuing Software Engineering in Pokhara University School of Engineering.
                </Text>
                <Text mt="2" textAlign={'left'}>
                   I hate programming, the only reason I'm doing this because I have no other options in my life.
                </Text>
                <Text mt="2" textAlign={'left'}>
                    My life is a mess. 
                </Text>
                
                <Text mt="2" textAlign={'left'}>
                    I've failed at everything. 
                </Text>
                <Text mt="2" textAlign={'left'} fontWeight="bold">
                    I, at this point, have no choice but to conclude that I am cursed by god and that there is a global conspiracy involving all sectors of society committed to trying to completely destroy me and make me go insane. There is no other possibility.
                </Text>
                <Text mt="2" textAlign={'left'}>
                    Anything I want to happen is guaranteed not to happen, simply because I am the one who wanted it.
                </Text>
                <Text mt="2" textAlign={'left'}>
                   The best lesson I've learned from my life is: 
                </Text>
                <Text mt="2" textAlign={'left'} fontWeight="bold" fontStyle={'italic'}>
                    "Just Remeber, no matter how hard you try, and no matter how badly you want something, you are never going to be good enough to get it. Trying to get it will just make you even more miserable and  when you assuredly fail, then you are reminded yet again how pointless it all was."
                </Text>
                <Text mt="2" textAlign={'left'}>
                    If I've ever had something that even resembled a goal in life, it is that, I want to be someone.
                </Text>
                <Text mt="2" textAlign={'left'}>
                    But after all this time, all this effort, I have finally realized that <Text fontWeight={'bold'}>I AM ORDINARY!</Text>
                </Text>
                <Text mt="2" textAlign={'left'}>
                    No even worse that ordinary, an egotistical loser. 
                </Text>
                <Text mt="2" textAlign={'left'}>
                    I am pathetic.
                </Text>
            </ScrollView>
        </Box>
    )
}