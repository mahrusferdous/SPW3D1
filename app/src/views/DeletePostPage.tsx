import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../queries & mutation/Mutations";
import { FormEvent, useRef } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DeletePostPage = () => {
    const { id } = useParams();

    return <Container></Container>;
};

export default DeletePostPage;
