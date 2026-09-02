import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/LanguageContext';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

const styles = {
  outer: { maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' },
  heading: { fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.2 },
  subheading: { fontSize: '15px', color: '#9a94a8', marginBottom: '28px' },
  card: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    border: '1px solid #3a2f4d',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#0d0b12',
  },
  infoPanel: {
    flex: '1 1 320px',
    padding: '40px 32px',
    borderRight: '1px solid #3a2f4d',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    gap: '28px',
  },
  formPanel: {
    flex: '2 1 480px',
    padding: '40px 32px',
  },
  infoList: { display: 'flex', flexDirection: 'column' as const, gap: '28px' },
  infoItem: { display: 'flex', alignItems: 'center', gap: '16px' },
  infoIcon: {
    width: '52px', height: '52px', borderRadius: '12px',
    backgroundColor: 'rgba(124, 58, 237, 0.15)', border: '1px solid #7c3aed',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  infoTextWrap: { display: 'flex', flexDirection: 'column' as const, gap: '2px' },
  infoLabel: { fontSize: '14px', color: '#9a94a8' },
  infoValue: { fontSize: '19px', color: '#fff', fontWeight: 600, textDecoration: 'none' },
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

const CONTACT_EMAIL = 'fahdbenbali1@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/fahd-benbali';
// const PHONE_NUMBER = '+212 6 08 108900';

function InfoPanel({ t }: { t: any }) {
  return (
    <div style={styles.infoPanel}>
      <div style={styles.infoList}>
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ ...styles.infoItem, textDecoration: 'none' }}>
          <div style={styles.infoIcon}>
            <EmailIcon style={{ color: '#c084fc', fontSize: '26px' }} />
          </div>
          <div style={styles.infoTextWrap}>
            <span style={styles.infoLabel}>Email</span>
            <span style={styles.infoValue}>{CONTACT_EMAIL}</span>
          </div>
        </a>


        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ ...styles.infoItem, textDecoration: 'none' }}>
          <div style={styles.infoIcon}>
            <LinkedInIcon style={{ color: '#c084fc', fontSize: '26px' }} />
          </div>
          <div style={styles.infoTextWrap}>
            <span style={styles.infoLabel}>LinkedIn</span>
            <span style={styles.infoValue}>{t.emailMe.linkedin}</span>
          </div>
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xjyvwwbd");
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div id="contact" style={styles.outer}>
      <h1 style={styles.heading}>{t.emailMe.title}</h1>
      <p style={styles.subheading}>{t.emailMe.subtitle}</p>

      <div style={styles.card}>
        <InfoPanel t={t} />

        <div style={styles.formPanel}>
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
      </div>
    </div>
  );
}

function EmailMe() {
  return <ContactForm />;
}

export default EmailMe;