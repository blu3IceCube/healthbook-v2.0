"use client";

import Navbar from "@/components/navbar";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <>
      <Modal
        title="Test"
        description="test desc"
        isOpen={true}
        onClose={() => {}}
      >
        Children
      </Modal>
      {/* <Navbar /> */}
    </>
  );
}
