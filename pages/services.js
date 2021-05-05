import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import ComingSoon from "./../components/Guest/Other/ComingSoon";
import Container from "@iso/ui/UI/Container/Container";

export default function ServicesPage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Service</title>
      </Head>
      <GuestLayout>
        <Container>
          <ComingSoon />
        </Container>
      </GuestLayout>
    </>
  );
}
