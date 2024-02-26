import Main from './views/Main'
import './App.css'
import { Routes, Route } from "react-router-dom";
import AuthorForm from './components/AuthorForm';
import Update from './views/Update';


function App() {
  
  return (
    <>
     <div className="App">
      <Routes>
      <Route path="/api" element={<Main/>} />
      <Route path="/api/author" element={<AuthorForm/>} />
      <Route element={<Update/>} path="/author/:id/edit"/>
      </Routes>
    </div>
    </>
  )
}

export default App;
