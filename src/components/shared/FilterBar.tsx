import SearchInput from "@/components/shared/SearchInput";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

type FilterBarProps = {
  searchPlaceholder: string;
  primaryActionLabel: string;
};

export default function FilterBar({
  searchPlaceholder,
  primaryActionLabel,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="w-full md:max-w-sm">
        <SearchInput placeholder={searchPlaceholder} />
      </div>

      <div className="flex items-center gap-2">
        <SecondaryButton>Filter</SecondaryButton>
        <PrimaryButton>{primaryActionLabel}</PrimaryButton>
      </div>
    </div>
  );
}