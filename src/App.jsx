import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useState } from 'react';

import './style.css';

const flashCards = [
    {
        category: 'JavaScript',
        question: 'What is the difference between == and === in JavaScript?',
        answer: '== checks value equality with implicit type conversion, while === checks both value and type equality.',
    },
    {
        category: 'JavaScript',
        question: 'How do you check the data type of a variable?',
        answer: 'Use the typeof operator. Example: typeof variable',
    },
    {
        category: 'JavaScript',
        question: 'What does NaN stand for and what is its data type?',
        answer: 'NaN means Not-a-Number, but its data type is number.',
    },
    {
        category: 'JavaScript',
        question: 'What is the result of [] + [] in JavaScript?',
        answer: 'It returns an empty string because arrays are converted into strings.',
    },
    {
        category: 'JavaScript',
        question: 'How do you create a shallow copy of an array?',
        answer: 'Use the spread operator: const copy = [...originalArray]',
    },
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentCard = flashCards[currentIndex];

    const progress = ((currentIndex + 1) / flashCards.length) * 100;

    const handleToggleAnswer = () => {
        setIsFlipped((prev) => !prev);
    };

    const handleNextBtn = () => {
        if (currentIndex === flashCards.length - 1) return;

        setCurrentIndex((prev) => prev + 1);
        setIsFlipped(false);
    };

    const handleBackBtn = () => {
        if (currentIndex === 0) return;

        setCurrentIndex((prev) => prev - 1);
        setIsFlipped(false);
    };

    return (
        <div
            className="
                min-h-screen
                flex
                items-center
                justify-center
                p-6
                bg-gray-950
            "
        >
            <div className="w-full max-w-xl">
                {/* Header */}

                <div className="text-center mb-8">
                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-white
                        "
                    >
                        Flash Learn
                    </h1>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Master concepts one card at a time
                    </p>
                </div>

                {/* Progress */}

                <div className="mb-6">
                    <div
                        className="
                            flex
                            justify-between
                            mb-2
                            text-sm
                            font-medium
                            text-gray-300
                        "
                    >
                        <span>
                            Card {currentIndex + 1} of {flashCards.length}
                        </span>

                        <span>{Math.round(progress)}%</span>
                    </div>

                    <div
                        className="
                            h-4
                            bg-gray-800
                            rounded-full
                            overflow-hidden
                        "
                    >
                        <div
                            className="
                                h-full
                                rounded-full
                                bg-linear-to-r
                                from-blue-500
                                to-purple-600
                                transition-all
                                duration-500
                            "
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Category */}

                <div className="flex justify-center mb-5">
                    <span
                        className="
                            px-4
                            py-1
                            rounded-full
                            bg-blue-500/20
                            text-blue-400
                            text-sm
                            font-semibold
                        "
                    >
                        {currentCard.category}
                    </span>
                </div>

                {/* Flash Card */}

                <div className="card-container">
                    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                        {/* Front */}

                        <div
                            className="
                                card-side
                                card-front

                                bg-gray-900

                                rounded-3xl

                                shadow-2xl

                                border
                                border-gray-800

                                p-10

                                flex
                                items-center
                                justify-center

                                text-center

                                text-xl

                                font-medium

                                text-gray-200
                            "
                        >
                            {currentCard.question}
                        </div>

                        {/* Back */}

                        <div
                            className="
                                card-side
                                card-back

                                bg-linear-to-br
                                from-blue-600
                                to-purple-700

                                rounded-3xl

                                shadow-2xl

                                p-10

                                flex
                                items-center
                                justify-center

                                text-center

                                text-xl

                                font-medium

                                text-white
                            "
                        >
                            {currentCard.answer}
                        </div>
                    </div>
                </div>

                {/* Buttons */}

                <div
                    className="
                        flex
                        justify-center
                        gap-4
                        mt-10
                        flex-wrap
                    "
                >
                    <button
                        onClick={handleBackBtn}
                        disabled={currentIndex === 0}
                        className="
                            flex
                            items-center
                            gap-2

                            px-5
                            py-3

                            rounded-xl

                            bg-gray-800

                            text-white

                            font-semibold

                            shadow-lg

                            hover:bg-gray-700

                            hover:-translate-y-1

                            transition

                            disabled:opacity-40
                        "
                    >
                        <ChevronLeft size={18} />
                        Back
                    </button>

                    <button
                        onClick={handleToggleAnswer}
                        className="
                            flex
                            items-center
                            gap-2

                            px-5
                            py-3

                            rounded-xl

                            bg-blue-600

                            text-white

                            font-semibold

                            shadow-lg

                            hover:bg-blue-500

                            hover:-translate-y-1

                            transition
                        "
                    >
                        <Eye size={18} />

                        {isFlipped ? 'Hide Answer' : 'Show Answer'}
                    </button>

                    <button
                        onClick={handleNextBtn}
                        disabled={currentIndex === flashCards.length - 1}
                        className="
                            flex
                            items-center
                            gap-2

                            px-5
                            py-3

                            rounded-xl

                            bg-green-600

                            text-white

                            font-semibold

                            shadow-lg

                            hover:bg-green-500

                            hover:-translate-y-1

                            transition

                            disabled:opacity-40
                        "
                    >
                        Next
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
