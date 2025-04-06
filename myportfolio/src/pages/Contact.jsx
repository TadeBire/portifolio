import { useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  // State for storing name, email, and form submission status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState(""); // To store the submitted name
  const [submittedEmail, setSubmittedEmail] = useState(""); // To store the submitted email

  // Handlers to update the state when inputs change
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setSubmittedName(name);
    setSubmittedEmail(email);
  };

  return (
    <div className="py-16 px-4 md:px-16 bg-blue-50">
      {" "}
      {/* Light pastel blue background */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for inquiries, collaborations, or just to say
          hello. I'd love to hear from you!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl bg-gradient-to-r from-pink-500 to-yellow-400 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105">
          {/* Gradient background from pink to yellow */}
          <ContactForm
            name={name}
            email={email}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            submittedName={submittedName}
            submittedEmail={submittedEmail}
            handleSubmit={handleSubmit} // Pass the submit handler
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
