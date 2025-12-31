import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { seoRoutes } from './config/seoRoutes';
import { Loading } from './components/ui/loading';
import { LoadingProvider } from './components/providers/loading-provider';

// Lazy load components
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const SEO = lazy(() => import('./components/SEO'));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="dev-co-portfolio-theme">
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/Mit-portfolio-webSight-Official">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading size="lg" /></div>}>
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
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LoadingProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;