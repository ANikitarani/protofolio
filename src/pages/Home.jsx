import { useState } from "react";

function Home() {

  const [data] = useState({
    name: "Nikitarani A",
    schooling: "Kamaraj Matriculation Higher Secondary School",
    SSLC: "Pass",
    HSC: "86%",
    currentYear: "3rd Year",
    college: "National Engineering College",
    degree: "B.Tech Information Technology",
    cgpa: "8.4"
  });

  return (
      <div>
      <h1>Home – Personal Details</h1>

       <table
        border="1"
        cellPadding="10"
      >
        <tbody>
          <tr><th>Name</th><td>{data.name}</td></tr>
          <tr><th>Schooling</th><td>{data.schooling}</td></tr>
          <tr><th>10th Percentage</th><td>{data.SSLC}</td></tr>
          <tr><th>12th Percentage</th><td>{data.HSC}</td></tr>
          <tr><th>Current Year</th><td>{data.currentYear}</td></tr>
          <tr><th>College</th><td>{data.college}</td></tr>
          <tr><th>Degree</th><td>{data.degree}</td></tr>
          <tr><th>CGPA upto 4th semester</th><td>{data.cgpa}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
