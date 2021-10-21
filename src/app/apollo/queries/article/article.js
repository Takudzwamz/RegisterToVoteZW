import gql from "graphql-tag";
const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      author
      image {
        url
      }
      category {
        id
        name
      }
      publishedon
    }
  }
`;
export default ARTICLE_QUERY;
