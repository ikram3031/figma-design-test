export default function FileList() {
    return (
      <div className="mt-4 bg-gray-700 p-4 rounded-lg">
        <div className="flex justify-between items-center text-white">
          <span>📄 Report_file.pdf</span>
          <button className="text-red-500">✖</button>
        </div>
        <div className="flex justify-between items-center text-white mt-2">
          <span>📄 Article.docs</span>
          <button className="text-red-500">✖</button>
        </div>
      </div>
    );
  }
  