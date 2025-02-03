import { 
    HStack, 
    Flex, 
    Text, 
    Button, 
    Box, 
    createListCollection
} from "@chakra-ui/react";
import { PaginationRoot, PaginationItems } from "../components/ui/pagination";
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "../components/ui/select"

import UserTable from "../components/user-management/user_table";
import UserSearch from "../components/user-management/user-search";
import UserForm from "../components/user-management/user-form";

const UserManagement = () => {
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
            p={20} 
            px={40} 
            mt={100}>
            <Text 
                fontSize="3xl" 
                fontWeight="bold" 
                mb={10}>
                システムユーザー管理
            </Text>
            <UserSearch />
            <Flex 
                gap={4} 
                alignItems="flex-end" 
                my={4}
                mb={10}
                justifyContent="space-between">
                <SelectRoot 
                    collection={frameworks} 
                    size="lg" 
                    width="100px"
                    borderRadius={10}
                    border={'1px solid #b8b8b8'}>
                     <SelectTrigger>
                            <SelectValueText placeholder="10" />
                        </SelectTrigger>
                        <SelectContent>
                            {frameworks.items.map((movie) => (
                                <SelectItem item={movie} key={movie.value}>
                                    {movie.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                </SelectRoot>
                <UserForm mode={"create"}/>
            </Flex>
            <UserTable />
            <Flex justifyContent={"space-between"}>
                <Text fontSize={"xl"}>総数 4    1 - 4</Text>
                <PaginationRoot 
                    count={10} 
                    pageSize={2} 
                    defaultPage={1}>
                    <HStack>
                        <Button 
                            fontSize={"lg"} 
                            fontWeight={"semibold"} 
                            bg="white" 
                            color="#000" 
                            borderRadius={6} 
                            border={'1px solid #b8b8b8'}
                            p={5}>
                            前
                        </Button>
                        <PaginationItems 
                            borderRadius={6} 
                            border={'1px solid #b8b8b8'} 
                            fontSize={"lg"} 
                            p={5} 
                            fontWeight={"normal"} />
                        <Button 
                            fontSize={"lg"} 
                            fontWeight={"semibold"} 
                            bg="white" 
                            color="#000" 
                            borderRadius={6} 
                            border={'1px solid #b8b8b8'}
                            p={5}>
                            次
                        </Button>
                    </HStack>
                </PaginationRoot>
            </Flex>
        </Box>
    )
}

export default UserManagement;