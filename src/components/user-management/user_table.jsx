import { ButtonGroup, IconButton, Table } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Switch } from "../../components/ui/switch"
import UserModal from "./user-delete-modal";
import UserForm from "./user-form";

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

    return (
        <Table.Root size="sm" mb={10} border={"2px solid #b8b8b8"} showColumnBorder>
            <Table.Header borderBottom={"2px solid #b8b8b8"}>
                <Table.Row>
                    <Table.ColumnHeader 
                        fontSize={"2xl"} 
                        py={4} 
                        borderRight={"2px solid #b8b8b8"}>
                        ID
                    </Table.ColumnHeader>
                    <Table.ColumnHeader 
                        fontSize={"2xl"} 
                        py={4} 
                        borderRight={"2px solid #b8b8b8"}>
                        名前
                    </Table.ColumnHeader>
                    <Table.ColumnHeader 
                        fontSize={"2xl"} 
                        py={4} 
                        borderRight={"2px solid #b8b8b8"}>
                        メールアドレス
                    </Table.ColumnHeader>
                    <Table.ColumnHeader 
                        fontSize={"2xl"} 
                        py={4} 
                        borderRight={"2px solid #b8b8b8"}>
                        ユーザータイプ
                    </Table.ColumnHeader>
                    <Table.ColumnHeader 
                        fontSize={"2xl"} 
                        py={4} 
                        borderRight={"2px solid #b8b8b8"}>
                        アクティブ状態
                    </Table.ColumnHeader>
                    <Table.ColumnHeader></Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {[
                    { id: 1, name: "山田太郎", email: "yamada@test.com", type: "管理者", active: true },
                    { id: 2, name: "鈴木花子", email: "suzuki@test.com", type: "一般", active: true },
                    { id: 3, name: "佐藤次郎", email: "sato@test.com", type: "管理者", active: false },
                    { id: 4, name: "田中美咲", email: "tanaka@test.com", type: "一般", active: true },
                    { id: 5, name: "伊藤健一", email: "ito@test.com", type: "一般", active: false },
                ].map((user) => (
                    <Table.Row key={user.id} borderBottom={"2px solid #b8b8b8"}>
                        <Table.Cell fontSize={"lg"} borderRight={"2px solid #b8b8b8"} w="100px">
                            {user.id}
                        </Table.Cell>
                        <Table.Cell fontSize={"lg"} borderRight={"2px solid #b8b8b8"} w="100px">
                            {user.name}
                        </Table.Cell>
                        <Table.Cell fontSize={"lg"} borderRight={"2px solid #b8b8b8"}>
                            {user.email}
                        </Table.Cell>
                        <Table.Cell fontSize={"lg"} borderRight={"2px solid #b8b8b8"}>
                            {user.type}
                        </Table.Cell>
                        <Table.Cell borderRight={"2px solid #b8b8b8"}>
                            <Switch checked={user.active} colorPalette={"green"} />
                        </Table.Cell>
                        <Table.Cell>
                            <ButtonGroup>
                                <UserForm mode={"edit"}/>
                                <UserModal />
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}
export default Demo;
