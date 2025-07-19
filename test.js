

// index File
React, { useState } from "react";
import Vote from "../Vote";
import Results from "../Results";
import { pollData } from "../../data/Poll";

const PollManager: React.FC = () => {
    const [votes, setVotes] = useState<number[]>([0, 0]);
    const [viewWinner, setViewWinner] = useState(false);

    const handleVote = (index: number) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    return (
        <div className="poll-manager" data-testid="poll-manager">
            <h2>{pollData.question}</h2>
            <Vote options={pollData.options} votes={votes} onVote={handleVote} viewWinner={viewWinner} />
            <Results votes={votes} options={pollData.options} viewWinner={viewWinner} setViewWinner={setViewWinner} />
        </div>
    );
};

export default PollManager;
