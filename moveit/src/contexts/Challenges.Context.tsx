import { createContext, useState } from "react";

export const ChallengesContext = createContext({});

export function ChallengesProvider() {
    const [level, setLevel] = useState(1);

    function levelUp() {
        setLevel(level + 1)
    }

    return (
        <ChallengesContext.provider value={{ level, levelUp }}>

        </ChallengesContext.provider>
    );
}

