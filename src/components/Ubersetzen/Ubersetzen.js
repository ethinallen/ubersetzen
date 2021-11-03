import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import Login from './Login';
import { useAuth0 } from "@auth0/auth0-react";

import Lyrics from './lyricComponent';
import CurrentPlay from './currentlyPlayingCard';
import { Card, Image } from 'semantic-ui-react';


import { useCurrent } from '../../net/currentPlaying'

import './Ubersetzen.css';

function Ubersetzen(props) {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  if (!isAuthenticated) {
    return (
    <div className="contentContainer">
      <Login />
    </div>)
  }

    return (
      isAuthenticated && (

      <div className="contentContainer">
      <Card>
        <Card.Content>
          <Image
          floated='right'
          size='large'
          src={user.picture}
          />
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.email}</Card.Meta>
        </Card.Content>
      </Card>
      </div>)
    );
}

export default Ubersetzen;
