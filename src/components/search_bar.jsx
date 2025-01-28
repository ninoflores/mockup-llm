import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react"
import { Field } from "../components/ui/field"

const SearchBar = () => {
    return (
        <Box
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            p={6}
            bg="white"
            borderTop="1px solid"
            borderColor="gray.500">
            <Flex>
                <Text>
                    テキストを入力 : 
                </Text>
                <Textarea
                    placeholder="Search"
                    borderColor={"#000"} />
                <Button>
                    Search
                </Button>
            </Flex>
        </Box>
    )
}

export default SearchBar;