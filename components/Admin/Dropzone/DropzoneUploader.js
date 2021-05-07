import React from "react";
import Dropzone from "@iso/components/uielements/dropzone";
import { notification } from "@iso/components";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import ContentHolder from "@iso/components/utility/contentHolder";
import DropzoneWrapper from "./Dropzone.styles";
import mediaApi from "../../../service/mediaApi";

export default function DropzoneUploader(props) {
  const { propertyId, onUploadSuccess } = props;

  const componentConfig = {
    iconFiletypes: [".jpg", ".png", ".gif"],
    method: true,
    showFiletypeIcon: true,
    uploadMultiple: false,
    maxFilesize: 2, // MB
    maxFiles: 2,
    dictMaxFilesExceeded: "You can only upload upto 2 images",
    dictRemoveFile: "Delete",
    dictCancelUploadConfirmation: "Are you sure to cancel upload?",
    postUrl: "no-url",
  };
  const djsConfig = { autoProcessQueue: false };
  const eventHandlers = {
    addedfile: (file) => onAddedFile(file),
    success: (file) =>
      notification("success", `${file.name} successfully uploaded`),
    error: (error) => notification("error", "Server is not set in the demo"),
  };

  async function onAddedFile(file) {
    const body = new FormData();
    body.append("file", file);

    if (propertyId) {
      body.append("property", propertyId);
    }
    try {
      const res = await mediaApi.add(body);
      notification("success", `${file.name} has been uploaded`);
      onUploadSuccess(res);
    } catch (error) {
      notification("warning", `Failed to upload ${file.name} `);
    }
  }

  return (
    <DropzoneWrapper>
      <LayoutWrapper>
        <Box>
          <ContentHolder>
            <DropzoneWrapper>
              <Dropzone
                config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
              />
            </DropzoneWrapper>
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    </DropzoneWrapper>
  );
}
