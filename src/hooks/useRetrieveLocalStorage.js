import { useEffect, useState } from "react";

const useRetrieveLocalStorage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const favUsers = JSON.parse(localStorage.getItem('favoriteUsers'));
    if (!favUsers){
      setUsers([])
    }
    else{
      setUsers(favUsers)
    }
  },[])


  return users
}

export default useRetrieveLocalStorage
