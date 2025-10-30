import React, { useState } from "react";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimationContact from "../../assets/lotties/AnimationContact.json";
import emailjs from "@emailjs/browser";
import { useToast } from "../../context/ToastContext";

const Contact = () => {
  const form = useRef();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_9c5a64n",
        "template_zrfukag",
        form.current,
        "aEwIOQV4EQvfL485S"
      )
      .then(
        () => {
          showToast("Message successfully sent!", "success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsLoading(false);
        },
        () => {
          showToast("Failed to send the message, please try again!", "error");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="container-fluid p-5">
      <div className="d-sm-flex align-items-center justify-content-center">
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{ listStyle: "none" }} className="p-4">
              <li className="m-3 shadow-sm">
                <input
                  className={`form-control form-class ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.name && (
                  <div className="text-danger small mt-1">{errors.name}</div>
                )}
              </li>
              <li className="m-3 shadow-sm">
                <input
                  className={`form-control form-class ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="text-danger small mt-1">{errors.email}</div>
                )}
              </li>
              <li className="m-3 shadow-sm">
                <input
                  placeholder="Subject"
                  className={`form-control form-class ${errors.subject ? 'is-invalid' : ''}`}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.subject && (
                  <div className="text-danger small mt-1">{errors.subject}</div>
                )}
              </li>
              <li className="m-3 shadow-sm">
                <textarea
                  placeholder="Message"
                  name="message"
                  className={`form-control form-class ${errors.message ? 'is-invalid' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows="5"
                ></textarea>
                {errors.message && (
                  <div className="text-danger small mt-1">{errors.message}</div>
                )}
              </li>
              <li>
                <button
                  type="submit"
                  className="btn btn-primary custom-btn fw-bold m-3 px-5"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'SEND'
                  )}
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div>
          <Player
            src={AnimationContact}
            className="player d-md-none d-lg-block"
            loop
            autoplay
            style={{ maxHeight: "500px", maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
