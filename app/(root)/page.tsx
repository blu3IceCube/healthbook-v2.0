import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="ml-auto flex items-center space-x-4">
      <UserButton />
    </div>
  );
}
