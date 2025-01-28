import { Box, Button, Flex, Text } from '@chakra-ui/react';
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu"

import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isLoginPage = location.pathname.includes('login');
    const navigate = useNavigate();

    if (isLoginPage) return null;

    return (
        <Box
            bg="#fff"
            borderBottom="1px solid #000"
            w="100%"
            h="100px">
            <Flex 
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                h="100px"
                px="100px">
                <Text>
                    LLM
                </Text>
                <Flex alignItems="center" gap="1rem">
                    <Text>
                      MyName
                    </Text>
                    <MenuRoot>
                        <MenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Open
                            </Button>
                        </MenuTrigger>
                        <MenuContent>
                            <MenuItem value="/" onClick={() => navigate('/login')}>ログアウト</MenuItem>
                        </MenuContent>
                    </MenuRoot>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header;
