import gql from "graphql-tag";

export const QUERY_LUNCH_LIST = gql`
  query LunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
