import { useState } from "react";

type EmailFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitStatus = "idle" | "sending";

type ApiResponse = {
  status: "success" | "fail";
};

function Form() {
  const [emailForm, setEmailForm] = useState<EmailFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function resetEmailForm() {
    setEmailForm({ name: "", email: "", phone: "", message: "" });
  }

  function handleEmailFormChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setEmailForm((prevEmailData) => ({
      ...prevEmailData,
      [name]: value,
    }));

    if (result.length > 0) {
      setResult("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("");
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(emailForm),
      });

      const data: ApiResponse = await response.json();

      if (data.status === "success") {
        setResult("Meddelande skickat!");
        resetEmailForm();
      } else {
        setResult("Ditt meddelande kunde inte skickas.");
      }
    } catch (error) {
      console.error(error);
      setResult("Problem med att skicka meddelande.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="contact-form-row">
        <input
          type="text"
          placeholder="Namn*"
          name="name"
          required
          value={emailForm.name}
          onChange={handleEmailFormChange}
        />

        <input
          placeholder="E-post*"
          type="email"
          name="email"
          required
          value={emailForm.email}
          onChange={handleEmailFormChange}
        />

        <input
          placeholder="Telefonnummer"
          type="tel"
          name="phone"
          value={emailForm.phone}
          onChange={handleEmailFormChange}
        />
      </div>

      <textarea
        maxLength={300}
        placeholder="Meddelande (max 300 tecken)"
        name="message"
        required
        value={emailForm.message}
        onChange={handleEmailFormChange}
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Skickar..." : "Skicka meddelande"}
      </button>

      {result && <p className="contact-form-result">{result}</p>}
    </form>
  );
}

export default Form;
