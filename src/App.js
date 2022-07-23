import "./App.css";

import Header from "./component/header/Header";
import TimeCount from "./component/TimeCount/TimeCount";
import UserInput from "./component/userinput/UserInput";
import WordDisplay from "./component/worddisplay/WordDisplay";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Header />
      <WordDisplay />
      <TimeCount />
      <UserInput />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
