import { useEffect, useState } from 'react';
enum Phase {
    Typing,
    Pausing,
    Deleting,
}
const TYPING_INTERVAL = 300;
const PAUSE_TIME = 1000
const DELETING_INTERVAL = 200;
const useTypedWords = (words: string[]) => {

    const [phase, setPhase] = useState(Phase.Typing)
    const [index, setIndex] = useState<number>(0)
    const [typedWord, setTypedWord] = useState<string>('');
    useEffect(() => {
        switch (phase) {
            case Phase.Typing: {
                const nextWord = words[index].slice(0, typedWord.length + 1);
                if (nextWord === typedWord) {
                    setPhase(Phase.Pausing);
                    return;
                }
                const timeout = setTimeout(
                    () => { setTypedWord(nextWord); }, TYPING_INTERVAL);

                return () => { clearTimeout(timeout); };
            }
            case Phase.Deleting: {
                if (!typedWord) {
                    const nextIndex = index + 1
                    setIndex(words[nextIndex] ? nextIndex : 0)
                    setPhase(Phase.Typing);
                    return
                }
                const nextRemaining = words[index].slice(0, typedWord.length - 1);
                const timeout = setTimeout(
                    () => { setTypedWord(nextRemaining); }, DELETING_INTERVAL);

                return () => { clearTimeout(timeout); };
            }
            case Phase.Pausing: {
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting);
                }, PAUSE_TIME)
                return () => clearTimeout(timeout)
            }
            default:
                return

        }
        if (phase === Phase.Pausing) return

    }, [words, typedWord, phase, index]);

    return typedWord;
};

export default useTypedWords;
