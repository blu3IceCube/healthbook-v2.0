import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { MainNav } from "./main-nav";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("sign-in");
  }
  return (
    <div className="border-b sticky top-0 bg-sky-700">
      <div className="flex h-12 items-center px-8">
        <header>
          <h1 className="text-white font-bold">HEALTHBOOK</h1>
        </header>
        <MainNav className="ml-auto mr-8" />
        <div className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
