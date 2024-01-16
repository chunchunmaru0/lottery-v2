import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const HistoryPage = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default HistoryPage;
