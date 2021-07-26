import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";





export const Profile = ()=>{
    const {user} = useAuth0();

   return(
   <div>
       <h1>User information</h1>

       <h4>Username :{user? user.name :''}</h4>
       
   </div>
   )
};