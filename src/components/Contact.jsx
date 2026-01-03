import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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
    <section id="contact" className="py-40 bg-[#000101] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-[#4353FF] font-black tracking-[0.4em] uppercase text-xs px-6 py-2 border border-[#4353FF]/20 rounded-full bg-[#4353FF]/5">
                Communication
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
            >
              Let's <span className="text-[#4353FF] text-glow">Connect</span>
            </motion.h2>

            <p className="text-white/50 text-xl font-medium max-w-2xl mx-auto">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-20">
            <div className="lg:col-span-2 space-y-16">
              {[
                { icon: Mail, title: "Direct Email", value: "bharodiyamit@gmail.com", link: "mailto:bharodiyamit@gmail.com" },
                { icon: Phone, title: "Direct Call", value: "+91-9409010977", link: "tel:+919409010977" },
                { icon: MapPin, title: "Main Office", value: "Surat, Gujarat, India", link: null }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 bg-[#080809] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-[#4353FF]/50 group-hover:bg-[#4353FF]/10 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <item.icon className="w-7 h-7 text-[#4353FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2 opacity-40">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-2xl font-black text-white hover:text-[#4353FF] transition-colors duration-300 tracking-tight">{item.value}</a>
                    ) : (
                      <p className="text-2xl font-black text-white tracking-tight">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-12 border-gradient">
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="absolute inset-0 bg-grid-modern opacity-[0.05] pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="bg-[#000101] border-white/10 text-white h-16 focus:ring-[#4353FF] focus:border-[#4353FF] rounded-2xl font-bold px-6 text-lg"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Email Address</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="bg-[#000101] border-white/10 text-white h-16 focus:ring-[#4353FF] focus:border-[#4353FF] rounded-2xl font-bold px-6 text-lg"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-3 relative z-10">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Inquiry"
                        className="bg-[#000101] border-white/10 text-white h-16 focus:ring-[#4353FF] focus:border-[#4353FF] rounded-2xl font-bold px-6 text-lg"
                        required
                      />
                    </div>
                    <div className="space-y-3 relative z-10">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Your Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project..."
                        className="bg-[#000101] border-white/10 text-white min-h-[180px] focus:ring-[#4353FF] focus:border-[#4353FF] rounded-2xl font-bold p-6 text-lg"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#4353FF] hover:bg-[#4353FF]/90 text-white h-18 py-8 rounded-2xl font-black uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(67,83,255,0.3)] transition-all relative z-10 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-8 h-8 animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;