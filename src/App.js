import "./App.css";
import QuestionsList from "./components/QuestionsList";
import data from "./data";

function App() {
  return (
    <div className="app container">
      <QuestionsList data={data} />
    </div>
  );
}

export default App;
