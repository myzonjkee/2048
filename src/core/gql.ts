import { gql } from "@apollo/client";

export type Score = {
  id: string;
  score: number;
  player: {
    name: string;
  };
}

export type HighScores = {
  allScores: Score[];
}

export const HIGH_SCORES = gql`
  query GetHighScores {
    allScores(orderBy: "score_DESC",  first: 10) {
      player {
        name
      }
      id
      score
    }
  }
`;



export type AuthenticatedUser = {
  authenticatedUser: {
    id: string;
    name: string;
  }
}

export const AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authenticatedUser {
      id
      name
    }
  }
`;