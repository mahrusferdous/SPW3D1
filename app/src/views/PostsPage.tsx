import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries & mutation/Queries";
import { Alert, Card, Container, Row, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}

const PostsPage = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

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
            <Row>
                {data.posts.data.map(({ id, title }: Post) => (
                    <Card key={id}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Link to={`/${id}`}>
                                <Button variant="primary">More</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
};

export default PostsPage;
