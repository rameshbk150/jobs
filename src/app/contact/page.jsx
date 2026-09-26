import ContactPage from "@/components/ContactPage";
import { contactData } from "@/data/contactData";

export const metadata = {
  title: "Contact Ramesh BK",
  description:
    "Contact Ramesh BK for professional enquiries, career opportunities, and business communication.",
};

export default function Page() {
  return (
    <ContactPage data={contactData} />
  );
}