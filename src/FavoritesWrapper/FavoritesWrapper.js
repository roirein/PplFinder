import React, { useEffect, useRef, useState } from "react";
import * as S from "./style"
import UserList from "../components/UserList";

const FavoritesWrapper = ({users}) => {

  const [favoriteUsers, setFavoriteUsers] = useState([]);
  const [showInitialFavorites, setShowInitialFavorites] = useState(true)
  const [userForRemove, setUserForRemove] = useState(null)
  useEffect(() => {
    setFavoriteUsers(users)
  }, [users])

  useEffect(() => {
    setShowInitialFavorites(false)
    if(userForRemove){
      let favorites = JSON.parse(localStorage.getItem('favoriteUsers'))
      favorites = favorites.filter(fav => fav.email !== userForRemove.email)
      localStorage.setItem('favoriteUsers', JSON.stringify(favorites))
    }
  }, [favoriteUsers])

  const onClick = (user) => {
    const favorites = favoriteUsers.filter(usr => usr.email !== user.email)
    setUserForRemove(user)
    setFavoriteUsers(favorites)
  }

  return (
    <S.List>
      <UserList users={showInitialFavorites ? users : favoriteUsers} isLoading={false} onClick={onClick}/>
    </S.List>
  )
}

export default FavoritesWrapper
