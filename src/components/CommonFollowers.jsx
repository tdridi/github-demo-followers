import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const CommonFollowers = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemsFirstUser, setItemsFirstUser] = useState([]);
    const [itemsSecondUser, setitemsSecondUser] = useState([]);
    const [commonUser, setCommonUser] = useState([]);
    let { state } = useLocation();

    // Getting All Followers from first and second user
    useEffect(() => {
      fetch(`https://api.github.com/users/${state.users[0]}/followers?per_page=100`)
        .then((res) => res.json())
        .then(
          (result: any) => {
            setItemsFirstUser(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      fetch(`https://api.github.com/users/${state.users[1]}/followers?per_page=100`)
        .then((res) => res.json())
        .then(
          (result: any) => {
            setitemsSecondUser(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, [state.users]);
  
    // Make a 
    useEffect(() => {
      setCommonUser(
        itemsFirstUser.filter((o1: any) =>
          itemsSecondUser.some((o2: any) => o1.login === o2.login)
        )
      );
     
    }, [itemsFirstUser, itemsSecondUser]);

    useEffect(() =>{
        if (commonUser.length>0){
            setIsLoaded(true);
          }
    },[commonUser])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading-users">Loading...</div>;
    } else {
      return (
        <>
         <Link to={`/`}> Go Back</Link>
          <ul className="search-page">
            {commonUser.map((item : any) => (
              <li key={item.id} className="user-info">
                <a href={item.html_url}>
                <img className="user-link__avatar" src={item.avatar_url} alt={item.login}/>
                  <div className="user-link">{item.login}</div>
                </a>
              </li>
            ))}
          </ul>
        </>
      );
    }
};

export default CommonFollowers;