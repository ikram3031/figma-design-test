import { User, Folder, PlusCircle, Settings, Search,PanelRightOpen, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen p-4 flex flex-col justify-between">
      {/* top */}
      <div>
        <div className="flex align-items-center justify-between">
          <Image
            src="/logo.png"
            alt="Logo"
            width={157}
            height={40}
            className="mr-2"
          />
          <div className="flex items-center align-items-center gap-4">
            <Search className="cursor-pointer" size={24} color="#868686"/>
            <PanelRightOpen className="cursor-pointer" size={24} color="#868686"/>
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-3 w-full mt-8">
          <Button
            variant="outline"
            className="flex items-center justify-center w-full h-10 border border-gray-500 bg-[#242424] text-white rounded-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add folder
          </Button>
          <Button
            variant="secondary"
            className="flex items-center justify-center w-full h-10 bg-[#2B2B2B] text-white rounded-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create chat
          </Button>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4">
        {/* upgrade plan */}
        <div className="bg-[#2B2B2B] p-4 rounded-lg w-full">
          <h2 className="text-white text-lg font-semibold">Upgrade to Premium</h2>
          <p className="text-gray-400 text-sm">Make the most of all features!</p>
          <Button
            variant="outline"
            className="border border-orange-500 bg-[#2B2B2B text-white px-4 py-2 rounded-full mt-4 w-full"
          >
            Upgrade plan
          </Button>
        </div>
        {/* setting */}
        <div className="flex items-center justify-between p-2 rounded-lg w-full">
          <div className="flex flex-col gap-4">
            {/* Flow AI Templates */}
            <div className="flex items-center gap-2">
              <Image
                src="/bottom.png"
                alt="Flow AI Templates"
                width={24}
                height={24}
              />
              <span className="text-white text-sm">Flow AI Templates</span>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2 justify-between w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/user.png" 
                  alt="User Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div className="text-white text-sm">Jessica Mills</div>
                
              </div>
              <Settings className="text-gray-400 w-5 h-5" />
            </div>
          </div>          
        </div>
      </div>      
    </div>
  );
}
