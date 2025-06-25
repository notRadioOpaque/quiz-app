interface Props {
  question: string;
  options: string[];
  onSelect: (opt: string) => void;
}

export default function QuizCard({ question, options, onSelect }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="font-semibold mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt)}
            className="w-full p-2 border border-gray-300 text-white rounded hover:!bg-blue-700"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
