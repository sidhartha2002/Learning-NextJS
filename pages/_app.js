import "../styles/globals.css";

export default function App({ Componenet, ...pageProps }) {
  return <Componenet {...pageProps} />;
}
