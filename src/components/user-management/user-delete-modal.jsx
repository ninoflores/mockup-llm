import { Button, IconButton, Text } from "@chakra-ui/react"
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
import { GoTrash } from "react-icons/go";

const UserModal = () => {
    return (
        <DialogRoot placement={'center'} size={'sm'} closeOnInteractOutside={false}>
            <DialogTrigger asChild>
                <IconButton borderRadius={"full"} backgroundColor={"gray.100"}>
                    <GoTrash color="red" />
                </IconButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle fontSize={"xl"}>ユーザー 削除</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Text fontSize={"lg"}>削除しますか?</Text>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button fontSize={"lg"} variant="outline">いいえ</Button>
                    </DialogActionTrigger>
                    <Button fontSize={"lg"} bg={"#f8cecc"} color={"red"}>はい</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}

export default UserModal;