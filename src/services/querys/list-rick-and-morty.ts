import { gql } from '@apollo/client';

export const GET_LIST_RICK_AND_MORTY = gql`
    query {
        characters(page: 2, filter: { name: "Morty" }) {
            info {
                count
            }
            results {
                name
                status
                image
                species
            }
        }
        location(id: 1) {
            id
        }
        episodesByIds(ids: [1, 2]) {
            id
        }
    }
`;
