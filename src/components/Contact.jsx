import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully! ✨",
        description: "I'll get back to you within 24 hours.",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(false);
      }, 2000);
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bharodiyamit@gmail.com",
      link: "mailto:bharodiyamit@gmail.com",
      color: "#4353FF"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9409010977",
      link: "tel:+919409010977",
      color: "#6366f1"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Surat, Gujarat, India",
      link: null,
      color: "#22d3ee"
    }
  ];

  return (
    <section id="contact" className="py-32 md:py-44 bg-[#000101] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.06] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 83, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 md:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <span className="tag-primary flex items-center gap-2">
                <MessageSquare className="w-3 h-3" />
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-xl text-white mb-8"
            >
              Let's{" "}
              <span className="relative inline-block">
                <span className="gradient-text-primary">Connect</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4353FF] to-[#6366f1] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-lg max-w-2xl mx-auto"
            >
              Have a project in mind or just want to say hello?
              I'm always open to discussing new opportunities.
            </motion.p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Column */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex gap-6 items-start">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg"
                      style={{
                        backgroundColor: `${item.color}10`,
                        borderColor: `${item.color}25`,
                        borderWidth: '1px',
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: `${item.color}20`,
                      }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-xs text-white/40 font-bold uppercase tracking-widest mb-2">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <motion.a
                          href={item.link}
                          className="text-lg lg:text-xl font-bold text-white hover:text-[#4353FF] transition-colors duration-300 flex items-center gap-2 group/link"
                          whileHover={{ x: 3 }}
                        >
                          {item.value}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </motion.a>
                      ) : (
                        <p className="text-lg lg:text-xl font-bold text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Availability status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-white/[0.06]"
              >
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27ca40] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27ca40]"></span>
                    </span>
                    <span className="text-sm font-semibold text-white">Currently Available</span>
                  </div>
                  <p className="text-sm text-white/50">
                    Open for freelance projects, full-time opportunities, and interesting collaborations.
                  </p>
                </div>
              </motion.div>

              {/* Quick response note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 text-white/40 text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#4353FF]" />
                <span>Usually responds within 24 hours</span>
              </motion.div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute -inset-[1px] bg-gradient-to-r from-[#4353FF]/30 via-[#6366f1]/20 to-[#4353FF]/30 rounded-[2rem] opacity-50 blur-sm"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <SpotlightCard className="relative p-8 lg:p-10 border-gradient rounded-[2rem]">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-grid-modern opacity-[0.04] pointer-events-none rounded-[2rem]" />

                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="py-20 text-center relative z-10"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#27ca40]/20 flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-10 h-10 text-[#27ca40]" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-white/50">I'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6 relative z-10"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Name Field */}
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                              Full Name
                            </label>
                            <motion.div
                              animate={{
                                boxShadow: focusedField === 'name'
                                  ? '0 0 20px rgba(67, 83, 255, 0.2)'
                                  : '0 0 0 rgba(67, 83, 255, 0)',
                              }}
                              className="rounded-2xl"
                            >
                              <Input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="John Doe"
                                className="bg-white/[0.03] border-white/10 text-white h-14 focus:ring-[#4353FF] focus:border-[#4353FF]/50 rounded-2xl font-medium px-5 text-base placeholder:text-white/20 transition-all duration-300"
                                required
                              />
                            </motion.div>
                          </div>

                          {/* Email Field */}
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                              Email Address
                            </label>
                            <motion.div
                              animate={{
                                boxShadow: focusedField === 'email'
                                  ? '0 0 20px rgba(67, 83, 255, 0.2)'
                                  : '0 0 0 rgba(67, 83, 255, 0)',
                              }}
                              className="rounded-2xl"
                            >
                              <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="john@example.com"
                                className="bg-white/[0.03] border-white/10 text-white h-14 focus:ring-[#4353FF] focus:border-[#4353FF]/50 rounded-2xl font-medium px-5 text-base placeholder:text-white/20 transition-all duration-300"
                                required
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Subject Field */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                            Subject
                          </label>
                          <motion.div
                            animate={{
                              boxShadow: focusedField === 'subject'
                                ? '0 0 20px rgba(67, 83, 255, 0.2)'
                                : '0 0 0 rgba(67, 83, 255, 0)',
                            }}
                            className="rounded-2xl"
                          >
                            <Input
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('subject')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Project Inquiry"
                              className="bg-white/[0.03] border-white/10 text-white h-14 focus:ring-[#4353FF] focus:border-[#4353FF]/50 rounded-2xl font-medium px-5 text-base placeholder:text-white/20 transition-all duration-300"
                              required
                            />
                          </motion.div>
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                            Your Message
                          </label>
                          <motion.div
                            animate={{
                              boxShadow: focusedField === 'message'
                                ? '0 0 20px rgba(67, 83, 255, 0.2)'
                                : '0 0 0 rgba(67, 83, 255, 0)',
                            }}
                            className="rounded-2xl"
                          >
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Tell me about your project..."
                              className="bg-white/[0.03] border-white/10 text-white min-h-[160px] focus:ring-[#4353FF] focus:border-[#4353FF]/50 rounded-2xl font-medium p-5 text-base placeholder:text-white/20 transition-all duration-300 resize-none"
                              required
                            />
                          </motion.div>
                        </div>

                        {/* Submit Button */}
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[#4353FF] to-[#5a6aff] hover:from-[#3142e8] hover:to-[#4353FF] text-white h-14 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(67,83,255,0.3)] transition-all duration-300 disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                              <>
                                Send Message
                                <Send className="w-4 h-4 ml-3" />
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
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