
import { useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "tvuj@email.cz";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\n` +
      `E-mail: ${form.email}\n\n` +
      `Zpráva:\n${form.message}`
    );

    setStatus(
      "Pokud se neotevře e-mailová aplikace, zkontroluj její nastavení."
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact-page" id="contact">
      <section className="contact-hero">
        <span className="contact-eyebrow">
          POJĎME SI NAPSAT
        </span>

        <h1>
          Máš nějaký <span>projekt?</span>
        </h1>

        <p>
          Máš otázku, nápad nebo chceš spolupracovat?
          Napiš mi. Rád si poslechnu, co máš na mysli.
        </p>
      </section>

      <section className="contact-layout">
        <aside className="contact-info">
          <h2>Kontaktní údaje</h2>

          <p className="contact-info-intro">
            Vyber si způsob kontaktu, který ti nejvíce vyhovuje.
          </p>

          <a
            className="contact-detail"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            <span className="contact-icon" aria-hidden="true">
              @
            </span>
            <span>
              <small>E-mail</small>
              <strong>{CONTACT_EMAIL}</strong>
            </span>
          </a>

          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">
              ↗
            </span>
            <span>
              <small>Dostupnost</small>
              <strong>Otevřený novým projektům</strong>
            </span>
          </div>

          <div className="contact-note">
            <span aria-hidden="true">✳</span>
            <p>
              Každý dobrý projekt začíná rozhovorem.
              Těším se na tvoji zprávu.
            </p>
          </div>
        </aside>

        <div className="contact-form-card">
          <h2>Napiš mi zprávu</h2>
          <p className="contact-form-intro">
            Vyplň formulář a připrav zprávu k odeslání.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Jméno</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Tvoje jméno"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="ty@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Předmět</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Čeho se zpráva týká?"
                value={form.subject}
                onChange={handleChange}
                maxLength={150}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Zpráva</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Napiš mi více informací..."
                value={form.message}
                onChange={handleChange}
                maxLength={5000}
                rows={5}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              Připravit e-mail
              <span aria-hidden="true"> ↗</span>
            </button>

            <p className="contact-status" role="status">
              {status}
            </p>

            <p className="contact-privacy">
              Odesláním se otevře tvoje e-mailová aplikace.
              Zpráva se neodesílá automaticky.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
