'use client'
import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const Stream = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000");
    
    socket.on("announcements", (data) => {
      console.log("Received announcement:", data);
    });

    socket.on("newData", (data) => {
      console.log("Received new data:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);



  return (
    <div>
      <div>Stream</div>
    </div>
  );
};

export default Stream;
