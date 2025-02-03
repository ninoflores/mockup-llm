import { Box, Field, Input, Stack, Flex, createListCollection, Text, Button } from "@chakra-ui/react";

import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "../../components/ui/select"

const UserSearch = () => {
    const frameworks = createListCollection({
        items: [
            { label: "10", value: "10" },
            { label: "20", value: "20" },
            { label: "30", value: "30" },
            { label: "40", value: "40" },
        ],
    })

    return (
        <Box 
            border={"2px solid black"} 
            borderRadius={28} 
            p={10}
            mb={20}>
            <Flex gap={60} mb={10}>
                <Stack 
                    gap="8" 
                    w="50%" 
                    css={{ "--field-label-width": "200px" }}>
                    <Field.Root orientation="horizontal">
                        <Field.Label fontSize="lg">メールアドレス</Field.Label>
                        <Input 
                            flex="1" 
                            border={'2px solid #b8b8b8'} 
                            borderRadius={6}
                            size="xl" />
                    </Field.Root>

                    <Field.Root orientation="horizontal">
                        <Field.Label fontSize="lg">名前</Field.Label>
                        <Input 
                            flex="1"
                            border={'2px solid #b8b8b8'} 
                            borderRadius={6}
                            size="xl" />
                    </Field.Root>
                </Stack>
                <Stack 
                    gap="8" 
                    w="50%" 
                    css={{ "--field-label-width": "200px" }}>
                    <Field.Root orientation="horizontal">
                        <Field.Label fontSize="lg">ユーザータイプ</Field.Label>
                        <SelectRoot 
                            collection={frameworks} 
                            size="lg" 
                            width="100%" 
                            border={'2px solid #b8b8b8'} 
                            borderRadius={6}>
                            <SelectTrigger>
                                <SelectValueText placeholder="タイプを選択" />
                            </SelectTrigger>
                            <SelectContent>
                                {frameworks.items.map((movie) => (
                                    <SelectItem item={movie} key={movie.value}>
                                        {movie.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </SelectRoot>
                    </Field.Root>

                    <Field.Root orientation="horizontal">
                        <Field.Label fontSize="lg">アクティブ状態</Field.Label>
                        <SelectRoot 
                            collection={frameworks} 
                            size="lg" 
                            width="100%" 
                            border={'2px solid #b8b8b8'} 
                            borderRadius={6}>
                            <SelectTrigger>
                                <SelectValueText placeholder="タイプを選択" />
                            </SelectTrigger>
                            <SelectContent>
                                {frameworks.items.map((movie) => (
                                    <SelectItem item={movie} key={movie.value}>
                                        {movie.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </SelectRoot>
                    </Field.Root>
                </Stack>
            </Flex>
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
        </Box>
    )
} 

export default UserSearch;
