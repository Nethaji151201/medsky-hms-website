export interface DemoRequestData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  role: string;
  facilityType: string;
  bedCount: string;
  selectedModules: string[];
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

export interface AppointmentBookingData {
  name: string;
  email?: string;
  phone: string;
  city?: string;
  product?: string;
  remarks?: string;
  treatment?: string;
  state?: string;
  doctor?: string;
  date?: string;
  time?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  product?: string;
  city?: string;
  message: string;
  subject?: string;
  department?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

import { sendContactEmail } from "./emailjs";
import { isValidEmail, isValidPhone } from "./validation";

export async function submitDemoRequest(data: DemoRequestData): Promise<ApiResponse<DemoRequestData>> {
  if (!data.email || !data.fullName || !data.phone) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, Phone).",
    };
  }

  if (!isValidEmail(data.email)) {
    return {
      success: false,
      message: "Please provide a valid work email address.",
    };
  }

  if (!isValidPhone(data.phone)) {
    return {
      success: false,
      message: "Please provide a valid 10-digit mobile number.",
    };
  }

  // Send email notification to support
  try {
    const modulesList = data.selectedModules?.length ? data.selectedModules.join(", ") : "Standard suite";
    const demoDetails = [
      `Organization: ${data.organization || "N/A"}`,
      `Role: ${data.role || "N/A"}`,
      `Facility Type: ${data.facilityType || "N/A"}`,
      `Beds: ${data.bedCount || "N/A"}`,
      `Selected Modules: ${modulesList}`,
      `Preferred Slot: ${data.preferredDate || "Flexible"} ${data.preferredTime || ""}`,
      data.message ? `Notes: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await sendContactEmail({
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      city: data.organization || "Not specified",
      product: "Hospital Management Software Demo",
      message: demoDetails,
      title: `Demo Request - ${data.organization || data.fullName}`,
    });
  } catch (err) {
    console.error("Error sending demo request notification:", err);
  }

  return {
    success: true,
    message: "Thank you! Your personalized Medsky HMS demo request has been received. Our healthcare solutions specialist will contact you within 2 business hours.",
    data,
  };
}

export async function submitAppointmentBooking(data: AppointmentBookingData): Promise<ApiResponse<AppointmentBookingData>> {
  if (!data.name || !data.phone) {
    return {
      success: false,
      message: "Please provide your Name and Phone Number.",
    };
  }

  if (data.email && !isValidEmail(data.email)) {
    return {
      success: false,
      message: "Please provide a valid work email address.",
    };
  }

  if (!isValidPhone(data.phone)) {
    return {
      success: false,
      message: "Please provide a valid 10-digit mobile number.",
    };
  }

  // Send enquiry via EmailJS
  try {
    await sendContactEmail({
      name: data.name,
      email: data.email || "support@medskyhms.com",
      phone: data.phone,
      city: data.city || data.state || "Not specified",
      product: data.product || "Hospital Management Software",
      message: data.remarks || "Enquiry submitted via website appointment widget.",
      title: `Booking Enquiry - ${data.name}`,
    });
  } catch (err) {
    console.error("Error sending appointment booking notification:", err);
  }

  return {
    success: true,
    message: `Thank you, ${data.name}! Your enquiry for ${data.product || "Medsky HMS"} has been received. Our solutions specialist will contact you shortly.`,
    data,
  };
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse<ContactFormData>> {
  if (!data.fullName || !data.email || !data.message) {
    return {
      success: false,
      message: "Please provide your Full Name, Work Email, and Remarks.",
    };
  }

  if (!isValidEmail(data.email)) {
    return {
      success: false,
      message: "Please provide a valid work email address.",
    };
  }

  if (data.phone && !isValidPhone(data.phone)) {
    return {
      success: false,
      message: "Please provide a valid 10-digit mobile number.",
    };
  }

  const result = await sendContactEmail({
    name: data.fullName,
    email: data.email,
    phone: data.phone || "Not provided",
    city: data.city || "Not specified",
    product: data.product || "Hospital Management Software",
    message: data.message,
    title: `${data.product || "Enquiry"} - ${data.fullName}`,
  });

  if (!result.success) {
    return {
      success: false,
      message: result.error || "Failed to deliver your enquiry. Please check your network or try again.",
    };
  }

  return {
    success: true,
    message: "Thank you for getting in touch. Your message has been sent to our team and we will respond promptly.",
    data,
  };
}
