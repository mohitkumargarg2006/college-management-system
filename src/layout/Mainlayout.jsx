import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-6">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;