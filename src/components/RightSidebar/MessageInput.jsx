import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";

export const MessageInput = ({ newMessageHandler, user}) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        setMessage("");
    }, [setMessage, user]);
    let handleInputChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    };
    let handleSubmit = () => {
        if(message) {
            newMessageHandler(message);
        }
        else{
            alert("Type some text message before submitting")
        }
        setMessage("");
    }
    return (
        <Row className="messageInput">
            <Col xs={8} lg={7}>
                <input
                    type="text"
                    placeholder="Enter you message here..."
                    value={message}
                    onChange={handleInputChange}
                />
            </Col>
            <Col xs={4} lg={4}>
                <button className="sendButton" onClick={handleSubmit}>Send</button>
            </Col>
        </Row>
    )
}