"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Separator } from "@/components/ui/separator";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Upload } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <>
      <div className="m-auto w-9/12">
        <div className="flex items-center justify-between mt-12 mb-2">
          <h1 className="text-xl font-medium text-gray-500">Your files</h1>
          <Button
            className="flex items-center justify-between gap-4 text-xl font-medium text-gray-500"
            variant="ghost"
          >
            <Upload />
            Upload
          </Button>
        </div>
        <Separator />
      </div>
    </>
  );
}
