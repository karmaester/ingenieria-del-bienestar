import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dr Julio Rojas</title>
        <meta
          name="description"
          content="Dr Julio Rojas"
        />
        <link rel="icon" href="/LOGO-solo-icono.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
