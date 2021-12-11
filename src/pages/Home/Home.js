import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import Filters from "../../components/FilterForm/Filters";
import HomeContent from "../../components/HomeContent/HomeContent";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <HomeContent users={users} isLoading={isLoading}/>
      </S.Content>
    </S.Home>
  );
};

export default Home;
