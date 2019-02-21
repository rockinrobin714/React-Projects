import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}
const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  });

  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

    }
  });

  const [{ latitude, longitude, speed }, setLocation] = useState(initialLocationState);
  let mounted = true;
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);
    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    }
  });

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const incrementCount = () => {
    setCount(prevcount => prevcount + 1);
  }
  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  }
  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>
      <h2>Toggle Light</h2>
      <img
        src={
          isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height:'50px',
          width: '50px',
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />
      <br /> 
      <h2>Mouse Position</h2>
     {JSON.stringify(mousePosition, null, 2)}
     <h2>Network Status</h2>
     <p>You are <strong>{status ? 'online' : 'offline'}</strong></p>
     <h2>Geolocation</h2>
     <p>Latitude is {latitude}</p>
     <p>Longitude is {longitude}</p>
     <p>Your speed is {speed ? speed : 0}</p>
    </>
  )
};

export default App;
