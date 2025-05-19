import { Metadata } from "next";
import SendEmailForm from "../components/SendEmailForm";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Send me a mail",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-black mb-5">Contact Me 👋</h1>
      <SendEmailForm />
    </div>
  );
}
