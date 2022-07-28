
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';

// page
import Header from "./components/Header";
import {default as Home} from './pages/Home';
import {default as Todolist} from './pages/Todolist';

function App() {
  return (<>
    <Provider store={store}>
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
    </Provider>
  </>);
}

export default App;
