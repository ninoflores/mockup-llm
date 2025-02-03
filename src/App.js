import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import SearchBar from './components/search_bar';
import UserManagement from './pages/user_management';
import SettingManagement from './pages/setting_management';
function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isUserManagementPage = location.pathname === '/user_management';
    const isSettingManagementPage = location.pathname === '/setting';
    return (
        <>
            {!isLoginPage && <Header />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user_management" element={<UserManagement />} />
                <Route path="/setting" element={<SettingManagement />} />
            </Routes>
            {!isLoginPage && !isUserManagementPage && !isSettingManagementPage && <SearchBar />}
        </>
    );
}

export default App;
