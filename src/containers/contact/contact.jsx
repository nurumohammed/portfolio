import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Page from "../../components/pageHeaderContent/page";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {};

    if (!name.match(/^[a-zA-Z ]+$/)) {
      newErrors.name = "Name should contain letters only";
    }

    if (!email.includes("@")) {
      newErrors.email = "Email should be a valid email address";
    }

    if (message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission logic here
      console.log("Form submitted");

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <section id="Contact" className="bg-cyan-50">
      <Page headerText="My Contact" icon={<BsInfoCircleFill />} />
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4">
            You can reach me using the following contact details:
          </p>
          <ul className="mb-8">
            <li>Email: meetnurumd5520@gmail.com</li>
            <li>Phone: +251-920-2196-04</li>
            <li>Address: Amhara, Kombolcha, Ethiopia</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded py-2 px-3`}
                value={name}
                onChange={handleNameChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded py-2 px-3`}
                value={email}
                onChange={handleEmailChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className={`w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded py-2 px-3 h-32`}
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
