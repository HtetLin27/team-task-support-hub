import FormSectionCard from "@/components/shared/FormSectionCard";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import TextAreaField from "@/components/shared/TextAreaField";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

type TaskFormShellProps = {
  onCancel?: () => void;
}

export default function TaskFormShell({ onCancel }: TaskFormShellProps) {
  return (
    <FormSectionCard
      title="Create Task"
      description="Add a new task with title, status, and description."
    >
      <InputField label="Title" placeholder="Enter task title" />
      <SelectField label="Status" options={["Todo", "In Progress", "Done"]} />
      <TextAreaField
        label="Description"
        placeholder="Write a short task description"
      />
      <div className="flex items-center gap-2">
        <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
        <PrimaryButton>Create Task</PrimaryButton>
      </div>
    </FormSectionCard>
  );
}