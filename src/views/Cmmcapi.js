/*import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap';
import './Cmmcapi.css';

const Cmmcapi = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText.trim()) {
            const userMessage = { text: inputText, fromUser: true };
            setMessages([...messages, userMessage]);
            setInputText("");

            try {
                const response = await fetch("http://localhost:3001/getDialogflowResponse"); // Call your backend
                const data = await response.json(); // Parse JSON response

                // Extract the text part of the Dialogflow response
                const botMessageText = data.queryResult?.responseMessages?.[0]?.text?.text?.[0] || "Sorry, I didn't understand that.";
                
                const botMessage = {
                    text: botMessageText,
                    fromUser: false
                };
                setMessages(msgs => [...msgs, botMessage]);
            } catch (error) {
                console.error('Failed to connect to the server:', error);
                setMessages(msgs => [...msgs, { text: "Failed to connect to the server.", fromUser: false }]);
            }
        }
    };

    return (
        <Row>
            <Col>
                <Card id="chat-card">
                    <CardBody className="chat-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-bubble ${msg.fromUser ? 'user' : 'bot'}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messageEndRef} />
                    </CardBody>
                    <Input
                        type="text"
                        value={inputText}
                        placeholder="Type a message..."
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>Send</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Cmmcapi;
 */


import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap';
import './Cmmcapi.css';

const Cmmcapi = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText.trim()) {
            const userMessage = { text: inputText, fromUser: true };
            setMessages([...messages, userMessage]);
            setInputText("");
    
            try {
                /*
                const response = await fetch("http://localhost:3002/getDialogflowResponse", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userInput: inputText }), // Send user input to backend
                });
                */
                const response = await fetch("https://chatcmmc10-1.onrender.com/getDialogflowResponse", {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userInput: inputText }),
                });

    
                const data = await response.json(); // Parse JSON response
    
                // Extract the text part of the Dialogflow response
                const botMessageText = data.queryResult?.responseMessages?.[0]?.text?.text?.[0] || "Sorry, I didn't understand that.";
                console.log(data); // Log the complete response for debugging

                const botMessage = {
                    text: botMessageText,
                    fromUser: false,
                };
                setMessages(msgs => [...msgs, botMessage]);
            } catch (error) {
                console.error('Failed to connect to the server:', error);
                setMessages(msgs => [...msgs, { text: "Failed to connect to the server.", fromUser: false }]);
            }
        }
    };

    return (
        <Row>
            <Col>
                <Card id="chat-card">
                    <CardBody className="chat-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-bubble ${msg.fromUser ? 'user' : 'bot'}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messageEndRef} />
                    </CardBody>
                    <Input
                        type="text"
                        value={inputText}
                        placeholder="Type a message..."
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>Send</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Cmmcapi;

