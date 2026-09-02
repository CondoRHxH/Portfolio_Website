import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/LanguageContext';

const styles = {
  wrapper: { maxWidth: '480px', margin: '0 auto', padding: '40px 24px' },
  heading: { fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.2 },
  subheading: { fontSize: '15px', color: '#9a94a8', marginBottom: '28px' },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '20px' },
  field: { display: 'flex', flexDirection: 'column' as const, gap: '8px' },
  label: { fontSize: '15px', fontWeight: 500, color: '#e5e5e5' },
  input: {
    backgroundColor: '#141118', border: '1px solid #3a2f4d', borderRadius: '8px',
    padding: '12px 14px', fontSize: '15px', color: '#fff', outline: 'none',
  },
  textarea: {
    backgroundColor: '#141118', border: '1px solid #3a2f4d', borderRadius: '8px',
    padding: '12px 14px', fontSize: '15px', color: '#fff', outline: 'none',
    resize: 'vertical' as const, minHeight: '120px',
  },
  button: {
    background: 'linear-gradient(90deg, #7c3aed, #a855f7)', color: '#fff',
    fontSize: '16px', fontWeight: 600, padding: '13px 16px', borderRadius: '8px',
    border: 'none', cursor: 'pointer', marginTop: '4px',
  },
  banner: {
    backgroundColor: 'rgba(124, 58, 237, 0.15)',
    border: '1px solid #7c3aed',
    color: '#e9d5ff',
    borderRadius: '8px',
    padding: '12px 14px',
    fontSize: '14px',
    marginBottom: '20px',
  },
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xjyvwwbd");
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  // Reset the fields once a submission succeeds, but keep the form mounted
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>{t.emailMe.title}</h1>
      <p style={styles.subheading}>{t.emailMe.subtitle}</p>

      {state.succeeded && (
        <div style={styles.banner}>{t.emailMe.success}</div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label htmlFor="name" style={styles.label}>{t.emailMe.name}</label>
          <input id="name" type="text" name="name" style={styles.input} />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>{t.emailMe.email}</label>
          <input id="email" type="email" name="email" style={styles.input} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div style={styles.field}>
          <label htmlFor="message" style={styles.label}>{t.emailMe.message}</label>
          <textarea id="message" name="message" style={styles.textarea} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting} style={styles.button}>
          {t.emailMe.submit}
        </button>
      </form>
    </div>
  );
}

function EmailMe() {
  return <ContactForm />;
}

export default EmailMe;