import { getFirstSentence } from "./getFirstSentence";

describe("test getFirstSentence functionality", () => {
    it("should be defined", () => {
        expect(getFirstSentence).toBeDefined();
    });

    it("should return the first sentence when it finds '.' ", () => {
        const sentence =
            "This is the first sentence. This is the second sentence.";

        expect(getFirstSentence(sentence)).toBe("This is the first sentence.");
    });

    it("should return the first sentence when it finds '!' ", () => {
        const sentence =
            "This is the first sentence! This is the second sentence.";

        expect(getFirstSentence(sentence)).toBe("This is the first sentence!");
    });

    it("should return the first sentence when it finds '?' ", () => {
        const sentence =
            "This is the first sentence? This is the second sentence.";

        expect(getFirstSentence(sentence)).toBe("This is the first sentence?");
    });

    it("should handle empty descriptions", () => {
        expect(getFirstSentence("")).toBe("");
    });

    it("should return the entire input string if it does't end with '.', '!' or '?'", () => {
        const sentence = "This is the first sentence";

        expect(getFirstSentence(sentence)).toBe("This is the first sentence");
    });

    it("should correctly extract the first sentence from a description containing multiple sentences", () => {
        const sentence = "First sentence. Second sentence. Third sentence.";

        expect(getFirstSentence(sentence)).toBe("First sentence.");
    });
});
