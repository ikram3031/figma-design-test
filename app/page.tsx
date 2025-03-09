import Image from "next/image";
import Sidebar from "@/components/sections/SideBar";
import Header from "@/components/sections/Header";
import FileUpload from "@/components/sections/FileUpload";
import FileList from "@/components/sections/FileList";
import ActionButtons from "@/components/sections/ActionButtons";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <FileUpload />
        <FileList />
        <ActionButtons />
        <Footer />
      </main>
    </div>
  );
}
