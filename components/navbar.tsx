import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { MainNav } from "./main-nav";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("sign-in");
  }
  return (
    <div className="border-b bg-sky-600 shadow-slate-500 shadow">
      <div className="flex h-14 items-center px-8">
        <MainNav className="ml-auto mr-8" />
        <div className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
