import { Card, CardContent } from "@/components/ui/card";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 py-16 bg-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-center mb-8"
        >
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-4" aria-label="Contact information">
                <li className="flex items-center">
                  <Phone
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <a
                    href="https://wa.me/351962772568"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-900"
                    aria-label="Call us at (+351) 962-772-568"
                  >
                    (+351) 962-772-568
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <a
                    href="mailto:info@bearbonesjiujitsu.com"
                    className="hover:underline text-gray-900"
                    aria-label="Email us at info@bearbonesjiujitsu.com"
                  >
                    info@bearbonesjiujitsu.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <a
                    href="https://maps.app.goo.gl/vhi3uPFR1CyTpUNh8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-900"
                    aria-label="Find us on Google Maps"
                  >
                    Rua 29 de Agosto
                    <br />
                    Loja S, 8670-113 Aljezur, Portugal
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex gap-4" aria-label="Social media links">
                    <a
                      href="https://instagram.com/bearbones_jiu_jitsu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 text-gray-900"
                      aria-label="Visit our Instagram page"
                    >
                      <SiInstagram aria-hidden="true" size={20} />
                    </a>
                    <a
                      href="https://facebook.com/bearbonesjiujitsu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 text-gray-900"
                      aria-label="Visit our Facebook page"
                    >
                      <SiFacebook aria-hidden="true" size={20} />
                    </a>
                    <a
                      href="https://wa.me/351962772568"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 text-gray-900"
                      aria-label="Contact us on WhatsApp"
                    >
                      <SiWhatsapp aria-hidden="true" size={20} />
                    </a>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="overflow-hidden h-[300px]">
            <CardContent className="p-0 h-full">
              <iframe
                title="Map of Bear Bones Jiujitsu location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6346.166116675269!2d-8.7945153!3d37.31686020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b15000fcdcf6d%3A0x8f0130e9d9a74903!2sBear%20Bones%20Jiujitsu!5e0!3m2!1sen!2sus!4v1736339573349!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
