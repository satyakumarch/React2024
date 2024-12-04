import React from "react";
import StudentDetails from "./StudentDetails";

const StudentList = () => {
  const students = [
    { id: 1, name: "Alice", age: 20, course: "Computer Science" },
    { id: 2, name: "Bob", age: 22, course: "Mechanical Engineering" },
    { id: 3, name: "Charlie", age: 19, course: "Mathematics" },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <div className="student-list">
        {students.map((student) => (
          <StudentDetails
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
