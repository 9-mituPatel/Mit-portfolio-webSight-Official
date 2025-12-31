import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending or use EmailJS
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Message Sent",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
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

  return (
    <section id="contact" className="py-32 bg-[#000101] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            >
              Let's <span className="text-[#4353FF]">Connect</span>
            </motion.h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {[
                { icon: Mail, title: "Email", value: "bharodiyamit@gmail.com", link: "mailto:bharodiyamit@gmail.com" },
                { icon: Phone, title: "Phone", value: "+91-9409010977", link: "tel:+919409010977" },
                { icon: MapPin, title: "Location", value: "Surat, Gujarat, India", link: null }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-[#080809] border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-[#4353FF]/30 transition-all">
                    <item.icon className="w-6 h-6 text-[#4353FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-[#94A3B8] hover:text-white transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-[#94A3B8]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6 bg-[#080809] p-8 md:p-10 rounded-3xl border border-white/5">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] ml-1">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-[#000101] border-white/10 text-white h-12 focus:ring-[#4353FF] focus:border-[#4353FF] rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] ml-1">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-[#000101] border-white/10 text-white h-12 focus:ring-[#4353FF] focus:border-[#4353FF] rounded-xl"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] ml-1">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="bg-[#000101] border-white/10 text-white h-12 focus:ring-[#4353FF] focus:border-[#4353FF] rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] ml-1">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project..."
                    className="bg-[#000101] border-white/10 text-white min-h-[150px] focus:ring-[#4353FF] focus:border-[#4353FF] rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4353FF] hover:bg-[#4353FF]/90 text-white h-14 rounded-xl font-bold text-lg shadow-glow transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;