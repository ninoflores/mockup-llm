import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
