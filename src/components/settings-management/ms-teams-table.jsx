import { ButtonGroup, Table } from "@chakra-ui/react"
import { Switch } from "../ui/switch"
import MsTeamsForm from "./ms-teams-form"
import MsTeamsDeleteModal from "./ms-teams-delete-modal"

const MsTeamsTable = () => {
    return (
        <Table.Root 
            size="sm" 
            mb={10} 
            border={"2px solid #b8b8b8"}
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
                        チーム名
                    </Table.ColumnHeader>
                    <Table.ColumnHeader 
                        fontSize={"2xl"} 
                        py={4} 
                        borderRight={"2px solid #b8b8b8"}>
                        チャンネル名
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
                    { id: 1, teamName: "営業部", channelName: "一般", active: true },
                    { id: 2, teamName: "開発部", channelName: "プロジェクトA", active: true },
                    { id: 3, teamName: "人事部", channelName: "採用", active: false },
                    { id: 4, teamName: "マーケティング", channelName: "キャンペーン", active: true },
                    { id: 5, teamName: "カスタマーサポート", channelName: "問い合わせ", active: false },
                ].map((team) => (
                    <Table.Row key={team.id} borderBottom={"2px solid #b8b8b8"}>
                        <Table.Cell 
                            fontSize={"lg"} 
                            borderRight={"2px solid #b8b8b8"}
                            w="100px">
                            {team.id}
                        </Table.Cell>
                        <Table.Cell 
                            fontSize={"lg"} 
                            borderRight={"2px solid #b8b8b8"}>
                            {team.teamName}
                        </Table.Cell>
                        <Table.Cell 
                            fontSize={"lg"} 
                            borderRight={"2px solid #b8b8b8"}>
                            {team.channelName}
                        </Table.Cell>
                        <Table.Cell 
                            borderRight={"2px solid #b8b8b8"} 
                            textAlign={'center'}>
                            <Switch 
                                checked={team.active} 
                                colorPalette={"green"} 
                                margin={'auto'} />
                        </Table.Cell>
                        <Table.Cell textAlign={'center'}>
                            <ButtonGroup m={'auto'}>
                                <MsTeamsForm mode={"edit"}/>
                                <MsTeamsDeleteModal />
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}
export default MsTeamsTable;
