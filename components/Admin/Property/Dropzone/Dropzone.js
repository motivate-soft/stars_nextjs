import React from "react";
import Dropzone from "@iso/components/uielements/dropzone";
import { notification } from "@iso/components";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import ContentHolder from "@iso/components/utility/contentHolder";
import DropzoneWrapper from "./Dropzone.styles";
import { getCookie } from "@redux/authentication/auth.utils";
import { BACKEND_URL } from "env-config";

export default (props) => {
  const { onUploadSuccess } = props;

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
    notification("success", `${file.name} added`);
    const body = new FormData();
    body.append("file", file);

    const res = await fetch(`${BACKEND_URL}/api/media/create`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
      body,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    onUploadSuccess(res);
  }

  // async function handleAddImage(selectedFiles) {
  //   if (selectedFiles[0].size > 1024 * 1024 * 10) {
  //     setError("You can only upload files smaller than 10MB.");
  //     return;
  //   }

  //   if (selectedFiles[0].type.indexOf("image") === -1) {
  //     setError("You can only upload image files.");
  //     return;
  //   }

  //   let files = new FormData();
  //   files.append("fileToUpload", selectedFiles[0]);

  //   setIsUploadingAttachment(true);

  //   try {
  //     const response = await postFile(
  //       `/api/v2/services/${activeService.id}/image`,
  //       files
  //     );
  //     const { imagePath } = response;
  //     const newServices = services.map((service) => {
  //       if (service.id === activeService.id) {
  //         service.imagePath = imagePath;
  //       }
  //       return service;
  //     });
  //     onImageChange(newServices);
  //     setIsUploadingAttachment(false);
  //   } catch (errorMessage) {
  //     setError(errorMessage);
  //     setIsUploadingAttachment(false);
  //   }
  // }

  // async function handleDeleteImage() {
  //   setIsDeletingAttachment(true);
  //   setError(null);
  //   try {
  //     await remove(`/api/v2/services/${activeService.id}/image`);

  //     const newServices = services.map((service) => {
  //       if (service.id === activeService.id) {
  //         service.imagePath = null;
  //       }
  //       return service;
  //     });
  //     setIsDeletingAttachment(false);
  //     onImageChange(newServices);
  //   } catch (errorMessage) {
  //     setIsDeletingAttachment(false);
  //     setError(
  //       "There was an error deleting this file, please try again. If the problem persists, please contact us."
  //     );
  //   }
  // }

  return (
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
  );
};
