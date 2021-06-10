import React, { useState, useEffect } from "react";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import { SingeUserWrapper } from "@components/Admin/Users/UserList.style";
import ProfileForm from "./Profileform";
import PasswordForm from "./PasswordForm";

export default function EditProfile(props) {
  return (
    <Box>
      <Container>
        <SingeUserWrapper>
          <ProfileForm />
          <PasswordForm />
        </SingeUserWrapper>
      </Container>
    </Box>
  );
}
