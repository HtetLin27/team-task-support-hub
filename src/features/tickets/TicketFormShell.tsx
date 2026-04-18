import FormSectionCard from "@/components/shared/FormSectionCard";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import TextAreaField from "@/components/shared/TextAreaField";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { useState } from "react";

type TicketFormShellProps = {
  onCancel?: () => void;
  onCreate?: (ticket: {
    subject: string;
    priority: string;
    status: string;
    description: string;
  }) => void;
};

export default function TicketFormShell({ onCancel, onCreate }: TicketFormShellProps  ) {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Open");
  const [description, setDescription] = useState("");
  return (
    <FormSectionCard
      title="Create Ticket"
      description="Add a support ticket with subject, priority, and details."
    >
      <InputField value={subject} label="Subject" placeholder="Enter ticket subject" onChange={(e) => setSubject(e)} />
      <SelectField value={priority} label="Priority" options={["Low", "Medium", "High"]} onChange={(e) => setPriority(e)} />
      <SelectField value={status} label="Status" options={["Open", "In Review", "Closed"]} onChange={(e) => setStatus(e)} />
      <TextAreaField
        value={description}
        label="Description"
        placeholder="Describe the issue or request"
        onChange={(e) => setDescription(e)}
      />
      <div className="flex items-center gap-2">
        <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
        <PrimaryButton onClick={() => onCreate?.({ subject, priority, status, description })}>
          Create Ticket
        </PrimaryButton>
      </div>
    </FormSectionCard>
  );
}