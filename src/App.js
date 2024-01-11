import './App.css';
import './globals.css';

import LeftSection from './components/LeftSection';
import MiddleSection from './components/MiddleSection';
import NavSection from './components/NavSection';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className="App">
      <NavSection/>
      <LeftSection/>
      <MiddleSection/>
      <RightSection/>
    </div>
  );
}

export default App;
