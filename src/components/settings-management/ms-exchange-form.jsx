import { Button, IconButton, Input, Stack, Field, createListCollection } from "@chakra-ui/react"
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

const MsExchangeForm = ({mode}) => {
    const [formTitle, setFormTitle] = useState("新規システムユーザー登録");
    const isFirstRender = useRef(true);

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

    return (
        <DialogRoot placement={'center'} size={'lg'} closeOnInteractOutside={false}>
            <DialogTrigger asChild>
                {mode === "create" ?
                    <Button 
                        bg="#008cff" 
                        color="white" 
                        borderRadius={10} 
                        p={6} 
                        fontSize={"lg"}>
                        新規システムユーザー登録
                    </Button> 
                : 
                    <IconButton 
                        colorPalette={"blue"} 
                        borderRadius={"full"}>
                        <MdEdit />
                    </IconButton>
                }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader borderBottom={'1px solid #b8b8b8'}>
                    <DialogTitle fontSize={"2xl"}>{formTitle}</DialogTitle>
                </DialogHeader>
                <form>
                    <DialogBody p={10}>
                        <Stack 
                            gap="8" 
                            w="100%" 
                            css={{ "--field-label-width": "150px" }}>
                            <Field.Root orientation="horizontal">
                                <Field.Label fontSize={"lg"} fontWeight={"500"}>メールアドレス</Field.Label>
                                <Input 
                                    type="text" 
                                    flex="1" 
                                    border={'1px solid #b8b8b8'}
                                    size="xl" />
                            </Field.Root>

                            <Field.Root 
                                orientation="horizontal" 
                                justifyContent="flex-start"
                                display={mode === "create" ? "none" : "flex"}>
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

export default MsExchangeForm;