import './App.css';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuFood from './page/MenuFood';
import Help from './page/Help';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/menufood" element={<MenuFood />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
