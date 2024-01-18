import React from "react";
import styled from "styled-components";

export default function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <Focus>
      <input {...props} className={`${props.className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`} />
    </Focus>
  );
}
export function Textarea(props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <Focus>
      <textarea {...props} className={`${props.className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`} />
    </Focus>
  );
}

const Focus = styled.div`

  input:focus, textarea:focus {
    border: 2px solid ${(p: any) => p.theme.primary};
  }
`