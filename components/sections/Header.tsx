
import Image from "next/image";
export default function Header() {
    return (
      <div className="bg-[#242424] p-2 text-sm w-[664px] mx-auto text-center my-5 rounded-full flex items-center justify-center">
        <Image src="/info-circle.png" alt="Logo" width={20} height={20} className="mr-2" />
        The web version does not display local chats. To access all features, please 
        <a className="text-[#FB9937] ml-1" href="">install the app.</a>
      </div>
    );
  }
  