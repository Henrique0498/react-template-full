import { Outlet } from "react-router-dom";

export function TemplateAuthenticated() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>authenticada</li>
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
