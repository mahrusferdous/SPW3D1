import { gql } from "urql";

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $body: String!) {
        createPost(input: { title: $title, body: $body }) {
            id
            title
            body
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UPDATE_POST($id: ID!, $body: String!) {
        updatePost(input: { id: $id, body: $body }) {
            id
            body
        }
    }
`;
