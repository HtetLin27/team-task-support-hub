type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="text-2xl font-bold text-gray-900">{title}</h2>;
}