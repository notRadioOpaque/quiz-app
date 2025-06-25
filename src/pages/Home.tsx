import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../services/mock-quiz";
import type { Category } from "../types";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-4 animate-fade-in w-full">
      <h1 className="text-2xl font-bold mb-10">Select a Category</h1>
      <div className="w-full max-w-sm mx-auto flex gap-3 flex-col">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/quiz/${cat.id}`)}
            className="w-full p-3 text-white rounded-lg hover:!bg-blue-700 transition"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
