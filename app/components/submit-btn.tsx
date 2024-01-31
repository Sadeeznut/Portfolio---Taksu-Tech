import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-green-500 text-white h-8 sm:h-10 md:h-12 rounded-lg outline-none px-2"
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-white h-8 "></div>
      ) : (
        <>
          Submit{""}
        </>
      )}
    </button>
  );
}