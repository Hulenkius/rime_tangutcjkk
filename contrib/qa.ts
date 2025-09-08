import fs from "node:fs";
import path from "node:path";

function main() {
  const dictPath = process.argv[2];
  if (process.argv.length !== 3) {
    console.error("Usage: node ./contrib/qa.ts ./tangutcjkk.dict.yaml");
    process.exitCode = 1;
    return;
  }
  const content = fs.readFileSync(path.resolve(dictPath), "utf-8");
  const dict = readCangjieDict(content);
  codeShouldHaveNoDuplicates(dict);
  codeShouldBeLowercaseAlphabetic(dict);
  shortShouldBeSubsequenceOfFull(dict);
}

type CangjieCode = { short: string; full: string; duplicates?: string[] };
/**
 * Reads a Cangjie dictionary file and returns a map of characters to their Cangjie codes.
 * @param dictContent Content of a Cangjie dictionary file.
 * @returns A map of characters to their Cangjie codes.
 */
function readCangjieDict(dictContent: string): Map<string, CangjieCode> {
  const dict = new Map<string, CangjieCode>();
  const lines = dictContent.split("\r\n");
  for (const line of lines) {
    const parts = line.split("\t");
    if (parts.length === 2) {
      const [char, code] = parts;
      if (code.startsWith("p")) {
        // Skip component codes
        continue;
      }
      if (dict.has(char)) {
        const entry = dict.get(char)!;
        if (entry.short !== entry.full) {
          entry.duplicates ??= [];
          entry.duplicates.push(code);
        } else {
          entry.full = code;
        }
      } else {
        dict.set(char, { short: code, full: code });
      }
    }
  }
  return dict;
}

/**
 * Checks if a string is a subsequence of another string.
 * @param sub The substring to check.
 * @param str The string to check against.
 * @returns True if `sub` is a subsequence of `str`, false otherwise.
 * @example
 * isSubsequence("abc", "aXbYcZ") // true
 * isSubsequence("abc", "acb") // false
 */
function isSubsequence(sub: string, str: string): boolean {
  let subIndex = 0;
  for (let i = 0; i < str.length && subIndex < sub.length; i++) {
    if (str[i] === sub[subIndex]) {
      subIndex++;
    }
  }
  return subIndex === sub.length;
}

/**
 * Checks if all Cangjie codes in the dictionary are lowercase alphabetic.
 * @param dict A map of characters to their Cangjie codes.
 */
function codeShouldBeLowercaseAlphabetic(dict: Map<string, CangjieCode>) {
  const codeRegex = /^[a-z]+$/;
  for (const [char, code] of dict) {
    if (!codeRegex.test(code.short)) {
      console.error(
        `Short code "${code.short}" for character ${formatUPlus(
          char
        )} "${char}" is not lowercase alphabetic`
      );
      process.exitCode = 1;
    }
    if (!codeRegex.test(code.full)) {
      console.error(
        `Full code "${code.full}" for character ${formatUPlus(
          char
        )} "${char}" is not lowercase alphabetic`
      );
      process.exitCode = 1;
    }
  }
}

function codeShouldHaveNoDuplicates(dict: Map<string, CangjieCode>) {
  for (const [char, code] of dict) {
    if (code.duplicates && code.duplicates.length > 0) {
      console.error(
        `Character ${formatUPlus(char)} "${char}" has duplicate codes: ${[
          code.short,
          code.full,
          ...code.duplicates,
        ].join(", ")}`
      );
      process.exitCode = 1;
    }
  }
}

/**
 * Checks if all short Cangjie codes in the dictionary are subsequences of their full codes.
 * @param dict A map of characters to their Cangjie codes.
 */
function shortShouldBeSubsequenceOfFull(dict: Map<string, CangjieCode>) {
  for (const [char, code] of dict) {
    if (!isSubsequence(code.short, code.full)) {
      console.error(
        `Short code "${code.short}" is not a subsequence of full code "${
          code.full
        }" for character ${formatUPlus(char)} "${char}"`
      );
      process.exitCode = 1;
    }
  }
}

/**
 * Formats a character as a Unicode code point.
 * @param char The character to format.
 * @returns The formatted Unicode code point string.
 */
function formatUPlus(char: string): string {
  return `U+${char.codePointAt(0)!.toString(16).toUpperCase()}`;
}

main();
