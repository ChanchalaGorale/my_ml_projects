import "./App.css";
import { Avatar, Typography } from "antd";
import profile from "./assets/profile.jpeg";

import { Divider } from "antd";

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
    </div>
  );
}

export default App;
