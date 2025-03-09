import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-4 mt-6 justify-center">
      {/* Start Button */}
      <Button 
        variant="outline" 
        size="custom"
        className="border-[#FB9937] text-white rounded-full hover:bg-[#FB9937] bg-[#2B2B2B] px-[32px] py-[17px] w-[240px]"
      >
        Start
      </Button>

      <span className="text-white">or</span>
      
      <Button size="custom" className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-[32px] py-[17px] w-[240px] hover:opacity-90">
        <Sparkles size={18} />
        Start with Deep Dive
      </Button>

      {/* Tooltip Wrapper */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Image src="/vector.png" alt="Logo" width={16} height={16} />
          </TooltipTrigger>
          <TooltipContent className="bg-gray-900 text-white p-2 rounded-md shadow-lg max-w-xs">
            Deep Dive processes documents section by section for "unlimited" context, enabling complete answers.
            Run once per chat to unlock Table AI and Prompt Loops.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
