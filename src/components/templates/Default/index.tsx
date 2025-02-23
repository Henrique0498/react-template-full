import { Outlet } from "react-router-dom";

export function TemplateDefault() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2022 My Website</p>
      </footer>
    </>
  );
}
