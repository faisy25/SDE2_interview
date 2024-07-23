import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoCreate from "./pages/TodoCreate";
import TodoEdit from "./pages/TodoEdit";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/create" element={<TodoCreate />} />
          <Route path="/edit/:user" element={<TodoEdit />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
