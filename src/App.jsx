import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// A section to add general information like name, email and phone number.
// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

// Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
function Button({ text = "Click me", isSubmitted }) {
  return <button disabled={isSubmitted === "true"}>{text}</button>;
}

function handleSubmit(e) {
  e.preventDefault();
  setStatus("sent");
}

function Form({ dataType, formType = "line" }) {
  const [status, setStatus] = useState("typing");
  const [type, setType] = useState("line");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }
  function handleChange(e) {
    e.preventDefault();
    setStatus("typing");
  }

  function handleTextAreaChange(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  if (status === "sent") {
    return (
      <div>
        <h2>{dataType}</h2>
        <p>{message}</p>
        <Button text="Edit" onClick={handleChange} />
      </div>
    );
  }

  return (
    <form>
      <label>
        {dataType + ": "}
        <input
          onChange={handleTextAreaChange}
          value={message}
          hidden={formType === "block"}
        />
        <textarea hidden={formType === "line"} />
      </label>
      <button onClick={handleSubmit}>Submit </button>
    </form>
  );
}

function EditCV() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [time, setTime] = useState("");
  const [position, setPosition] = useState("");
  const [resp, setResp] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        Full name:{" "}
        {isEditing ? (
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <b>{name}</b>
        )}
      </label>
      <label>
        City:{" "}
        {isEditing ? (
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        ) : (
          <b>{city}</b>
        )}
      </label>
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
    </form>
  );
}
function CV(){
  const [isEditing, setIsEditing] = useState(false);
  const fields =['Name', 'City', 'E-mail', 'Phone number', 'School', 'Title of degree', 'Time at school', 'Company', 'Time at company', 'Position held', 'Responsabilities']

  function handleSubmit(e){
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  const fieldItems = fields.map(field => 
    <Field 
    
    inputType = {field}
    status = {isEditing}
    />
)
  return(
    <>
    <form
      className="cv-form"
      onSubmit ={handleSubmit}
    >
    {fieldItems}
   
     
     <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
     </form>
    </>
  )
}
function Field({inputType, status}){
  // const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  return (
    
      <label>
        {inputType}:{" "}
        {status ? (
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        ) : (
          <b>{input}</b>
        )}
      </label>
      
  );
}

 



export { CV, Form };
