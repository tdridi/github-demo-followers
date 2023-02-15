import React from "react";
import UsersCard from "./UsersCard";
const Home = () => {
  return (
    <>
      <div className="main-page">
        <h2>Click on any card of two users</h2>
            <UsersCard  nameOfUsers={['tumiduong','mildlywilde']} />
            <UsersCard  nameOfUsers={['wolever','shazow']} />
      </div>
    </>
  );
};
export default Home;
