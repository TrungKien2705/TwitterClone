import Header from "@/components/Header";
import NotificationFeed from "@/components/NotificationFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getInitialProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
const notifications = () => {
  return (
    <>
      <Header label="Notifications" showBackArrow />
      <NotificationFeed />
    </>
  );
};

export default notifications;
