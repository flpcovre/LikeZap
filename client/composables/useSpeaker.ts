export const useSpeaker = () => {
    const speaker = useState('speaker', () => false);

    const activeSpeaker = () => {
        speaker.value = true;
    }

    const cancelSpeaker = () => {
        speaker.value = false
    }

    return {
        speaker,
        activeSpeaker,
        cancelSpeaker
    }
}