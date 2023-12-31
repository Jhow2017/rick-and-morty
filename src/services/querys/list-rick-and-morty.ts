import { gql } from '@apollo/client';

export const GET_LIST_RICK_AND_MORTY = gql`
    query GetListRickAndMorty($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                count
            }
            results {
                id
                name
                status
                image
                species
                type
                gender
                origin {
                    id
                    name
                }
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
