import { Box, Field, Input, Stack, Flex, Text, Button } from "@chakra-ui/react";


const MsTeamsSearch = () => {

    return (
        <Box 
            border={"2px solid black"} 
            borderRadius={28} 
            p={10}
            mb={20}>
            <Flex gap={30}>
                <Stack 
                    gap="10" 
                    w="xl" 
                    css={{ "--field-label-width": "200px" }}>
                    <Field.Root orientation="horizontal">
                        <Field.Label fontSize="lg">チーム名</Field.Label>
                        <Input 
                            flex="1" 
                            border={'2px solid #b8b8b8'} 
                            borderRadius={6}
                            size="xl" />
                    </Field.Root>
                </Stack>
                <Stack 
                    gap="10" 
                    w="xl" 
                    css={{ "--field-label-width": "200px" }}>
                    <Field.Root orientation="horizontal">
                        <Field.Label fontSize="lg">チャンネル名</Field.Label>
                        <Input 
                            flex="1" 
                            border={'2px solid #b8b8b8'} 
                            borderRadius={6}
                            size="xl" />
                    </Field.Root>
                </Stack>
                <Flex gap={4} alignItems="center" justifyContent="flex-end">
                    <Text fontSize="lg" fontWeight="600">クリア</Text>
                    <Button
                        bg="#008cff" 
                        color="white"
                        fontSize="lg"
                        p={6}
                        borderRadius={10}>
                        検索
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
} 

export default MsTeamsSearch;