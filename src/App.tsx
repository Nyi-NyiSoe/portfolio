import { Outlet } from "react-router-dom";

import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center w-screen bg-black">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
