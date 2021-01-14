import "./App.css";
import ServantList from "./pages/servantslist";

/* ----------------------------------------------
POSSIBLE COMPONENT STRUCTURE
- Main (introduction, news)
- Character Listing
- Individaul Character Display
- Header
- Footer
Indexing: https://api.atlasacademy.io/export/NA/basic_servant.json
Display Individual: https://api.atlasacademy.io/nice/NA/servant/800100
Create by this amazing FGO comminity: https://atlasacademy.io/about-us/
---------------------------------------------- */

function App() {
  return (
    <div className="App">
      <h1>E-Rank Gatcha Luck</h1>
      <ServantList />
    </div>
  );
}

export default App;
