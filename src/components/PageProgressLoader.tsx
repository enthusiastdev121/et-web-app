import React from "react";
import Button from "./Button";

export default function PageProgressLoader({ title, desc, onCancel, progress }: { title: string; onCancel: () => any; progress: number; desc?: string }) {
  return (
    <div className="fixed h-screen w-full bg-black bg-opacity-90 left-0 top-0 flex flex-col items-center justify-center z-40">
      <div className="flex flex-col items-center">
        <div className="text-white text-center mb-2">
          <div className="text-lg font-semibold">{title}</div>
          {desc && <p className="text-base opacity-70">{desc}</p>}
        </div>

        <div className="rounded-full bg-gray-400 overflow-hidden relative" style={{ maxWidth: "90%", width: 200, height: 16 }}>
          <div className="absolute left-0 top-0 h-full bg-blue-700 -500" style={{ width: progress * 100 }} />
        </div>

        <div className="mt-4">
          <Button red onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
