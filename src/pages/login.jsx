import { Center, Button, Box, Input, Stack, Heading, Fieldset } from '@chakra-ui/react';
import { Field } from "../components/ui/field"
import { Toaster, toaster } from "../components/ui/toaster"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            const promise = new Promise((resolve, reject) => {
                // Simulate login API call
                setTimeout(() => {
                    resolve();
                }, 2000);
            });

            promise.then(() => {
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            });

            toaster.promise(promise, {
                success: {
                    title: "Success",
                    description: "You are logged in",
                },
                error: {
                    title: "ログイン失敗",
                    description: "メールアドレスまたはパスワードが正しくありません",
                    style: {
                        background: '#ff0000',
                        color: 'white',
                        borderRadius: '8px',
                    },
                },
                loading: { 
                    title: "Signing in...", 
                    description: "Please wait",
                    status: 'loading',
                    style: {
                        background: '#008cff',
                        color: 'white',
                        borderRadius: '8px',
                    },
                    duration: 2000,
                },
            });
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
                            fontSize="lg"
                            fontWeight={'bold'}
                            borderRadius="10px"
                            _hover={{
                                bg: "#0077b5",
                            }}>
                            ログイン
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
