import React, { useState } from "react";
import Icon from "./Components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Container, Card, CardBody, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import "./style.css";
import { FaIceCream, FaRegCircle, FaTimes } from "react-icons/fa";
// import { FaRegCircle, FaTimes } from 'react-icons/fa';

const a = new Array(9).fill("");
const App = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");
  const playAgain = () => {
    setIsCross(true);
    setWinMessage("");
    a.fill("");
  };
  const findWinner = () => {
    if (a[0] === a[1] && a[0] === a[2] && a[0] !== "") {
      setWinMessage(a[0] + " has won");
    } else if (a[3] === a[4] && a[3] === a[5] && a[3] !== "") {
      setWinMessage(a[3] + " has won");
    } else if (a[6] === a[7] && a[6] === a[8] && a[6] !== "") {
      setWinMessage(a[6] + " has won");
    } else if (a[0] === a[3] && a[0] === a[6] && a[0] !== "") {
      setWinMessage(a[0] + " has won");
    } else if (a[1] === a[4] && a[1] === a[7] && a[1] !== "") {
      setWinMessage(a[1] + " has won");
    } else if (a[2] === a[5] && a[2] === a[8] && a[2] !== "") {
      setWinMessage(a[2] + " has won");
    } else if (a[2] === a[4] && a[2] === a[6] && a[2] !== "") {
      setWinMessage(a[2] + " has won");
    } else if (a[0] === a[4] && a[0] === a[8] && a[0] !== "") {
      setWinMessage(a[0] + " has won");
    }
    // code of match is tie
    else if (
      (a[0] === "circle" || a[0] === "cross") &&
      (a[2] === "circle" || a[2] === "cross") &&
      (a[3] === "circle" || a[3] === "cross") &&
      (a[4] === "circle" || a[4] === "cross") &&
      (a[5] === "circle" || a[5] === "cross") &&
      (a[6] === "circle" || a[6] === "cross") &&
      (a[7] === "circle" || a[7] === "cross") &&
      (a[8] === "circle" || a[8] === "cross") &&
      (a[1] === "circle" || a[1] === "cross")
    ) {
      setWinMessage("Match is Tie");
    }
  };

  const changeItem = (index) => {
    if (winMessage) {
      return toast("Game has already got over", { type: "success" });
    }
    if (a[index] === "") {
      a[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Open your eyes dude where are you tapping", {
        type: "error",
      });
    }
    findWinner();
  };

  return (
    <>
      <Container className="p-5">
        <ToastContainer position="bottom-center"></ToastContainer>
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="text-center">
                <h1 className="text-center">{winMessage}</h1>
                <Button className="button" onClick={playAgain}>
                  Play Again
                </Button>
                <div className="mb-3"></div>
              </div>
            ) : (
              <>
                <h1 className="text-center">
                  {isCross ? "Cross's Turn" : "Circle's Turn"}
                </h1>
                <div className="mb-5 pt-1"></div>
              </>
            )}
            <div className="grid">
              {a.map((value, index) => (
                <Card onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon choice={a[index]} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <h1 className="text-center pt-3">
          Start with{" "}
          <FaTimes onClick={() => setIsCross(true)} className="icon" />{" "}
          <FaRegCircle onClick={() => setIsCross(false)} className="icon" />
        </h1>
        <p className="footer">Made By Mukesh Kumar with 💖</p>
      </Container>
    </>
  );
};

export default App;
