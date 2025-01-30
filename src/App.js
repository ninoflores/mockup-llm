import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import SearchBar from './components/search_bar';
import UserManagement from './pages/user_management';

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

    return (
        <>
            {!isLoginPage && <Header />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user_management" element={<UserManagement />} />
            </Routes>
            {!isLoginPage && <SearchBar />}
        </>
    );
}

export default App;
