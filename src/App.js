import React, {Component} from 'react';
import { Container, Header, Button, Modal, Card } from 'semantic-ui-react'
import ListOfWords from "./components/list-of-words";
import AddWord from "./components/add-word";
import Quiz from "./components/quiz";

class App extends Component {
    state = {
        showModal: false,
        words: [

        ]
    };

    render() {
        return (
            <Container>
                <br/><br/>
                <Card fluid>
                    <Card.Content>
                        <Header as='h1'>Your Vocabulary</Header>
                        <Modal
                            onClose={() => this.setState({showModal: false})}
                            open={this.state.showModal}
                            trigger={
                                <Button
                                    disabled={this.state.words.length === 0}
                                    onClick={() => this.setState({showModal: true})}
                                    positive
                                    size="large"
                                >
                                    Start a new lesson
                                </Button>
                            }>
                            <Quiz words={this.getWordsForQuiz()} onClose={() => this.setState({showModal: false})} />
                        </Modal>
                        <div>
                            <small>It's recommended to start a test with at least 10 words</small>
                        </div>
                        <Header as='h3'>Add a new word</Header>
                        <AddWord onAdd={this.onAdd} />
                        <ListOfWords onRemove={this.onRemove} words={this.state.words} />
                    </Card.Content>

                </Card>

            </Container>
        );
    }

    getWordsForQuiz = () => {
        let shuffled = [...this.state.words].sort(() => 0.5 - Math.random());

        let selected = shuffled.slice(0, 20);

        return selected;
    };

    onAdd = data => {
        this.setState({
            words: [...this.state.words, ...[data]]
        });
    };

    onRemove = data => {
        const itemIndex = this.state.words.findIndex(word => word.native === data.native);

        let stateCopy = [...this.state.words];
        stateCopy.splice(itemIndex, 1);


        return this.setState({
            words: stateCopy
        })
    };
}

App.propTypes = {};

export default App;
