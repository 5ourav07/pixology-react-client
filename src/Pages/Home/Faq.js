import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className="container">
            <h1 className='text-center mb-3'>Faq</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Payment System</Accordion.Header>
                    <Accordion.Body>
                        <p>Bkash, Rocket, DBBL</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Address</Accordion.Header>
                    <Accordion.Body>
                        <p>Dhaka, Bangladesh</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Faq;