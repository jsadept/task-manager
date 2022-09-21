export const getRandomId = () => {
    const uid = String(
        Date.now().toString(32) +
        Math.random().toString(16)
    ).replace(/\./g, '')
    return uid;
};