import React from 'react';
const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=fcd271ef6c7b4a76885a01f87b5e983f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login = () => {
  return (
    <div>
      <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  );
};

export default Login;
