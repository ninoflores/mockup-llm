import { 
    Text, 
    Box,
    Tabs,
    Flex,
    createListCollection,
    Button,
    HStack
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

import MsExchangeSearch from "../components/settings-management/ms-exchange-search";
import MsExchangeTable from "../components/settings-management/ms-exchange-table";
import MsExchangeForm from "../components/settings-management/ms-exchange-form";

import MsTeamsSearch from "../components/settings-management/ms-teams-search";
import MsTeamsTable from "../components/settings-management/ms-teams-table";
import MsTeamsForm from "../components/settings-management/ms-teams-form";

const SettingManagement = () => {
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
                設定
            </Text>
            <Tabs.Root 
                variant="enclosed" 
                w="100%" 
                fitted 
                defaultValue={"tab-1"}>
                <Tabs.List maxW="md" mb={10}>
                    <Tabs.Trigger
                        fontSize="lg"
                        p={6}
                        value="tab-1"
                        css={{
                            '&[data-selected]': {
                                backgroundColor: '#008cff', // You can change this color
                                color: 'white'
                            }
                        }}>
                        MS Exchange
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        fontSize="lg"
                        p={6}
                        value="tab-2"
                        css={{
                            '&[data-selected]': {
                                backgroundColor: '#008cff', // You can change this color
                                color: 'white'
                            }
                        }}>
                        Ms Teams
                    </Tabs.Trigger>
                </Tabs.List>


                <Tabs.Content value="tab-1">
                    <Text 
                        fontSize="4xl" 
                        fontWeight="bold"
                        mb={10}>
                        MS Exchange - 収集対象メーリングリストアドレス
                    </Text>
                    <MsExchangeSearch />
                    <Flex 
                        gap={4} 
                        alignItems="flex-end" 
                        my={4}
                        mb={10}
                        maxW={'4xl'}
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
                        <MsExchangeForm mode={"create"}/>
                    </Flex>
                    <MsExchangeTable />
                    <Flex justifyContent={"space-between"} maxW={'4xl'}>
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
                </Tabs.Content>


                <Tabs.Content value="tab-2">
                    <Text
                        fontSize="4xl" 
                        fontWeight="bold"
                        mb={10}>
                        MS Teams
                    </Text>
                    <MsTeamsSearch />
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
                        <MsTeamsForm mode={"create"}/>
                    </Flex>
                    <MsTeamsTable />
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
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    )
}

export default SettingManagement;