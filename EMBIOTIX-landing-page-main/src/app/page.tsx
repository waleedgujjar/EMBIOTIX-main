import Navbar from "@/components/navbar/page";
import MainBody from "@/components/mainBody/page";
import Partnerships from "@/components/partnerships/page";
import Services from "@/components/servicesweoffer/page";
import ClientReviews from "@/components/clientReviews/page";
import ContactForm from "@/components/contactUs/page";
import Footer from "@/components/footer/page";
import Faqs from "@/components/faqs/page";
import Experience from "@/components/experience/page";
import Teams from "@/components/teams/page";
export default function Home() {
  return (
    <div>
      <Navbar />
      <MainBody />
      <Partnerships />
      <Services />
      <Experience />
      <ClientReviews />
      <Teams />
      <Faqs />
      <ContactForm />
      <Footer />
    </div>
  );
}

