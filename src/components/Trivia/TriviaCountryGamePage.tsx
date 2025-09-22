import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { mockTrivia, type Country } from "../../utils/Trivia/triviaQuestions";
import { Star } from "lucide-react";

const fromKebab = (s: string) => s.replace(/-/g, " ").toLowerCase();

/** Parse ":slugId" like "japan+1" → { countryKey: "japan", id: 1 } */
function parseSlugId(slugId?: string) {
  if (!slugId) return { countryKey: "", id: 1 };
  const [slug, idStr] = slugId.split("+");
  const id = Number(idStr || "1");
  const countryKey = fromKebab(slug).trim(); // matches keys like "japan", "south korea"
  return { countryKey, id: Number.isFinite(id) && id > 0 ? id : 1 };
}

export const TriviaGamePage = () => {
  const { slugId } = useParams<{ slugId: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const { countryKey, id } = useMemo(() => parseSlugId(slugId), [slugId]);

  // Resolve country enum/key from mockTrivia
  const country = Object.keys(mockTrivia).find((k) => k.toLowerCase() === countryKey) as
    | Country
    | undefined;

  // If you support multiple quizzes per country, treat `id` as the quiz index (1-based).
  // If you have a single quiz array per country, we ignore `id` (or you can branch here).
  const trivia = country ? mockTrivia[country] : undefined;

  if (!country || !trivia || trivia.length === 0) {
    navigate("/trivia");
    return null;
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === trivia[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < trivia.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      return;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">
        {country} Trivia {id > 1 ? `(Set ${id})` : ""}
      </h1>

      {currentQuestion < trivia.length ? (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {trivia.length}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">{score}</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="h-2 rounded-full transition-all duration-300 bg-blue-600"
              style={{ width: `${((currentQuestion + 1) / trivia.length) * 100}%` }}
            />
          </div>

          <h2 className="text-xl font-semibold mb-6">{trivia[currentQuestion].question}</h2>

          <div className="space-y-3 mb-6">
            {trivia[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === null
                    ? "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    : selectedAnswer === index
                    ? index === trivia[currentQuestion].correctAnswer
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : index === trivia[currentQuestion].correctAnswer
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800">
                <strong>Explanation:</strong> {trivia[currentQuestion].explanation}
              </p>
            </div>
          )}

          {showExplanation && (
            <div className="flex justify-center">
              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                {currentQuestion === trivia.length - 1 ? "Finish" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-lg mb-6">
            You scored {score} out of {trivia.length} questions!
          </p>
          <button
            onClick={() => navigate("/trivia")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
};
