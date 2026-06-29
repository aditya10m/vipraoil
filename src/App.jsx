import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Story from "./pages/story";
import VipraBotPage from "./pages/VipraBotPage";

function App() {
return ( <Routes>
<Route path="/" element={<Home />} />
<Route path="/mission" element={<Mission />} />
<Route path="/story" element={<Story />} />
<Route path="/viprabot" element={<VipraBotPage />} /> </Routes>
);
}

export default App;
