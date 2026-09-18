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
  treatment: string;
  name: string;
  phone: string;
  state: string;
  doctor?: string;
  date?: string;
  time?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  department: "sales" | "support" | "billing" | "partnership";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export async function submitDemoRequest(data: DemoRequestData): Promise<ApiResponse<DemoRequestData>> {
  // Simulate asynchronous API call
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  if (!data.email || !data.fullName || !data.phone) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, Phone).",
    };
  }

  return {
    success: true,
    message: "Thank you! Your personalized Medsky HMS demo request has been received. Our healthcare solutions specialist will contact you within 2 business hours.",
    data,
  };
}

export async function submitAppointmentBooking(data: AppointmentBookingData): Promise<ApiResponse<AppointmentBookingData>> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!data.name || !data.phone || !data.date) {
    return {
      success: false,
      message: "Please provide your Name, Phone Number, and Preferred Date.",
    };
  }

  return {
    success: true,
    message: `Appointment scheduled successfully for ${data.name} on ${data.date}. A confirmation SMS has been dispatched.`,
    data,
  };
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse<ContactFormData>> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!data.fullName || !data.email || !data.message) {
    return {
      success: false,
      message: "Please provide your Full Name, Email, and Message.",
    };
  }

  return {
    success: true,
    message: "Thank you for getting in touch. Your message has been routed to our team and we will respond promptly.",
    data,
  };
}
