export const getFirstSentence = (description: string): string => {
    const regex = /^[^.!?]+[.!?]/;
    const match = description.match(regex);
    return match ? match[0] : description;
};
