"use client";
import { revalidatePath, revalidateTag } from "next/cache";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignoutBtn = () => {
  return (
    <Button onClick={() => signOut()} className="mx-6">
      Signout
    </Button>
  );
};

export default SignoutBtn;
