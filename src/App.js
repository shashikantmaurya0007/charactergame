import "./App.css";

import Header from "./component/header/Header";
import TimeCount from "./component/TimeCount/TimeCount";
import WordDisplay from "./component/worddisplay/WordDisplay";
import { useWord } from "./store/word/word_context";
function App() {
  const {
    wordState: { word },
  } = useWord();
  return (
    <div className="App">
      <Header />
      <WordDisplay />
      <TimeCount />
    </div>
  );
}

export default App;
