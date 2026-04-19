import SearchInput from "@/components/shared/SearchInput";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

type FilterBarProps = {
  searchPlaceholder: string;
  primaryActionLabel: string;
  onPrimaryAction?: () => void;
  searchValue?: string;
  onSearchChange? : (value:string)=>void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void
};

export default function FilterBar({
  searchPlaceholder,
  primaryActionLabel,
  onPrimaryAction,
  searchValue,
  onSearchChange,
  secondaryActionLabel,
  onSecondaryAction
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="w-full md:max-w-sm">
        <SearchInput placeholder={searchPlaceholder} value={searchValue} onChange={onSearchChange} />
      </div>

      <div className="flex items-center gap-2">
        <SecondaryButton onClick={onSecondaryAction}>
          {secondaryActionLabel ?? "Reset"}
        </SecondaryButton>
        <PrimaryButton onClick={onPrimaryAction}>
          {primaryActionLabel}
        </PrimaryButton>
      </div>
    </div>
  );
}