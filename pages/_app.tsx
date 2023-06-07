import Layout from "@/components/Layout";
import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import EditMOdal from "@/components/modal/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <EditMOdal />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
