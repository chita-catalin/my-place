import { ThemeContext, useTheme } from "./components/theme-component";
import { AppRouting } from "./routing";

import "./App.css";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <AppRouting />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
