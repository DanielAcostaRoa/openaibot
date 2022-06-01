import type { NextPage } from "next";
import Chat from "components/Chat/Chat";
import Layout from "components/Layout";
import { ChatProvider } from "../components/Chat/Chat.context";

const Home: NextPage = () => {
  return (
    <Layout>
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </Layout>
  );
};

export default Home;
