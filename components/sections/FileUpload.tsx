export default function FileUpload() {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white">Add Files to <span className="text-blue-400">Cloud Chat</span></h2>
        <p className="text-gray-400 text-sm">Your files will not be stored on our servers...</p>
  
        <div className="mt-4 flex gap-4">
          <button className="bg-gray-700 p-4 rounded-lg flex-1 text-white">📂 Drag & Drop Files</button>
          <input type="text" placeholder="Enter URL" className="p-2 bg-gray-700 text-white rounded-lg w-1/2" />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">Add</button>
        </div>
  
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-600 p-2 rounded-lg text-white">Dropbox</button>
          <button className="bg-green-600 p-2 rounded-lg text-white">Google Drive</button>
        </div>
      </div>
    );
  }
  