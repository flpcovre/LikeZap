export const useSpeaker = () => {
    const speaker = useState<boolean>('speaker', () => false);
    const time = useState<String>('time', () => '00:00');
    const timer = useState<ReturnType<typeof setInterval> | null>('timer', () => null);

    const activeSpeaker = () => {
        speaker.value = true;
        startTimer();
    }

    const stopSpeaker = () => {
        speaker.value = false;
        stopTimer();
    }

    const startTimer = () => {
        let seconds = 0;
        
        timer.value = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const displaySeconds = seconds % 60;
           
            time.value = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    const stopTimer = () => {
        if (timer.value) {
            clearInterval(timer.value);
            time.value = '00:00';
        }
    }

    return {
        speaker,
        time,
        activeSpeaker,
        stopSpeaker
    }
}
