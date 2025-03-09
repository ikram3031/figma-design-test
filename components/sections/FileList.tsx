import { FileText, X } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";
import {Button} from "../ui/button";

export default function FileList() {
    return (
      <div className="p-6 text-white rounded-lg w-[820px] mx-auto space-y-4">
      {/* File Upload & URL Input */}
      <div className="grid grid-cols-2 gap-4">
        
        <div className="flex items-center justify-center p-4 bg-[#242424] rounded-lg cursor-pointer">
          <Image src="/Icons.png" alt="Logo" width={70} height={70} />
          <span>Drag & drop local files here, or click to select</span>
        </div>
        
        <div className="flex bg-[#242424] p-4 rounded-lg">
          
          <Image src="/Icons (1).png" alt="Logo" width={70} height={70} />
          
          <div className="flex flex-col">
            <span className="flex items-center mb-2">
                Enter in a public URL:
            </span>
              
            <div className="flex items-center space-x-2 bg-[#353535] rounded-full" >
              <Input
                type="text"
                placeholder="https://example.com/file.pdf"
                className=" text-white text-sm px-3 py-2 outline-none focus:outline-none border-none"
              />
              <Button 
                variant="secondary"
                className="rounded-full bg-[#535353] text-white"
              >Add</Button>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Cloud Upload Options */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-start p-4 bg-[#242424] rounded-lg cursor-pointer">
          <Image src="/Icons (2).png" alt="Logo" width={70} height={70} />
          <span>Add files from Dropbox</span>
        </div>
        <div className="flex items-center justify-start p-4 bg-[#242424] rounded-lg cursor-pointer">
          <Image src="/Icons (4).png" alt="Logo" width={70} height={70} />
          <span>Add files from Google Drive</span>
        </div>
      </div>
      
      {/* Uploaded Files */}
      <div className="bg-[#242424] p-4 rounded-full  flex items-center space-x-3">
        <div className="flex items-center bg-gray-800 px-3 py-1 rounded-lg text-sm">
          <FileText className="w-4 h-4 mr-2 text-red-400" /> 
          Report_file.pdf
          <span className="ml-3 text-xs text-gray-400 flex items-center">
            <input type="checkbox" className="mr-1" /> Force OCR
          </span>
          <X className="ml-2 w-4 h-4 cursor-pointer text-gray-500" />
        </div>
        <div className="flex items-center bg-gray-800 px-3 py-1 rounded-lg text-sm">
          <FileText className="w-4 h-4 mr-2 text-blue-400" /> Article.docs
          <span className="ml-3 text-xs text-gray-400 flex items-center">
            <input type="checkbox" className="mr-1" /> Force OCR
          </span>
          <X className="ml-2 w-4 h-4 cursor-pointer text-gray-500" />
        </div>
      </div>
    </div>
    );
  }
  