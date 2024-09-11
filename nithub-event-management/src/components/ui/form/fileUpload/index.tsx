import React, { useEffect, useState } from "react";
import { FileIcon } from "../../../../assets/svg/icons";
import { BiCheck } from "react-icons/bi";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { FaX } from "react-icons/fa6";

export type props = {
    // sectionData: FormSectionDataProps[5]
    handleFilesChange: (files: File[]) => void
};

const FileUpload = ({ handleFilesChange }: props) => {
    const [files, setFiles] = useState<File[]>([]);
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
            setPreview(URL.createObjectURL(selectedFiles[0]));
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        handleFilesChange(files);
    };

    useEffect(() => {
        handleFilesChange(files);
    }, [files, handleFilesChange]);

    return (
        <form>
            <div
                className={`document-uploader ${files.length > 0 ? "upload-box active" : "upload-box"
                    }`}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <div>
                    <div className='flex flex-col justify-center items-center rounded-md p-6 my-8 border-2 border-dashed border-ashBorder appearance-none cursor-pointer transition  hover:border-gray-400 focus:outline-none'>
                        <div className="pb-2">
                            <FileIcon />
                        </div>

                        <p>Drop your files here or
                            <label htmlFor="browse" className='text-primary font-bold hover:underline'> click here </label>
                            to upload
                        </p>
                        <p className='text-secondary text-[12px]'>
                            Supported files: .JPEG, .JPG, .PNG, .WEBP
                        </p>
                        <p className=' text-secondary text-[12px]'>Minimum of 2mb</p>
                    </div>

                    <input
                        type="file"
                        hidden
                        id="browse"
                        onChange={handleChange}
                        accept=".jpeg,.jpg,.png,.webp"
                        multiple
                    />
                </div>

                {files.length > 0 && (
                    <div className="flex gap-2 flex-col">
                        {files.map((file, index) => (
                            <div key={index} className="flex flex-row gap-4 w-[70%] p-2 mx-2 rounded border border-ashBorder justify-between">
                                <div className="flex flex-row gap-3">
                                    <div >
                                        {preview && <img src={preview} alt="Preview" height={40} width={40} className="rounded-lg"/>}
                                    </div>
                                    <div className="file-info">
                                        <p className="font-bold text-[13px]">{file.name}</p>
                                        <p>{(file.size / 1048576).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <button className="text-red-600 font-extrabold" onClick={() => handleRemoveFile(index)}><FaX /></button>
                            </div>
                        ))}
                    </div>
                )}

                {files.length > 0 && (
                    <div className="success-file bg-white w-fit flex flex-row items-center gap-2 py-6 mx-2 ">
                        <div className=' rounded-full w-[20px] h-[20px] flex justify-center items-center text-white bg-primary'>
                            <BiCheck />
                        </div>
                        <p>{files.length} file(s) selected</p>
                    </div>
                )}
            </div>
        </form>
    );
};

export default FileUpload;
