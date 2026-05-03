import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white fixed p-5">
      <h1 className="text-2xl font-bold mb-8">College CMS</h1>

      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/courses">Courses</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;