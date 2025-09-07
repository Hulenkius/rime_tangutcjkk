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
  code_should_be_lowercase_alphabetic(dict);
  short_should_be_subsequence_of_full(dict);
}

type CangjieCode = { short: string, full: string };
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
            entry.full = code;
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
 * is_subsequence("abc", "aXbYcZ") // true
 * is_subsequence("abc", "acb") // false
 */
function is_subsequence(sub: string, str: string): boolean {
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
function code_should_be_lowercase_alphabetic(dict: Map<string, CangjieCode>) {
  const codeRegex = /^[a-z]+$/;
  for (const [char, code] of dict) {
    if (!codeRegex.test(code.short)) {
      console.error(`Short code "${code.short}" for character U+${char.codePointAt(0)!.toString(16).toUpperCase()} "${char}" is not lowercase alphabetic`);
      process.exitCode = 1;
    }
    if (!codeRegex.test(code.full)) {
      console.error(`Full code "${code.full}" for character U+${char.codePointAt(0)!.toString(16).toUpperCase()} "${char}" is not lowercase alphabetic`);
      process.exitCode = 1;
    }
  }
}

/**
 * Checks if all short Cangjie codes in the dictionary are subsequences of their full codes.
 * @param dict A map of characters to their Cangjie codes.
 */
function short_should_be_subsequence_of_full(dict: Map<string, CangjieCode>) {
  for (const [char, code] of dict) {
    if (!is_subsequence(code.short, code.full)) {
      console.error(`Short code "${code.short}" is not a subsequence of full code "${code.full}" for character U+${char.codePointAt(0)!.toString(16).toUpperCase()} "${char}"`);
      process.exitCode = 1;
    }
  }
}

main();