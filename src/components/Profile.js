import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Profile</h1>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <JSONPretty data={user} />
      </div>
    )
  );
};

export default Profile;