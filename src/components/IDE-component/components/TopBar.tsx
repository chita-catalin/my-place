import { useContext } from "react";
import { ThemeContext } from "../../theme-component";
import "../styles/top-bar.css";

export const TopBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme.theme + "-top-bar"}>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Theme</a>
            <ul>
              <li onClick={() => theme.setTheme("neo-brutalism")}>
                Neo Brutalism
              </li>
              <li>
                <a href="#">Neumorphism</a>
              </li>
              <li onClick={() => theme.setTheme("vs-code")}>
                MS Visual Studio Code
              </li>

              <li>Material UI v5</li>

              <li>
                <a href="#">Ant Design</a>
              </li>

              <li>
                <a href="#">3D</a>
              </li>

              <li>
                <a href="#">Bootstrap</a>
              </li>

              <li>
                <a href="#">Semantic UI</a>
              </li>

              <li>
                <a href="#">Shards React</a>
              </li>

              <li>
                <a href="#">Chakra UI</a>
              </li>

              <li>
                <a href="#">Glass UI</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
