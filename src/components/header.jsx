import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu"

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state?.id;
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!id) {
                setError("No user ID provided");
                return;
            }

            try {
                const response = await fetch(`http://api.llm.localhost:3001/v1/user/info/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                if(isFirstRender.current) {
                    setUser(data.user);
                    isFirstRender.current = false;
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to fetch user data");
            }
        };
        fetchUserData();
    }, [id]);
    

    return (
        <Box
            bg="#fff"
            borderBottom="1px solid #000"
            w="100%"
            h="100px"
            position="fixed"
            top={0}
            left={0}
            zIndex={100}>
            <Flex 
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                h="100px"
                px="100px">
                <Text 
                    cursor="pointer" 
                    onClick={() => navigate('/')}
                    fontSize="4xl"
                    fontWeight="bold"
                    color="#000">
                    LLM
                </Text>
                <Flex alignItems="center" gap="1rem">
                    <Text fontSize="2xl">
                        {error ? 'Error loading user' : `ようこそ, ${user?.userType === '0' ? '管理者さん' : user?.name}`}
                    </Text>
                    <MenuRoot>
                        <MenuTrigger asChild>
                            <IconButton aria-label="Search database" bg="#fff" color="#134563" size="5xl" fontSize="5xl">
                                <IoMenu />
                            </IconButton>
                        </MenuTrigger>
                        <MenuContent px={6} py={2}>
                            {/* {user?.userType == 0 ? (
                                <>
                                    <MenuItem value="/user-management" fontSize="xl" py={3} onClick={() => navigate('/user_management')}>ユーザー管理</MenuItem>
                                    <MenuItem value="/setting" fontSize="xl" py={3} onClick={() => navigate('/setting')}>設定</MenuItem>
                                </>
                            ) : (
                                <MenuItem fontSize="xl" py={3}>アカウント情報</MenuItem>
                            )} */}
                            <MenuItem value="/user-management" fontSize="xl" py={3} onClick={() => navigate('/user_management')}>ユーザー管理</MenuItem>
                            <MenuItem value="/setting" fontSize="xl" py={3} onClick={() => navigate('/setting')}>設定</MenuItem>
                            <MenuItem value="/" onClick={() => navigate('/login')} fontSize="xl" py={3}>ログアウト</MenuItem>
                        </MenuContent>
                    </MenuRoot>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header;
