import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_p9x3l8p",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_eg7gpkg",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "9uRo3OaKGxW19-906",
  TO_EMAIL: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "nethajinethaji049@gmail.com",
};

export interface SendContactEmailParams {
  name: string;
  email: string;
  phone: string;
  city?: string;
  product?: string;
  message?: string;
  title?: string;
  to_email?: string;
}

export interface SendEmailResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Sends a contact / demo enquiry email using EmailJS.
 * Template fields expected:
 * - {{title}}: in Subject "Contact Us: {{title}}"
 * - {{name}}: CUSTOMER NAME & From Name
 * - {{phone}}: CONTACT NUMBER
 * - {{email}}: EMAIL ADDRESS & Reply To
 * - {{city}}: City
 * - {{product}}: Product
 * - {{message}}: CUSTOMER MESSAGE
 * - {{to_email}}: Recipient support email
 */
export async function sendContactEmail(params: SendContactEmailParams): Promise<SendEmailResult> {
  const serviceId = EMAILJS_CONFIG.SERVICE_ID;
  const templateId = EMAILJS_CONFIG.TEMPLATE_ID;
  const publicKey = EMAILJS_CONFIG.PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: "Email service is not configured properly. Missing EmailJS credentials.",
    };
  }

  // Construct title for subject line: "Contact Us: {{title}}"
  const subjectTitle =
    params.title ||
    `${params.product || "Enquiry"} - ${params.name}${params.city ? ` (${params.city})` : ""}`;

  const targetToEmail = params.to_email || EMAILJS_CONFIG.TO_EMAIL;

  const templateParams: Record<string, unknown> = {
    title: subjectTitle,
    name: params.name,
    phone: params.phone,
    email: params.email,
    city: params.city?.trim() || "Not specified",
    product: params.product || "Hospital Management Software",
    message: params.message?.trim() || "No remarks provided.",
    // Recipient email aliases to match {{to_email}} or {{toemail}} in EmailJS template
    to_email: targetToEmail,
    toemail: targetToEmail,
    to_mail: targetToEmail,
    to: targetToEmail,
    recipient_email: targetToEmail,
    recipient: targetToEmail,
    from_name: params.name,
    reply_to: params.email,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    });

    if (response.status === 200 || response.text === "OK") {
      return {
        success: true,
        message: "Your enquiry has been successfully delivered to our support team.",
      };
    }

    return {
      success: false,
      error: `Service responded with status ${response.status}: ${response.text}`,
    };
  } catch (err: unknown) {
    console.error("EmailJS Error:", err);

    let errorMessage = "Failed to send email. Please try again or contact us directly.";
    if (typeof err === "object" && err !== null) {
      if ("text" in err && typeof (err as { text: unknown }).text === "string") {
        errorMessage = (err as { text: string }).text;
      } else if ("message" in err && typeof (err as { message: unknown }).message === "string") {
        errorMessage = (err as { message: string }).message;
      }
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}
