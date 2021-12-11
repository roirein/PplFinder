import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { countries } from "../../data/Countries";
import User from "../User/User"

const UserList = ({ users, isLoading, onRemove, onClick}) => {

  const onMarkFavorite = (user) => {
      user.isFavorite = !user.isFavorite
      onClick(user)
  }

  return (
    <S.UserList>
      <S.List>
        {users ? users.map((user, index) => {
          return (
            <User user={user} isFav={user.isFavorite} key={index} onRemove={onRemove} markFavorite={onMarkFavorite}/>
          );
        }) : "No Users To Show"}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
