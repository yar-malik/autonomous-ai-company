"use client";

import { useState } from "react";
import styles from "./submit-form.module.css";

const initialState = {
  companyName: "",
  website: "",
  tagline: "",
  contactName: "",
  contactEmail: "",
  modelType: "",
  mrr: "",
  companiesBuilt: "",
  notes: ""
};

export default function SubmitForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Submission failed.");
      }

      setFormData(initialState);
      setStatus({
        type: "success",
        message: "Submission received. It has been sent privately for review."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Submission failed."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <label>
          Company name
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Example: Acme Autonomous"
            required
          />
        </label>

        <label>
          Website
          <input
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://"
            required
          />
        </label>

        <label className={styles.fullWidth}>
          One-line pitch
          <input
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            placeholder="What does this company builder do?"
            required
          />
        </label>

        <label>
          Your name
          <input
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Optional"
          />
        </label>

        <label>
          Your email
          <input
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="Optional"
          />
        </label>

        <label>
          Business model
          <select name="modelType" value={formData.modelType} onChange={handleChange}>
            <option value="">Select one</option>
            <option value="Platform">Platform</option>
            <option value="Studio">Studio</option>
            <option value="Service">Service</option>
            <option value="Marketplace">Marketplace</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          MRR
          <input
            name="mrr"
            value={formData.mrr}
            onChange={handleChange}
            placeholder="$25k"
          />
        </label>

        <label>
          Companies built
          <input
            name="companiesBuilt"
            value={formData.companiesBuilt}
            onChange={handleChange}
            placeholder="12"
          />
        </label>

        <label className={styles.fullWidth}>
          Notes
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Anything else that should appear in the directory?"
            rows={5}
          />
        </label>
      </div>

      <div className={styles.actions}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit company"}
        </button>
        <p>
          Your contact email stays private on the frontend. Submissions are sent server-side.
        </p>
      </div>

      {status.message ? (
        <p
          className={
            status.type === "success" ? styles.successMessage : styles.errorMessage
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
