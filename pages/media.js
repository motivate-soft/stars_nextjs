import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Media from "../components/Guest/Media";

export default function MediaPage(props) {
  return (
    <>
      {/* <CustomHead /> */}
      <GuestLayout>
        <Media />
      </GuestLayout>
    </>
  );
}
