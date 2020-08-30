export async function asyncClient(): Promise<string> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Async provider init');
        }, 8000);
    });
}