import React from 'react';
import { Button, Image } from 'react-bootstrap';

const Coffee = () => {
    return (
        <div className='container'>
            <Button className='w-100 text-center bg-danger'>
                <Image className='mt-3' src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a Coffee" />
                <h1>Buy me a Coffee!</h1>
            </Button>
        </div>
    );
}

export default Coffee;