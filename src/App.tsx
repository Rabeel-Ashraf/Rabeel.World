import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MultiAgent from "./pages/projects/MultiAgent";
import ChatWithData from "./pages/projects/ChatWithData";
import AutonomousCar from "./pages/projects/AutonomousCar";
import NLPTechniques from "./pages/projects/NLPTechniques";
import LLMs from "./pages/projects/LLMs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/multi-agent" element={<MultiAgent />} />
          <Route path="/projects/chat-with-data" element={<ChatWithData />} />
          <Route path="/projects/autonomous-car" element={<AutonomousCar />} />
          <Route path="/projects/nlp-techniques" element={<NLPTechniques />} />
          <Route path="/projects/llms" element={<LLMs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
