import Image from "next/image";

export default function FileUpload() {
    return (
      <div className="flex flex-col items-center text-center py-6 px-4 text-white rounded-lg w-full  mx-auto">
        <div className="relative flex items-center justify-center py-4 px-6 rounded-lg w-full">
          <h2 className="text-[54px] font-semibold flex items-center space-x-2">
            <span>Add Files to</span>
              <Image src="/app.png" alt="Logo" width={70} height={70} />
            <span>Cloud Chat</span>
          </h2>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Your files will not be stored on our servers and no AI models will be trained.
        </p>
        <p className="text-sm text-orange-400 font-medium mt-1">
          Supported File Types: .docx, .pdf, .epub, and many text filetypes
        </p>
    </div>
    );
  }
  