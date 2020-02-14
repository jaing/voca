import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'

const AddWord = ({onAdd}) => {
    const [native, setNative] = useState('');
    const [foreign, setForeign] = useState('');
    const [nativeError, setNativeError] = useState(null);
    const [foreignError, setForeignError] = useState(null);

    const onSubmit = () => {
        setNativeError(null);
        setForeignError(null);

        if (!native) {
            setNativeError({ content: 'Please enter a native word', pointing: 'above' });

            return;
        }

        if (!foreign) {
            setForeignError({ content: 'Please enter a foreign word', pointing: 'above' });

            return;
        }

        onAdd({
            native,
            foreign
        });

        setNative('');
        setForeign('');
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Input
                    error={nativeError}
                    placeholder='Native word'
                    name='native'
                    value={native}
                    onChange={(event) => setNative(event.target.value)}
                />
                <Form.Input
                    error={foreignError}
                    placeholder='Foreign word'
                    name='foreign'
                    value={foreign}
                    onChange={(event) => setForeign(event.target.value)}
                />
                <Form.Button content='Submit' primary />
            </Form.Group>
        </Form>
    );
};

AddWord.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddWord;
