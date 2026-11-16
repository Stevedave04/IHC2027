/** Shared contact details and form helpers used by every form on the site. */
export const CONTACT_EMAIL = 'john@irishhypnotherapyconference.ie';
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @param {string} value @returns {boolean} */
export const isValidEmail = value => EMAIL_PATTERN.test(value.trim());

/**
 * Send a form payload to the form endpoint.
 * @param {Record<string, string>} payload
 * @returns {Promise<void>} rejects when the request fails
 */
export async function sendForm(payload) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Form endpoint responded ${response.status}`);
}
