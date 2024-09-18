import { useState } from "react";
import Navbar from "../../../../components/layout/navbar";
import { Sidebar } from "../../../../components/layout/sidebar";
import FileUpload from "../../../../components/ui/form/fileUpload";

export type FormProps = [
  {
    uploadedFiles: Array<{ name: string; size: number; type: string; content: string | ArrayBuffer | null }>;
  }
]

export const CreateEvent = () => {
  const tags = [
    { label: "Music" },
    { label: "Arts" },
    { label: "Parties" },
    { label: " Hobbies & Special Interest" },
    { label: "Food & Drinks" },
  ];

  const [selectedTag, setSelectedTag] = useState("Music");
  const [files, setFiles] = useState<File[]>([]);
  const [formSectionsData, setFormSectionsData] = useState<FormProps>([
    {
      uploadedFiles: []
    }
  ])

  const handleFileChange = (files: File[]) => {
    setFiles(files);

    setFormSectionsData(prevSectionsData => {
      const updatedSectionData = [...prevSectionsData];
      if (!updatedSectionData[0]) {
        (updatedSectionData[0] as any)['uploadedFiles'] = files;
      }
      return updatedSectionData as FormProps;
    });
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="flex pl-36 pr-5 lg:flex-row flex-col">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full p-6 border-r border-gray-200">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              TITLE
            </label>
            <input
              className="shadow appearance-none border rounded w-3/4 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Event Title"
            />
            {/* <button className="mt-2 text-green-500 font-bold">
              + Add description
            </button> */}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              DESCRIPTION
            </label>
            <textarea
              className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Event Description"
              rows={6}
            />
          </div>

          <div className="flex gap-6 items-center mb-8">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                DAY
              </label>
              <input
                type="date"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                TIME
              </label>
              <input
                type="time"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              LOCATION
            </label>
            <input
              className="shadow appearance-none border rounded w-3/4 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Location"
            />
            <div className="flex space-x-4 mt-2">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                Classroom
              </button>
              <button className="border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                Change meeting room
              </button>
              <button className="border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                Online
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              UPLOAD IMAGE
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
          </div>

          <div>
            <FileUpload handleFilesChange={handleFileChange} />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 w-full p-6">
          <h2 className="text-2xl font-bold mb-4">
            Let’s help organize your events!
          </h2>
          <p className="mb-4">we are here to make it happen.</p>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            What type of events do you host?
          </label>
          <div className="flex flex-wrap mb-4 space-x-2">
            {tags.map((item, index) => (
              <button
                onClick={() => setSelectedTag(item.label)}
                key={index}
                className={`${item.label == selectedTag
                  ? "bg-green-500 text-white"
                  : "border border-gray-400 text-gray-700 "
                  } font-bold py-2 px-4 rounded-full mb-4`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="text-green-500 font-bold mb-4">
            More options +
          </button>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            What’s the number of events you plan to organize this year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="10-35 events"
          />

          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
            How large are your events?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Up to 350 people"
          />

          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
            What is the capacity you are hoping for?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Capacity"
          />
        </div>
      </div>
    </div>
  );
};