import React, { useState, useEffect } from 'react'
import { Button, Card, CardTitle, CardBody, CardText, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

const ListsComponent = (props) => {

    const [ userLists, setUserLists ] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const [newListTitle, setNewListTitle] = useState();

    const modifyListTitle = (event) => setNewListTitle(event.target.value);

    const submitNewList = (event) => {
        event.preventDefault();
        setUserLists([
            ...userLists,
            {title: newListTitle}
        ]);
        // fetch("http://localhost8080/list/new", {
        //     method: "POST",
        //     headers: {
        //         Authorization: props.token,
        //         "Content-Type": "application/json",
        //     },
        //     body: {
        //         title: newListTitle,
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         setUserLists([...userLists, json.list]);
        //     })
        //     .catch((error) => console.log(error));
    };

    const toggleModal = () => setModalOpen(!modalOpen);

    useEffect(() => {
        fetch("http://localhost:8080/list", {
            headers: {
                Authorization: props.token,
            },
        })
        .then(response => response.json())
        .then(body => {
            setUserLists(body.reults);
        })
        .catch((error) => console.log(error));
    }, [])

    return(
        <div id="listsView">
            <div id="listViewHeader">
                <h1>Your Lists</h1>
                <Button color='success' onClick={toggleModal}>
                    New List
                </Button>
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader>Create New TODO List</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="newTitle">Title:</Label>
                                <Input type="text" id="newTitle" onChange={modifyListTitle} value={newListTitle} />
                            </FormGroup>
                        </Form>
                        <Button color="warning" onClick={toggleModal}>
                            Cancel
                        </Button>
                        <Button color="success" onClick={submitNewList}>
                            Create List
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
            {userLists.length > 0 ? (
                userLists.map((item) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.description}</CardText>
                                <Button>
                                    {/* TODO: update this button */}
                                    VIew List Items
                                </Button>
                            </CardBody>
                        </Card>
                    );
                })
            ) : (
                <h1>You have no Lists</h1>
            )}
        </div>
    );
};

export default ListsComponent;