import { useState } from "react";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    schooling: "",
    SSLC: "",
    HSC: "",
    currentYear: "",
    college: "",
    degree: "",
    cgpa: "",
    about: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Data Updated Successfully!");
    console.log(formData);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit / Update Details</h1>

      <form onSubmit={handleSubmit}>
        
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              {key.toUpperCase()}
            </label>
            <input 
              name={key}
              value={formData[key]}
              onChange={handleChange}
              style={{ padding: "6px", width: "300px" }}
            />
          </div>
        ))}

        <button 
          style={{ padding: "10px 20px", background: "green", color: "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
