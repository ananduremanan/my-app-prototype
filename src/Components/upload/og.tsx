import {
  FilesDirective,
  UploaderComponent,
} from "@syncfusion/ej2-react-inputs";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { SelectedEventArgs } from "@syncfusion/ej2-react-inputs";

interface UploaderProps {
  fileTypes?: any[];
  removeUrl?: string;
  saveUrl?: string;
  multiple?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Uploader: React.FC<UploaderProps> = ({
  fileTypes,
  multiple,
  onChange,
}) => {
  const typ = fileTypes?.map((ty: any) => ty).join(", ");

  const [files, setFiles] = useState<any[]>([]);

  console.log(files);

  const handleOnChange = (event: SelectedEventArgs) => {
    const fileData = event.filesData;

    if (event.filesData) {
      setFiles((prevState: any[]) => [...prevState, ...fileData]);
    }
  };

  return typ ? (
    <UploaderComponent
      id="fileUpload"
      type="file"
      allowedExtensions={`${typ}`}
      multiple={multiple}
      selected={handleOnChange}
    />
  ) : (
    <UploaderComponent
      id="fileUpload"
      type="file"
      multiple={multiple}
      selected={handleOnChange}
    />
  );
};
