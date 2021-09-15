import gql from "graphql-tag";
const VOTINGS_QUERY = gql`
  query Votings {
    votings {
      id
    }
  }
`;
export default VOTINGS_QUERY;
