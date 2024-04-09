import './App.css';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuFood from './page/MenuFood';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/menufood" element={<MenuFood />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
