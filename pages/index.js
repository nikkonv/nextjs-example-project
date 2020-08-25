import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Head from "next/head";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

export default function Index(props) {
  return (
    <Container>
      <Head>
        <title>Home - Nextjs</title>
      </Head>
      <h1>Next</h1>
      <Users users={props.users} />
    </Container>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resjson = await res.json();

  return {
    users: resjson.data,
  };
};
