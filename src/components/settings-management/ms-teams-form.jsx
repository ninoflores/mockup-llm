import { Button, IconButton, Input, Stack, Field, createListCollection, Flex } from "@chakra-ui/react"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { MdEdit } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Switch } from "../../components/ui/switch"
import ConfirmSaveDialog from "../confirm-dialogs/confirm-save-dialog";
import { PasswordInput } from "../../components/ui/password-input"

import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "../../components/ui/select"

const MsTeamsForm = ({mode}) => {
    const [formTitle, setFormTitle] = useState("新規システムユーザー登録");
    const isFirstRender = useRef(true);
    const [channels, setChannels] = useState([{ name: '', url: '' }]);

    useEffect(() => {
        if(isFirstRender.current){
            if(mode === "create"){
                setFormTitle("新規メールアドレス 登録");
            } else {
                setFormTitle("メールアドレス 編集");
            }

            isFirstRender.current = false;
            return;
        }
    }, [mode]);

    const frameworks = createListCollection({
        items: [
            { label: "管理者", value: "0" },
            { label: "通常ユーザー", value: "1" },
        ],
    })

    const addChannel = () => {
        setChannels([...channels, { name: '', url: '' }]);
    };

    const removeChannel = (index) => {
        if (channels.length > 1) {
            const newChannels = channels.filter((_, i) => i !== index);
            setChannels(newChannels);
        }
    };

    return (
        <DialogRoot 
            placement={'center'} 
            closeOnInteractOutside={false}>
            <DialogTrigger asChild>
                {mode === "create" ?
                    <Button 
                        bg="#008cff" 
                        color="white" 
                        borderRadius={10} 
                        p={6} 
                        fontSize={"lg"}>
                        チームとチャンネルを登録
                    </Button> 
                : 
                    <IconButton 
                        colorPalette={"blue"} 
                        borderRadius={"full"}>
                        <MdEdit />
                    </IconButton>
                }
            </DialogTrigger>
            <DialogContent maxWidth="1300px" width="90%">
                <DialogHeader borderBottom={'1px solid #b8b8b8'}>
                    <DialogTitle fontSize={"2xl"}>{formTitle}</DialogTitle>
                </DialogHeader>
                <form>
                    <DialogBody p={10}>
                        <Flex gap="20" alignItems="flex-start" mb={4}>
                            <Stack 
                                gap="8" 
                                w="40%" 
                                css={{ "--field-label-width": "150px" }}>
                                <Field.Root orientation="horizontal">
                                    <Field.Label fontSize={"lg"} fontWeight={"500"}>チーム名</Field.Label>
                                    <Input 
                                        type="text" 
                                        flex="1" 
                                        border={'1px solid #b8b8b8'}
                                        size="xl" />
                                </Field.Root>
                            </Stack>
                            <Stack 
                                gap="8" 
                                w="40%" 
                                css={{ "--field-label-width": "70px" }}>
                                <Field.Root orientation="horizontal">
                                    <Field.Label fontSize={"lg"} fontWeight={"500"}>URL</Field.Label>
                                    <Input 
                                        type="text" 
                                        flex="1" 
                                        border={'1px solid #b8b8b8'}
                                        size="xl" />
                                </Field.Root>
                            </Stack>
                            <Flex w="20%" />
                        </Flex>
                        {channels.map((channel, index) => (
                            <Flex key={index} gap="20" alignItems="flex-start" mb={4}>
                                <Stack 
                                    gap="8" 
                                    w="40%" 
                                    css={{ "--field-label-width": "150px" }}>
                                    <Field.Root orientation="horizontal">
                                        <Field.Label fontSize={"lg"} fontWeight={"500"}>チャンネル名</Field.Label>
                                        <Input 
                                            type="text" 
                                            flex="1" 
                                            border={'1px solid #b8b8b8'}
                                            size="xl"
                                            value={channel.name}
                                            onChange={(e) => {
                                                const newChannels = [...channels];
                                                newChannels[index].name = e.target.value;
                                                setChannels(newChannels);
                                            }} />
                                    </Field.Root>
                                </Stack>
                                <Stack 
                                    gap="8" 
                                    w="40%" 
                                    css={{ "--field-label-width": "70px" }}>
                                    <Field.Root orientation="horizontal">
                                        <Field.Label fontSize={"lg"} fontWeight={"500"}>URL</Field.Label>
                                        <Input 
                                            type="text" 
                                            flex="1" 
                                            border={'1px solid #b8b8b8'}
                                            size="xl"
                                            value={channel.url}
                                            onChange={(e) => {
                                                const newChannels = [...channels];
                                                newChannels[index].url = e.target.value;
                                                setChannels(newChannels);
                                            }} />
                                    </Field.Root>
                                </Stack>
                                <Flex w="20%" gap="2" justifyContent="flex-start" alignItems="center">
                                    <IconButton
                                        onClick={() => removeChannel(index)}
                                        isDisabled={channels.length === 1}
                                        aria-label="Remove channel"
                                        icon={<span>-</span>}
                                        alignSelf="center"
                                        mt={2}
                                        bg="red"
                                    />
                                    {index === channels.length - 1 && (
                                        <IconButton
                                            onClick={addChannel}
                                            aria-label="Add channel"
                                            icon={<span>+</span>}
                                            alignSelf="center"
                                            mt={2}
                                            bg="green"
                                        />
                                    )}
                                </Flex>
                            </Flex>
                        ))}
                        <Stack 
                            gap="8" 
                            w="20%" 
                            css={{ "--field-label-width": "150px" }}
                            display={mode === "create" ? "none" : "flex"}>
                            <Field.Root orientation="horizontal">
                                <Field.Label fontSize={"lg"} fontWeight={"500"}>アクティブ状態</Field.Label>
                                <Switch
                                    defaultChecked={true}
                                    colorPalette={"green"} 
                                    size="lg" />
                            </Field.Root>
                        </Stack>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button
                                fontSize={"lg"} 
                                bg={"#eeeeee"} 
                                color={"#000"}
                                borderColor={"#000"}
                                px={12}
                                py={7}
                                borderRadius={10}>
                                キャンセル
                            </Button>
                        </DialogActionTrigger>
                        <ConfirmSaveDialog />
                    </DialogFooter>
                </form>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}

export default MsTeamsForm;