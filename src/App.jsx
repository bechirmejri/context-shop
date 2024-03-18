import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  const notify = () => toast("Wow so easy !");
  return (
    <div className="bg-sky-50">
      <Header />
      <Shop />
      <ToastContainer/>
    </div>
  );
}

export default App;
