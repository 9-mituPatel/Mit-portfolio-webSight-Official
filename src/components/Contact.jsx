import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import RippleButton from "@/components/RippleButton";
import SectionWrapper from "@/components/SectionWrapper";
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

  // EmailJS configuration - You need to replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_p7bhkaa'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_hq3dpkk'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'e3OjtQc4SWemxxGNq'; // Replace with your EmailJS public key

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_SERVICE_ID === 'service_p7bhkaa' || 
          EMAILJS_TEMPLATE_ID === 'template_hq3dpkk' || 
          EMAILJS_PUBLIC_KEY === 'e3OjtQc4SWemxxGNq') {
        // Fallback to FormSubmit if EmailJS is not configured
        await sendViaFormSubmit();
      } else {
        // Send via EmailJS
        await sendViaEmailJS();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendViaEmailJS = async () => {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Mit Bharodiya',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const sendViaFormSubmit = async () => {
    const formData2 = new FormData();
    formData2.append('name', formData.name);
    formData2.append('email', formData.email);
    formData2.append('subject', `Portfolio Contact: ${formData.subject}`);
    formData2.append('message', `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from your portfolio website contact form.`);
    
    // FormSubmit configuration
    formData2.append('_replyto', formData.email); // Set reply-to address
    formData2.append('_subject', `Portfolio Contact from ${formData.name}`);
    formData2.append('_template', 'table'); // Use table template for better formatting
    formData2.append('_captcha', 'false'); // Disable captcha for better UX
    formData2.append('_next', window.location.origin); // Redirect back to your site

    const response = await fetch('https://formsubmit.co/bharodiyamit@gmail.com', {
      method: 'POST',
      body: formData2
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      throw new Error('Failed to send email');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharodiyamit@gmail.com",
      link: "mailto:bharodiyamit@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9409010977",
      link: "tel:+919409010977"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      handle: "@mtbharodiya"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mit-bharodiya-4a6007256",
      handle: "Mit Bharodiya"
    }
  ];

  return (
    <SectionWrapper id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <RippleButton 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </RippleButton>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Connect With Me
                  </CardTitle>
                  <CardDescription>
                    Follow me on social media for updates and insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.name}</p>
                          <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {social.handle}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;