import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Modal, Table, Icon, Message, Button} from "semantic-ui-react";

const Summary = ({answers, onClose}) => {
    const allCorrect = answers.every(answer => answer.foreign === answer.correct);

    return (
        <Fragment>
            <Modal.Header>
                {allCorrect ? 'You have pass the test!' : 'Unfortunately you did not pass the test'}
            </Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    {allCorrect && (
                        <Message positive>
                            <Message.Header>Congratulations!!!</Message.Header>
                        </Message>
                    )}
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Native</Table.HeaderCell>
                                <Table.HeaderCell>Your Input</Table.HeaderCell>
                                <Table.HeaderCell>Correct</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {answers.map(answer => {
                                return (
                                    <Table.Row positive={answer.correct === answer.foreign} negative={answer.correct !== answer.foreign} key={`table-row-${answer.native}`}>
                                        <Table.Cell>{answer.native}</Table.Cell>
                                        <Table.Cell>
                                            {answer.correct === answer.foreign && (<Icon name='checkmark' />)}
                                            {answer.foreign}
                                        </Table.Cell>
                                        <Table.Cell>{answer.correct}</Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={onClose}>
                    Close
                </Button>
            </Modal.Actions>
        </Fragment>
    );
};

Summary.propTypes = {
    answers: PropTypes.array,
    onClose: PropTypes.func,
};

export default Summary;
