import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');

    return (
        <div className="container mb-5">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            SQL databases are the best option if you want consistency, dependability, and a way to query structured data.
                            Choose NoSQL databases instead if you want to operate more quickly and independently when storing and retrieving data like graphs, binary integers, etc.
                            The latter is more object-based and appropriate for a vast array of various sorts of data storage, whilst the former concentrates on complicated queries, data consistency, and ACID features.
                            Therefore, carefully research the distinctions between SQL and NoSQL before selecting your chosen alternative.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            JWT, or JSON Web Token, is an open standard that allows a client and a server to exchange security-related data. Every JWT has a set of encoded JSON objects, including claims. To ensure that the claims cannot be changed after the token is issued, JWTs are signed using a cryptographic technique.
                            JWTs are unique among web tokens in that they include a list of claims. Information is sent between two parties through claims. The specific use case will determine what these assertions are. A claim might specify, for instance, who issued the token, how long it is valid, or what authorizations the client has received.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Our web pages and online apps become dynamic and interactive thanks to JavaScript, a high-level programming language that gives them the capacity to reason and act. While Node.js is a runtime environment built on the Google v8 engine and often used to represent a list of objects and functions that JavaScript programs can access, JavaScript is a lightweight (easily learned grammar) and object-oriented programming language.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests. The EventQueue's listener is the EventLoop.

                            The event loop would handle the request itself and send the response back to the client by itself if NodeJS can process the request without I/O blocking. However, using either the NodeJS cluster module or the worker threads module, it is possible to handle several requests in parallel.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;