import React, { useEffect, useState } from "react";
import Filters from "../FilterForm/Filters";
import UserList from "../UserList";
import { countries } from "../../data/Countries";
import * as S from "./style"

const HomeContent = ({users, isLoading}) => {

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState([]);
  const [favoriteUsers, setFavoriteUsers] = useState([])
  const [userToRemove, setUserToRemove] = useState(null)

  useEffect(() => {
    if (userToRemove){
      removeFromLocalStorage()
    }
    else{
      addToLocalStorage()
    }

  }, [favoriteUsers])


  useEffect(() => {
    if (checkedCountries.length === 0){
      setFilteredUsers(users)
    }
    else {
      const newUsers = users.filter(user => {
          return checkedCountries.find(country => user.location.country === country.label)
      })
      setFilteredUsers(newUsers)
    }
  }, [checkedCountries])

  const addToLocalStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favoriteUsers'))
    if (!favorites){
      favorites = []
    }
    favorites = favorites.concat(favoriteUsers)
    const favoriteForStorage = []
    favorites.forEach(fav => {
      if (!(favoriteForStorage.find((user => user.email === fav.email)))){
        favoriteForStorage.push(fav)
      }
    })
    localStorage.setItem('favoriteUsers', JSON.stringify(favoriteForStorage))
  }

  const removeFromLocalStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favoriteUsers'))
    favorites = favorites.filter(fav => fav.email !== userToRemove.email)
    localStorage.setItem('favoriteUsers', JSON.stringify(favorites))
    setUserToRemove(null)
  }

  const onFiltersChange = (checks) => {
      const checkCountries = countries.filter(country => {
            return checks[countries.indexOf(country)]
      })
    setCheckedCountries(checkCountries)
  }

  const onMarkFavorite = (user) => {
    if (user.isFavorite){
      const favs = favoriteUsers.concat(user)
      setFavoriteUsers(favs)
    }
    else{
      const favs = favoriteUsers.filter(usr => usr.email !== user.email)
      setFavoriteUsers(favs)
      setUserToRemove(user)
    }
  }

  return (
    <S.Content>
      <Filters data={countries} onFilterChange={onFiltersChange}/>
      <UserList users={filteredUsers.length === 0 ? users : filteredUsers} isLoading={isLoading} onRemove={() =>{}} onClick={onMarkFavorite}/>
    </S.Content>
  )
}

export default HomeContent
