import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../queries & mutation/Mutations";
import { FormEvent, useRef } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdatePostPage = () => {
    const { id } = useParams();
    const [updatePost, { loading, error, data }] = useMutation(UPDATE_POST);

    const inputBody = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (inputBody.current) {
            updatePost({
                variables: {
                    id: id,
                    body: inputBody.current.value,
                },
            });
            inputBody.current.value = "";
        }
    };

    if (loading)
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );

    if (error)
        return (
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{error.message}</p>
            </Alert>
        );

    console.log(data);

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Body: </Form.Label>
                    <Form.Control type="text" ref={inputBody} placeholder="Enter Body" />
                </Form.Group>
                <Button type="submit">Update Post</Button>
            </Form>

            {data && data.updatePost && (
                <Alert variant="success">
                    <Alert.Heading>Post Updated</Alert.Heading>
                    <p>Post with id {data.updatePost.id} has been updated</p>
                </Alert>
            )}
        </Container>
    );
};

export default UpdatePostPage;
