import React from "react";
import { Link } from "react-router-dom";

interface CommonFollowersProps {
  nameOfUsers?: Array<string>;
}

const UsersCard = (props: CommonFollowersProps) => {
  return (
    <>
      <div className="user-card">
        <Link to={`/commonFollowers`} state={{ users : props.nameOfUsers }} >
          <div className="title">Get Common Followers Of</div>

          <div className="user-link">
            {props.nameOfUsers?.map((item) => (
              <div key={item} className="user-info">
                  {item}
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
};
export default UsersCard;
