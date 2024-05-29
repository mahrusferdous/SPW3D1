import { useQuery, useMutation } from "@apollo/client";
import { GET_POSTS } from "../queries & mutation/Queries";
import { DELETE_POST } from "../queries & mutation/Mutations";
import { Alert, Card, Container, Row, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}

const PostsPage = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    const [deletePost] = useMutation(DELETE_POST);

    const handleClick = (id: number) => {
        deletePost({
            variables: {
                id: id,
            },
        });
        console.log("Simulate Delete");
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

    return (
        <Container>
            <h1>Posts</h1>
            <Link to={`/post`}>
                <Button variant="primary">Create Post</Button>
            </Link>

            <Row>
                {data.posts.data.map(({ id, title }: Post) => (
                    <Card key={id}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Link to={`/${id}`}>
                                <Button variant="primary">More</Button>
                            </Link>
                            <Button variant="primary" onClick={() => handleClick(id)}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
};

export default PostsPage;
