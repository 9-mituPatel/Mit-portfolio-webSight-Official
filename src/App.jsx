import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { seoRoutes } from './config/seoRoutes';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="portfolio-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/Mit-portfolio-webSight-Official">
          <SEO />
          <Routes>
            <Route path={seoRoutes.home.path} element={<Index />} />
            <Route path={seoRoutes.about.path} element={<Index />} />
            <Route path={seoRoutes.experience.path} element={<Index />} />
            <Route path={seoRoutes.projects.path} element={<Index />} />
            <Route path={seoRoutes.skills.path} element={<Index />} />
            <Route path={seoRoutes.education.path} element={<Index />} />
            <Route path={seoRoutes.contact.path} element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;