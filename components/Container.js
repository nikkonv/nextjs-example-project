import Head from "next/head";
import Navigation from "./Navigation";
export default function Conatiner(props) {
  return (
    <div>
      <Head>
        <title>Nextjs project</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css"
        />
      </Head>
      <Navigation />
      <div className="container p-2 mt-4">{props.children}</div>
    </div>
  );
}
