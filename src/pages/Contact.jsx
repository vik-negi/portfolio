import React, { useState } from "react";
// import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // const response = await axios.post(
      //   "https://example.com/api/contact",
      //   form
      // );
      // console.log(response.data);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <section
      className="section main project-section"
      id="projects"
      tabIndex="18"
    >
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />

            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
