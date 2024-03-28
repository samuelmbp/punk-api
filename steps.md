# Extras

-   Add a beer info page (create a page with information for each beer by id)

## ASIDE

const getFirstSentence = (description: string): string => {
const regex = /^[^.!?]+[.!?]/;
const match = description.match(regex);
return match ? match[0] : description;
};

-   ^[^.!?]+[.!?] is a regular expression pattern that
    -   matches the first sentence of a string. Here's what it does:
    -   ^: Matches the start of the string.
    -   [^.!?]+: Matches one or more characters that are not periods (.), exclamation marks (!), or question marks (?), ensuring we capture all characters until the end of the sentence.
    -   [.!?]: Matches the punctuation mark (period, exclamation mark, or question mark) that ends the sentence.
-   description.match(regex) applies the regular expression pattern to the description string and returns an array of matches.
-   match[0] retrieves the first match from the array, which corresponds to the first sentence.
