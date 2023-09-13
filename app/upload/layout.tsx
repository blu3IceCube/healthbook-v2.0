import { ModalProvider } from "@/providers/modal-provider";

export default function uploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ModalProvider />
      {children}
    </>
  );
}
