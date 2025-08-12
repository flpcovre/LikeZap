export const throwDelay = (seconds: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ throw: 'delay' })
        }, seconds);
    });
}