import FormSectionCard from "@/components/shared/FormSectionCard";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import TextAreaField from "@/components/shared/TextAreaField";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { useState } from "react";

type TaskFormShellProps = {
  onCancel?: () => void;
  onCreate?: (task:{
    title: string;
    description: string;
    status: string;
  }) => void;
}

export default function TaskFormShell({ onCancel, onCreate }: TaskFormShellProps) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");
  return (
    <FormSectionCard
      title="Create Task"
      description="Add a new task with title, status, and description."
    >
      <InputField value={title} onChange={(e) => setTitle(e)} label="Title" placeholder="Enter task title" />
      <SelectField value={status} onChange={(e) => setStatus(e)} label="Status" options={["Todo", "In Progress", "Done"]} />
      <TextAreaField
        value={description}
        onChange={(e) => setDescription(e)}
        label="Description"
        placeholder="Write a short task description"
      />
      <div className="flex items-center gap-2">
        <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
        <PrimaryButton onClick={() => onCreate?.({ title, description, status })}>
          Create Task
        </PrimaryButton>
      </div>
    </FormSectionCard>
  );
}