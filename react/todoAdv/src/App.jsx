import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskComponent from "./components/TaskComponent";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-light flex-grow">
        <div className="my-2">
          <TaskComponent />
          <TaskComponent />
          <TaskComponent />
          <TaskComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
