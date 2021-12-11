import React, { useCallback, useEffect, useState } from "react";
import UserList from "components/UserList";
// import useRetrieveLocalStorage  from "../../hooks/useRetrieveLocalStorage";
import * as S from "../Home/style";
import Text from "../../components/Text";
import useRetrieveLocalStorage from "../../hooks/useRetrieveLocalStorage";
import FavoritesWrapper from "../../FavoritesWrapper/FavoritesWrapper";

const Favorites = () => {

  const users = useRetrieveLocalStorage();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <FavoritesWrapper users={users}/>
      </S.Content>
    </S.Home>
  );
}

export default Favorites
