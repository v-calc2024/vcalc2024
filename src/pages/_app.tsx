import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/models/appPropsWithLayoutType";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return getLayout(
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Montserrat:wght@400;500&display=swap");
        * {
          font-family: "Montserrat", sans-serif;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        p {
          font-family: "Verdana", "Montserrat", sans-serif !important;
        }

        .css-1xnbq41-MuiAutocomplete-root
          .MuiAutocomplete-inputRoot
          .MuiAutocomplete-input {
          padding: 0 !important;
          padding-left: 8px !important;
          padding-top: 14px !important;
          font-size: 0.9rem;
        }

        .MuiAutocomplete-inputRoot {
          min-height: 2.7rem;
          position: relative;
        }

        :root {
          --primary-color: black;
          --secondary-color: gray;
          --contrast-color: #ffffff;
          --terciary-color: #1180f1;
          --cuaternary-color: #5f4bdb;
          --border-color: gainsboro;
          --primary-bg-color: #f8f9fd;
          --secondary-bg-color: #ffffff;
          --primary-hover-color: #5f4bdb;
          --button-primary-color: #5f4bdb;
          --button-secondary-color: #f0eeff;
        }
      `}</style>
    </>
  );
}
