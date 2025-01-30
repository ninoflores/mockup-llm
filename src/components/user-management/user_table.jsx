import { Button, ButtonGroup, IconButton, Table } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Switch } from "../../components/ui/switch"
import { MdEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";

const Demo = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://api.llm.localhost:3001/v1/user/all", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if(!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data.users);

            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, [])

    const handleActiveChange = (userId) => {
        setUsers(users.map(user => 
            user.id === userId 
                ? { ...user, active_flg: user.active_flg === 0 ? 1 : 0 }
                : user
        ));
    };

    return (
        <Table.Root size="sm">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>ID</Table.ColumnHeader>
                    <Table.ColumnHeader>名前</Table.ColumnHeader>
                    <Table.ColumnHeader>メールアドレス</Table.ColumnHeader>
                    <Table.ColumnHeader>ユーザータイプ</Table.ColumnHeader>
                    <Table.ColumnHeader>アクティブ状態</Table.ColumnHeader>
                    <Table.ColumnHeader></Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.map((item) => (
                    <Table.Row key={item.id}>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.disp_name}</Table.Cell>
                        <Table.Cell>{item.email_address}</Table.Cell>
                        <Table.Cell>{item.user_type === 0 ? "管理者" : "通常ユーザー" }</Table.Cell>
                        <Table.Cell>
                            <Switch 
                                checked={item.active_flg === 0}
                                onCheckedChange={() => handleActiveChange(item.id)}
                                colorPalette={"green"}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <ButtonGroup>
                                <IconButton colorPalette={"blue"} borderRadius={"full"}>
                                    <MdEdit />
                                </IconButton>
                                <IconButton colorPalette={"none"} borderRadius={"full"}>
                                    <GoTrash color="red" />
                                </IconButton>
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}
export default Demo;
