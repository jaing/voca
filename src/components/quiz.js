import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Progress, Input, Button, Modal, Form} from 'semantic-ui-react';
import Summary from "./summary";

const Quiz = ({words, onClose}) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState(words.map(word => {
        return {
            foreign: '',
            native: word.native,
            correct: word.foreign,
        }
    }));

    const displayQuestions = step < answers.length;

    const setAnswerValue = (value, step) => {
        let stateCopy = [...answers];
        stateCopy[step].foreign = value;

        setAnswers(stateCopy)
    };

    return (
        <Fragment>
            {displayQuestions && (
                <Fragment>
                    <Progress style={{marginBottom: 0}} value={step + 1} total={answers.length} progress='ratio' indicating />
                    <Modal.Header>Please type a foreign word in an input</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            {displayQuestions && (
                                <Form>
                                    <Form.Field>
                                        <Input
                                            label={`${answers[step].native}: `}
                                            name='foreign'
                                            value={answers[step].foreign}
                                            onChange={(event) => setAnswerValue(event.target.value, step)}
                                        />
                                    </Form.Field>
                                </Form>
                            )}
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        {step < (answers.length - 1) ? (
                            <Button color='green' onClick={() => setStep(step + 1)}>
                                Next
                            </Button>
                        ) : (
                            <Button color='green' onClick={() => setStep(step + 1)}>
                                Submit
                            </Button>
                        )}
                    </Modal.Actions>
                </Fragment>
            )}
            {!displayQuestions && (
                <Summary answers={answers} onClose={onClose} />
            )}
        </Fragment>
    );
};

Quiz.propTypes = {
    words: PropTypes.array,
    onClose: PropTypes.func,
};

export default Quiz;
