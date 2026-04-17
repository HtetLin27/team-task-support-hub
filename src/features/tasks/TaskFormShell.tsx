import FormSectionCard from "@/components/shared/FormSectionCard";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import TextAreaField from "@/components/shared/TextAreaField";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function TaskFormShell() {
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
      <PrimaryButton>Create Task</PrimaryButton>
    </FormSectionCard>
  );
}