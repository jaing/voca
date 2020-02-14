import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';

const ListOfWords = ({words, onRemove}) => {
    return (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Native</Table.HeaderCell>
                    <Table.HeaderCell>Foreign</Table.HeaderCell>
                    <Table.HeaderCell width={1} />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {words.length === 0 && (
                    <Table.Row>
                        <Table.Cell colSpan={3}>There are no words in your collection. You can add them using a form above the table.</Table.Cell>
                    </Table.Row>
                )}
                {words.map(word => {
                    return (
                        <Table.Row>
                            <Table.Cell>{word.native}</Table.Cell>
                            <Table.Cell>{word.foreign}</Table.Cell>
                            <Table.Cell>
                                <Button basic color='red' content='Red' animated='vertical' onClick={() => onRemove(word)}>
                                    <Button.Content hidden>Remove</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='trash' />
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}

            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        Items: {words && words.length}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
};

ListOfWords.propTypes = {
    words: PropTypes.arrayOf(PropTypes.shape({
        native: PropTypes.string.isRequired,
        foreign: PropTypes.string.isRequired,
    }),),

    onRemove: PropTypes.func.isRequired,
};

export default ListOfWords;
