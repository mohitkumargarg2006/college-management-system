import { useState, useEffect } from "react";

function Dashboard() {
  const [page, setPage] = useState("dashboard");
  //clock
  const [time, setTime] = useState(new Date());
  useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
  }, []);
  //attendace
  const [attendanceDate, setAttendanceDate] = useState("");
  const [attendance, setAttendance] = useState(
  JSON.parse(localStorage.getItem("attendance")) || []
  );
  useEffect(() => {
  localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  // Students
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [sname, setSname] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [editStudentId, setEditStudentId] = useState(null);
  const [searchStudent, setSearchStudent] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Teachers
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.getItem("teachers")) || []
  );
  const [tname, setTname] = useState("");
  const [subject, setSubject] = useState("");
  const [dept, setDept] = useState("");
  const [editTeacherId, setEditTeacherId] = useState(null);
  const [searchTeacher, setSearchTeacher] = useState("");

  // Courses
  const [courses, setCourses] = useState(
    JSON.parse(localStorage.getItem("courses")) || []
  );
  const [courseName, setCourseName] = useState("");

  // Notices
  const [notices, setNotices] = useState(
    JSON.parse(localStorage.getItem("notices")) || []
  );
  const [noticeText, setNoticeText] = useState("");

  // Fees
  const [fees, setFees] = useState(
    JSON.parse(localStorage.getItem("fees")) || []
  );
  const [feeName, setFeeName] = useState("");
  const [amount, setAmount] = useState("");

  // Results
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("results")) || []
  );
  const [rname, setRname] = useState("");
  const [marks, setMarks] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Local Storage Save
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem("fees", JSON.stringify(fees));
  }, [fees]);

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  // Student Functions
  const addStudent = () => {
    if (!sname || !roll || !course) return;

    if (editStudentId) {
      setStudents(
        students.map((item) =>
          item.id === editStudentId
            ? { id: editStudentId, sname, roll, course }
            : item
        )
      );
      setEditStudentId(null);
    } else {
      setStudents([...students, { id: Date.now(), sname, roll, course }]);
    }

    setSname("");
    setRoll("");
    setCourse("");
  };

  const editStudent = (id) => {
    const data = students.find((item) => item.id === id);
    setSname(data.sname);
    setRoll(data.roll);
    setCourse(data.course);
    setEditStudentId(id);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  // Teacher Functions
  const addTeacher = () => {
    if (!tname || !subject || !dept) return;

    if (editTeacherId) {
      setTeachers(
        teachers.map((item) =>
          item.id === editTeacherId
            ? { id: editTeacherId, tname, subject, dept }
            : item
        )
      );
      setEditTeacherId(null);
    } else {
      setTeachers([...teachers, { id: Date.now(), tname, subject, dept }]);
    }

    setTname("");
    setSubject("");
    setDept("");
  };

  const editTeacher = (id) => {
    const data = teachers.find((item) => item.id === id);
    setTname(data.tname);
    setSubject(data.subject);
    setDept(data.dept);
    setEditTeacherId(id);
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((item) => item.id !== id));
  };

 const menu = [
  { key: "dashboard", icon: "🏠", label: "Dashboard" },
  { key: "students", icon: "🎓", label: "Students" },
  { key: "teachers", icon: "👨‍🏫", label: "Teachers" },
  { key: "attendance", icon: "📅", label: "Attendance" },
  { key: "courses", icon: "📚", label: "Courses" },
  { key: "fees", icon: "💰", label: "Fees" },
  { key: "results", icon: "📝", label: "Results" },
  { key: "notices", icon: "📢", label: "Notices" },
  { key: "reports", icon: "📊", label: "Reports" }
];

  return (
    <div style={layout}>
      {/* Sidebar */}
      <div style={sidebar}>
        <h2 style={{ marginBottom: "25px" }}>
        🎓 College CMS
        </h2>

      {menu.map((item) => (
  <div
    key={item.key}
    style={{
      ...menuBtn,
      background:
        page === item.key
          ? "linear-gradient(90deg,#2563eb,#3b82f6)"
          : "transparent",
      boxShadow:
        page === item.key
          ? "0 8px 20px rgba(37,99,235,0.25)"
          : "none",
    }}
    onClick={() => setPage(item.key)}
  >
    <span>{item.icon}</span>
    <span>{item.label}</span>
  </div>
))}
        <div style={{ marginTop: "40px" }}>
       <button
        style={sidebarLogout}
        onClick={() => {
        localStorage.removeItem("isLogin");
        window.location.href = "/";
        }}
        >
        Logout
        </button>
      </div>
      </div>
        {/* Main */}
        <div style={main}>
        <div>
        <h1
        style={{
        margin: 0,
        background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        }}
        >
         Welcome Admin 👋
        </h1>

        <p style={{ color: "#94a3b8", marginTop: "6px" }}>
        {time.toLocaleString()}
        </p>
         <p
        style={{
        marginTop: "35px",
        color: "#94a3b8",
        textAlign: "center",
        borderTop: "1px solid #334155",
        paddingTop: "15px",
         }}
        >
        © 2026 College CMS • Developed by Mohit Garg
        </p>
        </div>
        {/* Dashboard */}
        {page === "dashboard" && (
  <>
    <div style={grid}>
      <div style={card}>👨‍🎓 Students: {students.length}</div>
      <div style={card}>👨‍🏫 Teachers: {teachers.length}</div>
      <div style={card}>📚 Courses: {courses.length}</div>
      <div style={card}>📢 Notices: {notices.length}</div>
      <div style={card}>💰 Fees Entries: {fees.length}</div>
      <div style={card}>📝 Results: {results.length}</div>
    </div>

    <div style={bigCard}>
      <h2>College Management System</h2>
      <p>All modules are active and working successfully.</p>
    </div>
  </>
)}

        {/* Students */}
        {page === "students" && (
          <>
            <h2>Students</h2>
            <input style={input} placeholder="Name" value={sname} onChange={(e) => setSname(e.target.value)} />
            <input style={input} placeholder="Roll" value={roll} onChange={(e) => setRoll(e.target.value)} />
            <input style={input} placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
            <input
              style={input}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              style={input}
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button style={btn} onClick={addStudent}>
              {editStudentId ? "Update" : "Add"}
            </button>
            <input
            style={input}
            placeholder="Search Student..."
            value={searchStudent}
            onChange={(e) => setSearchStudent(e.target.value)}
            />
            <button style={btn} onClick={() => window.print()}>
              Print Students
              </button>
            {students
            .filter((s) =>
            s.sname.toLowerCase().includes(searchStudent.toLowerCase())
            )
            .map((s) => (
              <div key={s.id} style={row}>
                {s.sname} - {s.roll} - {s.course}
                <div>
                  <button style={editBtn} onClick={() => editStudent(s.id)}>Edit</button>
                  <button style={deleteBtn} onClick={() => deleteStudent(s.id)}>Delete</button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Teachers */}
        {page === "teachers" && (
          <>
            <h2>Teachers</h2>
            <input style={input} placeholder="Name" value={tname} onChange={(e) => setTname(e.target.value)} />
            <input style={input} placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <input style={input} placeholder="Department" value={dept} onChange={(e) => setDept(e.target.value)} />
            <button style={btn} onClick={addTeacher}>
              {editTeacherId ? "Update" : "Add"}
            </button>
            <input
            style={input}
              placeholder="Search Teacher..."
              value={searchTeacher}
              onChange={(e) => setSearchTeacher(e.target.value)}
            />
            {teachers
              .filter((t) =>
              t.tname.toLowerCase().includes(searchTeacher.toLowerCase())
              )
              .map((t) => (
              <div key={t.id} style={row}>
                {t.tname} - {t.subject} - {t.dept}
                <div>
                  <button style={editBtn} onClick={() => editTeacher(t.id)}>Edit</button>
                  <button style={deleteBtn} onClick={() => deleteTeacher(t.id)}>Delete</button>
                </div>
              </div>
            ))}
          </>
        )}

        {page === "attendance" && (
  <>
    <h2>Attendance</h2>
    
    <div style={grid}>
  <div style={card}>Total Records: {attendance.length}</div>

  <div style={card}>
    Present: {
      attendance.filter((a) => a.status === "Present").length
    }
  </div>

  <div style={card}>
    Absent: {
      attendance.filter((a) => a.status === "Absent").length
    }
  </div>
</div>
     <input
  type="date"
  style={input}
  value={attendanceDate}
  onChange={(e) => setAttendanceDate(e.target.value)}
/>     
    {students.map((s) => (
      <div key={s.id} style={row}>
        {s.sname}

        <div>
          <button
  style={editBtn}
  onClick={() => {
    if (!attendanceDate) {
      alert("Select Date First");
      return;
    }
    const alreadyMarked = attendance.some(
  (a) => a.name === s.sname && a.date === attendanceDate
);

if (alreadyMarked) {
  alert("Attendance already marked");
  return;
}
    setAttendance([
      ...attendance,
      {
        id: Date.now(),
        name: s.sname,
        status: "Present",
        date: attendanceDate,
      },
    ]);
  }}
>
  Present
</button>

          <button
  style={deleteBtn}
  onClick={() => {
    if (!attendanceDate) {
      alert("Select Date First");
      return;
    }
    const alreadyMarked = attendance.some(
  (a) => a.name === s.sname && a.date === attendanceDate
);

if (alreadyMarked) {
  alert("Attendance already marked");
  return;
}
    setAttendance([
      ...attendance,
      {
        id: Date.now(),
        name: s.sname,
        status: "Absent",
        date: attendanceDate,
      },
    ]);
  }}
>
  Absent
</button>
        </div>
      </div>
    ))}

    <h3 style={{ marginTop: "20px" }}>Records</h3>

    {attendance.map((a) => (
  <div key={a.id} style={row}>
    {a.name} - {a.status} - {a.date}

    <button
      style={deleteBtn}
      onClick={() =>
        setAttendance(
          attendance.filter((item) => item.id !== a.id)
        )
      }
    >
      Delete
    </button>
  </div>
))}
  </>
)}
        {page === "reports" && (
  <>
    <h2>Reports</h2>

    <div style={grid}>
      <div style={card}>Total Students: {students.length}</div>
      <div style={card}>Total Teachers: {teachers.length}</div>
      <div style={card}>Total Courses: {courses.length}</div>
      <div style={card}>Fees Records: {fees.length}</div>
      <div style={card}>Attendance Records: {attendance.length}</div>
      <div style={card}>Results Records: {results.length}</div>
    </div>
  </>
)}
        {/* Courses */}
        {page === "courses" && (
          <>
            <h2>Courses</h2>
            <input style={input} placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
            <button style={btn} onClick={() => {
              if (!courseName) return;
              setCourses([...courses, { id: Date.now(), courseName }]);
              setCourseName("");
            }}>Add</button>

            {courses.map((c) => (
              <div key={c.id} style={row}>{c.courseName}</div>
            ))}
          </>
        )}

        {/* Fees */}
        {page === "fees" && (
          <>
            <h2>Fees</h2>
            <input style={input} placeholder="Student Name" value={feeName} onChange={(e) => setFeeName(e.target.value)} />
            <input style={input} placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button style={btn} onClick={() => {
              if (!feeName || !amount) return;
              setFees([...fees, { id: Date.now(), feeName, amount }]);
              setFeeName("");
              setAmount("");
            }}>Add</button>

            {fees.map((f) => (
              <div key={f.id} style={row}>{f.feeName} - ₹{f.amount}</div>
            ))}
          </>
        )}
        {/*results */}
        {page === "results" && (
  <>
    <h2>Results</h2>

    <input
      style={input}
      placeholder="Student Name"
      value={rname}
      onChange={(e) => setRname(e.target.value)}
    />

    <input
      style={input}
      placeholder="Marks"
      value={marks}
      onChange={(e) => setMarks(e.target.value)}
    />

    <button
      style={btn}
      onClick={() => {
        if (!rname || !marks) return;

        setResults([
          ...results,
          { id: Date.now(), rname, marks },
        ]);

        setRname("");
        setMarks("");
      }}
    >
      Add Result
    </button>

    <input
      style={input}
      placeholder="Search Student..."
      value={searchResult}
      onChange={(e) => setSearchResult(e.target.value)}
    />

    {results
      .filter((r) =>
        r.rname
          ?.toLowerCase()
          .includes(searchResult.toLowerCase())
      )
      .map((r) => (
        <div key={r.id} style={row}>
          {r.rname} - {r.marks}
        </div>
      ))}
  </>
)}
        {/* Notices */}
        {page === "notices" && (
          <>
            <h2>Notices</h2>
            <input style={input} placeholder="Notice" value={noticeText} onChange={(e) => setNoticeText(e.target.value)} />
            <button style={btn} onClick={() => {
              if (!noticeText) return;
              setNotices([...notices, { id: Date.now(), noticeText }]);
              setNoticeText("");
            }}>Add</button>

            {notices.map((n) => (
              <div key={n.id} style={row}>{n.noticeText}</div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// Styles
const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "#0f172a",
  color: "white",
};

const sidebar = {
  width: "250px",
  background: "#111827",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const menuBtn = {
  padding: "12px 14px",
  marginTop: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  transition: "0.3s",
  color: "white",
};

const main = {
  flex: 1,
  padding: "30px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
};

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(37,99,235,0.15)",
  transition: "0.3s",
};

const input = {
  padding: "10px",
  marginRight: "10px",
  marginBottom: "10px",
  background: "#111827",
  color: "white",
  border: "1px solid #374151",
  borderRadius: "8px",
};

const btn = {
  padding: "10px 18px",
  background: "linear-gradient(90deg,#2563eb,#3b82f6)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const row = {
  background: "#1e293b",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
};

const editBtn = {
  background: "orange",
  border: "none",
  padding: "6px 10px",
  marginRight: "8px",
  borderRadius: "6px",
};

const deleteBtn = {
  background: "red",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "6px",
};

const logoutBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "8px",
  cursor: "pointer",
};
const bigCard = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  marginTop: "20px",
};
const sidebarLogout = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg,#ef4444,#dc2626)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};


export default Dashboard;