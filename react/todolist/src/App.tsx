import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// page
import Header from "./components/Header";
import {default as Home} from './pages/Home';
import {default as Todolist} from './pages/Todolist';

function App() {
  return (<>
    {/* // header */}
    <Header></Header>

    {/* // content */}
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/todolist/:menu" element={<Todolist />} />
      </Routes>
    </div>
  </>);
}

export default App;
