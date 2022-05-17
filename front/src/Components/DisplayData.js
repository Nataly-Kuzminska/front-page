import React from 'react';
import { useQuery, gql } from "@apollo/client";

const ALL_TECH_CLOTHES = gql`
  query GetData {
    data {
      All
      Tech
      Clothes
    }
  }
`;

function DisplayData() {
  const {data} = useQuery(ALL_TECH_CLOTHES);
  if(data) {
    console.log(data); 
  }
  return <div></div>;
}

export default DisplayData;
