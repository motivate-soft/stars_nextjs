import Head from "next/head";
import { useRouter } from "next/router";
import ForgotPasswordConfirm from "@components/Admin/Auth/ForgotPasswordConfirm";

export default () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ForgotPasswordConfirm
        userId={router.query.uid}
        resetToken={router.query.token}
      />
    </>
  );
};
