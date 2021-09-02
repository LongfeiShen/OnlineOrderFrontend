import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>header</Header>
      <Content
        style={{
          padding: "50px",
          maxHeight: "calc(100% - 64px)",
          overflowY: "auto",
        }}
      >
        content
      </Content>
    </Layout>
  );
}

export default App;

