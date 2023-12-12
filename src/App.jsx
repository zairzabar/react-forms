import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  console.log(formData.favColor);

  function handleFormData(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
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

      <textarea
        name="comments"
        placeholder="Comments"
        onChange={handleFormData}
      ></textarea>

      <div>
        <input
          type="checkbox"
          id="isFriendly"
          name="isFriendly"
          onChange={handleFormData}
          checked={formData.isFriendly}
        />
        <label htmlFor="isFriendly">Are you friendly</label>
      </div>
      <fieldset>
        <legend>Current Employment Status</legend>

        <input
          type="radio"
          name="employment"
          id="unemployed"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleFormData}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          name="employment"
          id="part-time"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleFormData}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          name="employment"
          id="full-time"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleFormData}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <label htmlFor="favColor"></label>
      <select
        value={formData.favColor}
        onChange={handleFormData}
        id="favColor"
        name="favColor"
      >
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

      <br />
      <input type="submit" value="Send it in" />
    </form>
  );
}

export default App;
