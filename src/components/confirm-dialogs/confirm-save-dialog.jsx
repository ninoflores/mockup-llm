import { Button, Text } from "@chakra-ui/react"
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

const ConfirmSaveDialog = () => {
    return (
        <DialogRoot placement={'center'} size={'sm'} closeOnInteractOutside={false}>
            <DialogTrigger asChild>
                <Button
                    fontSize={"lg"} 
                    bg={"#008a00"} 
                    color={"#fff"}
                    px={12}
                    py={7}
                    borderRadius={10}>
                    更新
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle fontSize={"xl"}>システムユーザー情報 編集</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Text fontSize={"lg"}>更新しますか?</Text>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button fontSize={"lg"} variant="outline">いいえ</Button>
                    </DialogActionTrigger>
                    <Button
                        type="submit"
                        fontSize={"lg"} 
                        bg={"green.300"} 
                        color={"green.900"}>
                        はい
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}

export default ConfirmSaveDialog;
