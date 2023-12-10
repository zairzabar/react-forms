import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  console.log(formData);

  function handleFormData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleFormData}
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleFormData}
      />
    </form>
  );
}

export default App;
