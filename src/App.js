import "./App.css";
import ContentContainer from "./components/contentContainer/ContentContainer";
import SideMenu from "./components/sideMenu/SideMenu";
import { useState } from "react";
function App() {
  let [chosenCategory, setChosenCategory] = useState("introduction");

  let updateCategory = (value) => {
    setChosenCategory(value);
  };

  return (
    <div className="App">
      <SideMenu updateCategory={updateCategory} />
      <ContentContainer chosenCategory={chosenCategory} />
    </div>
  );
}

export default App;
