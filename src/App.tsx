import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvestorCursor from "./components/InvestorCursor";
import InvestorNav from "./components/InvestorNav";
import InvestorHome from "./pages/InvestorHome";
import InvestorAbout from "./pages/InvestorAbout";
import InvestorPositions from "./pages/InvestorPositions";
import InvestorContact from "./pages/InvestorContact";
import NotFound from "./pages/NotFound";

// Legacy project routes
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
        <InvestorCursor />
        <InvestorNav />
        <Routes>
          <Route path="/" element={<InvestorHome />} />
          <Route path="/about" element={<InvestorAbout />} />
          <Route path="/positions" element={<InvestorPositions />} />
          <Route path="/contact" element={<InvestorContact />} />
          
          {/* Legacy project routes */}
          <Route path="/projects/multi-agent" element={<MultiAgent />} />
          <Route path="/projects/chat-with-data" element={<ChatWithData />} />
          <Route path="/projects/autonomous-car" element={<AutonomousCar />} />
          <Route path="/projects/nlp-techniques" element={<NLPTechniques />} />
          <Route path="/projects/llms" element={<LLMs />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;