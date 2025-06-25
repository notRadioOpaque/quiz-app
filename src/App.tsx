import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="min-h-screen border flex items-center justify-center text-center w-full bg-gray-50 text-gray-900 p-4 mx-auto">
      <Outlet />
    </main>
  );
}
