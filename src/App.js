import "./App.css";
import { Avatar, Button, Typography } from "antd";
import profile from "./assets/profile.jpeg";
import { Divider } from "antd";
import { Card } from "antd";
import { Input } from "antd";
import { useState } from "react";
import axios from "axios";
import CircularJSON from "circular-json";

const { TextArea } = Input;

const { Title } = Typography;

function App() {
  const [text, settext] = useState("");
  const [result, setresult] = useState("");

  const handleDetectlanguage = (text) => {
    if (text) {
      let url =
        "https://language-detector-app-da3b8ebadb7e.herokuapp.com/predict";

      const jsonString = CircularJSON.stringify(text);

      axios
        .post(url, jsonString, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "https://cmg-ai-ml.netlify.app/",
          },
        })
        .then((res) => {
          console.log("res: ", res);

          setresult(res?.data);
        });
    }
  };

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
          <TextArea
            onChange={(e) => {
              settext(e.target.value);
            }}
            value={text}
            placeholder="Enter your text here"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />

          <Button
            onClick={handleDetectlanguage}
            style={{ marginTop: 20, marginBottom: 20, width: "100%" }}
            type="primary"
          >
            Start Language Detector
          </Button>

          {result ? (
            <Typography style={{ color: "#023595", textAlign: "center" }}>
              {result}
            </Typography>
          ) : (
            <Typography style={{ color: "#868686", textAlign: "center" }}>
              Result will be shown here...
            </Typography>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
