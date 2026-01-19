import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast({
        title: "Message Sent",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      content: "Team@GoCodexa.Com",
      link: "mailto:Team@GoCodexa.Com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9409495765",
      link: "tel:+919409495765",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content:
        "219, Silver Trade Center, Opp Utran Power House, Mota Varachha, Surat-395006",
      link: "https://www.google.com/maps/place/219,+Silver+Trade+Center,+Opp+Utran+Power+House,+Mota+Varachha,+Surat-395006",
    },
  ];

  return (
    <section
      id="contact"
      className="py-3 bg-[#000101] min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2.5 mb-3 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
              Contact Form
            </span>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Contact Info & Socials */}
          <div className="lg:col-span-4 space-y-6">
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111111] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1A1A1A] rounded-lg group-hover:bg-[#4C91C9]/10 transition-colors">
                    <card.icon className="w-6 h-6 text-[#9CA3AF] group-hover:text-[#4C91C9] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{card.title}</h3>
                    {card.link ? (
                      <a
                        href={card.link}
                        className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                      >
                        {card.content}
                      </a>
                    ) : (
                      <p className="text-[#9CA3AF] text-sm">{card.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Follow Us Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#1A1A1A] rounded-lg">
                  <Sparkles className="w-6 h-6 text-[#9CA3AF]" />
                </div>
                <h3 className="text-white font-bold">Follow Us</h3>
              </div>
              <div className="flex gap-4 pl-16">
                {" "}
                {/* Indent to align with text above if desired, or remove pl- */}
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#9CA3AF] hover:bg-[#4C91C9] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-8 md:p-10 rounded-2xl border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-[#1A1A1A] border-white/5 text-white h-12 rounded-lg focus:ring-1 focus:ring-[#4C91C9] placeholder:text-white/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-[#1A1A1A] border-white/5 text-white h-12 rounded-lg focus:ring-1 focus:ring-[#4C91C9] placeholder:text-white/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="bg-[#1A1A1A] border-white/5 text-white h-12 rounded-lg focus:ring-1 focus:ring-[#4C91C9] placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="bg-[#1A1A1A] border-white/5 text-white h-12 rounded-lg focus:ring-1 focus:ring-[#4C91C9] placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white font-bold text-sm">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-12 px-3 py-2 bg-[#1A1A1A] border border-white/5 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#4C91C9] text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-500">
                      Select a service
                    </option>
                    <option value="web-dev">Web Development</option>
                    <option value="app-dev">App Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white font-bold text-sm">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    className="bg-[#1A1A1A] border-white/5 text-white min-h-[150px] rounded-lg focus:ring-1 focus:ring-[#4C91C9] placeholder:text-white/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4C91C9] hover:bg-[#2D5190] text-white h-14 rounded-lg font-bold text-lg transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
