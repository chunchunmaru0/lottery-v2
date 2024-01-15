import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const ResultPage = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div>
          {JSON.stringify(session)}
          
    </div>
  );
};

export default ResultPage;
