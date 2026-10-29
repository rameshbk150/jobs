import ContactPage from "@/components/ContactPage";
import { contactData } from "@/data/contactData";

export const metadata = {
  title: "Contact Us | JobSearch By Ramesh",
  description:
    "Contact JobSearch for recruitment, career opportunities, and professional enquiries.",
};

export default function Page() {
  return <ContactPage data={contactData} />;
}