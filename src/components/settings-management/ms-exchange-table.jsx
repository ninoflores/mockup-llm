import { ButtonGroup, Table } from "@chakra-ui/react"
import { Switch } from "../ui/switch"
import MsExchangeForm from "./ms-exchange-form"
import MsExchangeDeleteModal from "./ms-exchange-delete-modal"
const MsExchangeTable = () => {
    return (
        <Table.Root 
            size="sm" 
            mb={10} 
            border={"2px solid #b8b8b8"}
            maxW={'4xl'}
            showColumnBorder>
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
                        メールアドレス
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
                    { id: 1, email: "yamada@test.com", active: true },
                    { id: 2, email: "suzuki@test.com", active: true },
                    { id: 3, email: "sato@test.com", active: false },
                    { id: 4, email: "tanaka@test.com", active: true },
                    { id: 5, email: "ito@test.com", active: false },
                ].map((user) => (
                    <Table.Row key={user.id} borderBottom={"2px solid #b8b8b8"}>
                        <Table.Cell 
                            fontSize={"lg"} 
                            borderRight={"2px solid #b8b8b8"}
                            w="100px">
                            {user.id}
                        </Table.Cell>
                        <Table.Cell 
                            fontSize={"lg"} 
                            borderRight={"2px solid #b8b8b8"}>
                            {user.email}
                        </Table.Cell>
                        <Table.Cell 
                            borderRight={"2px solid #b8b8b8"} 
                            textAlign={'center'}>
                            <Switch 
                                checked={user.active} 
                                colorPalette={"green"} 
                                margin={'auto'} />
                        </Table.Cell>
                        <Table.Cell textAlign={'center'}>
                            <ButtonGroup m={'auto'}>
                                <MsExchangeForm mode={"edit"}/>
                                <MsExchangeDeleteModal />
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}
export default MsExchangeTable;
