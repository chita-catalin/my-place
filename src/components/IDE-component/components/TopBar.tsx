import { useContext } from "react";
import { ThemeContext } from "../../theme-component";
import "../styles/top-bar.css";

export const TopBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme.theme + "-top-bar"}>
      {theme.theme === "vs-code" && (
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Theme</a>
              <ul>
                <li
                  onClick={() => theme.setTheme("neo-brutalism")}
                  className="top-bar-submenu-item"
                >
                  Neo Brutalism
                </li>

                <li className="top-bar-submenu-item">Neumorphism</li>

                <li
                  onClick={() => theme.setTheme("vs-code")}
                  className="top-bar-submenu-item"
                >
                  MS Visual Studio Code
                </li>

                <li className="top-bar-submenu-item">Material UI v5</li>

                <li className="top-bar-submenu-item">Ant Design</li>

                <li className="top-bar-submenu-item">3D</li>

                <li className="top-bar-submenu-item">Bootstrap</li>

                <li className="top-bar-submenu-item">Semantic UI</li>

                <li className="top-bar-submenu-item">Shards React</li>

                <li className="top-bar-submenu-item">Chakra UI</li>

                <li className="top-bar-submenu-item">Glass UI</li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
      {theme.theme === "neo-brutalism" && (
        <nav className={theme.theme + "-nav"}>
          <ul className={theme.theme + "-ul"}>
            <li className={theme.theme + "-li"}>
              <a href="#" className={theme.theme + "-a"}>
                Home
              </a>
            </li>
            <li className={theme.theme + "-li"}>
              <a href="#" className={theme.theme + "-a"}>
                Theme
              </a>
              <ul>
                <li
                  onClick={() => theme.setTheme("neo-brutalism")}
                  className="top-bar-submenu-item"
                >
                  Neo Brutalism
                </li>

                <li className="top-bar-submenu-item">Neumorphism</li>

                <li
                  onClick={() => theme.setTheme("vs-code")}
                  className="top-bar-submenu-item"
                >
                  MS Visual Studio Code
                </li>

                <li className="top-bar-submenu-item">Material UI v5</li>

                <li className="top-bar-submenu-item">Ant Design</li>

                <li className="top-bar-submenu-item">3D</li>

                <li className="top-bar-submenu-item">Bootstrap</li>

                <li className="top-bar-submenu-item">Semantic UI</li>

                <li className="top-bar-submenu-item">Shards React</li>

                <li className="top-bar-submenu-item">Chakra UI</li>

                <li className="top-bar-submenu-item">Glass UI</li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
      Chita Catalin-Adrian | Web Engineer
    </div>
  );
};
