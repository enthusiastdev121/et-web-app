import { agentType } from "@/utils/constants/profile";
import { Input } from "containers/editProfilePages/styles";
import { useEffect } from "react";
import styled from "styled-components";

export default function AgentBox({ value, agentName, agentWebsite, onNameChange, onWebsiteChange, setState }: any) {
  let agId = 0;

  if (value) {
    agId = agentType.filter((i: any) => i.label === value)[0]?.id || 0;
  } else {
    agId = 0;
  }

  useEffect(() => {
    if (agId !== 2) {
      setState((state: any) => ({ ...state, agentName: "" }));
      setState((state: any) => ({ ...state, agentWebsite: "" }));
    }
  }, [agId]);

  return (
    <div>
      {agId === 1 && (
        <>
          <div className="mt-2">
            <InfoText>Great! We&apos;ll make it easier for casting professionals to find you.</InfoText>
          </div>
        </>
      )}
      {agId === 2 && (
        <>
          <Field className="mt-5">
            <label className="font-semibold mb-1">Agency name</label>
            <Input placeholder="Name..." onChange={onNameChange} value={agentName} />
          </Field>
          <Field>
            <label className="font-semibold mb-1">Agency website</label>
            <Input placeholder="Website...." onChange={onWebsiteChange} value={agentWebsite} />
          </Field>
        </>
      )}
    </div>
  );
}

const Field = styled.div`
  margin-bottom: 20px;
`;
const InfoText = styled.div`
  color: ${(p) => p.theme.abs.green};
  font-size: 14px;
`;
