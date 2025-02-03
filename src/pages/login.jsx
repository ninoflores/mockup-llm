import { Center, Button, Box, Input, Stack, Heading, Fieldset, Spinner, Flex, Text } from '@chakra-ui/react';
import { Field } from "../components/ui/field"
import { Toaster, toaster } from "../components/ui/toaster"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const toasterHandler = (description, type, duration) => {
        toaster.create({
            description: description,
            type: type,
            duration: duration
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(email === "") {
            toasterHandler("Email address is required", "error", 3000);
        } else if (!emailRegex.test(email)) {
           toasterHandler("Email address is not valid", "error", 3000);
        } else {
            handleLogin()
        }
    }

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            // const response = await fetch("http://api.llm.localhost:3001/v1/login/auth", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         email: email,
            //         password: password
            //     })
            // });

            // const data = await response.json();

            const promise = new Promise(async (resolve, reject) => {
                // Create a delay promise that always waits 2 seconds
                const delay = new Promise(r => setTimeout(r, 2000));
                
                // Wait for the delay regardless of success/failure
                await delay;

                // if (!response.ok) {
                //     reject(new Error("ログインに失敗しました"));
                // } else {
                //     resolve(data);
                //     navigate(`/`, {state: {id: data.user.id}});
                // }

                resolve();
                navigate(`/`);

                setIsLoading(false);
            });
            

            toaster.promise(promise, {
                success: {
                    title: "Success",
                    // description: response.status === 200 && data.message,
                    description: "Successfully logged in",
                },
                error: {
                    title: "Login Failed",
                    // description: response.status === 401 || 403 ? data.message : "Login failed",
                    description: "Login failed",
                    style: {
                        background: '#ff0000',
                        color: 'white',
                        borderRadius: '8px',
                    },
                },
                loading: { 
                    title: "Signing in...", 
                    description: "Please wait",
                    status: 'loading'
                },
            });

        } catch (error) {
            console.error(error);
            // Error is already handled by toaster.promise
        }
    }

  return (
    <>
        <Center h="100vh">
            <Box w="600px" ml="-170px">
                <form 
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                    <Fieldset.Root size="lg" maxW="100%" css={{ "--field-label-width": "170px" }}>
                        <Stack mb={16}>
                            <Fieldset.Legend 
                                fontSize="4xl" 
                                textAlign="center"
                                ml="170px">
                                特車-LLMシステム
                            </Fieldset.Legend>
                        </Stack>

                        <Fieldset.Content>
                            <Field 
                                orientation="horizontal" 
                                label={<span style={{ fontSize: '1.25rem' }}>メールアドレス</span>}>
                                <Input 
                                    name="email" 
                                    type="text" 
                                    borderColor="#000"
                                    autoComplete='off'
                                    size="lg"
                                    fontSize="xl"
                                    py={6}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Field>

                            <Field 
                                orientation="horizontal" 
                                label={<span style={{ fontSize: '1.25rem' }}>パスワード</span>}>
                                <Input 
                                    name="password" 
                                    type="password" 
                                    borderColor="#000"
                                    autoComplete='off'
                                    size="lg"
                                    fontSize="xl"
                                    py={6}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Field>
                        </Fieldset.Content>

                        <Button 
                            type="submit" 
                            alignSelf="flex-start"
                            bg="#008cff" 
                            color="#fff"
                            width="calc(100% - 175px)"
                            ml={'auto'}
                            py={8}
                            borderRadius="10px"
                            _hover={{
                                bg: "#0077b5",
                            }}
                            disabled={isLoading}>
                            {isLoading ? (
                                <Flex alignItems="center" justifyContent="center" gap={4}>
                                    <Spinner size="md" borderWidth="4px" />
                                    <Text
                                        fontSize="lg"
                                        fontWeight={'bold'}>
                                        Signing in...
                                    </Text>
                                </Flex>
                            ) : (
                                <Text
                                    fontSize="lg"
                                    fontWeight={'bold'}>
                                    ログイン
                                </Text>
                            )}
                        </Button>
                    </Fieldset.Root>
                </form>
            </Box>
        </Center>
        <Toaster />
    </>
  );
};

export default Login;
