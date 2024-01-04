// import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }: any) {
  // const [uid, setUid] = React.useState("");
  // get user id/email from database in order to authenticate.

  const email: string = "davidguri@yahoo.com";
  // hardcoding this value in until database is working.

  if (email !== "davidguri@yahoo.com") return <Navigate to="/" />;
  // have the email value there be a .env secret.

  return children;
}