import { useState } from "react";
import { mockTrivia, type Country } from "../../utils/triviaQuestions";
import { Star } from "lucide-react";
import { TriviaMenu } from "./TriviaMenu";

export const TriviaView = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const resetTrivia = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  const startCountryTrivia = (country: Country) => {
    resetTrivia();
    setSelectedCountry(country);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || !selectedCountry) return;
    const trivia = mockTrivia[selectedCountry];
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === trivia[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (!selectedCountry) return;
    const trivia = mockTrivia[selectedCountry];
    if (currentQuestion < trivia.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  if (!selectedCountry) {
    return <TriviaMenu onClick={startCountryTrivia} />;
  }

  const trivia = mockTrivia[selectedCountry];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">{selectedCountry} Trivia</h1>

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
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / trivia.length) * 100}%` }}
            ></div>
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
            onClick={() => setSelectedCountry(null)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
};
