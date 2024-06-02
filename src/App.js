import "./App.css";
import { Avatar, Button, Typography } from "antd";
import profile from "./assets/profile.jpeg";
import { Divider } from "antd";
import { Card } from "antd";

const { Title } = Typography;

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
          marginTop: 40,
        }}
      >
        <Avatar
          style={{
            border: "#023595 10px solid ",
            boxShadow: "-3px 1px -3px #ffffff",
          }}
          size={180}
          src={profile}
        />
      </div>

      <Title style={{ textAlign: "center", color: "#fff" }}>
        Chanchala Gorale
      </Title>

      <Divider style={{ color: "#fff" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card title="Language Detector" style={{ maxWidth: "60vw" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="large"
              type="primary"
              onClick={() => {
                window.open(
                  "https://cmg-language-detector-6fa65cd6319b.herokuapp.com/",
                  "_blank"
                );
              }}
            >
              Open App
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
