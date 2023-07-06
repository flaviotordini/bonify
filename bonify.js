const fs = require("fs");

// B0|_|)r1|\| \/3((|-|10 (0|V|u|\|1s74 |V|3r|)0s0
const map = {
    a: ["/\\", "4"],
    b: "|3",
    c: "(",
    d: "|)",
    e: "3",
    f: "|=",
    h: "|-|",
    i: "1",
    l: "|_",
    m: "|V|",
    n: "|\\|",
    o: "0",
    p: "|°",
    s: "5",
    v: "\\/",
};

var argv = require("minimist")(process.argv.slice(2));

function getText(argv) {
    let text;
    const filename = argv.f;
    if (filename) {
        text = fs.readFileSync(filename, "utf-8");
    } else text = argv.t;
    return text;
}

function bonify(text) {
    const chars = text.split("");
    let bonifiedText = "";
    for (const char of chars) {
        const replacements = map[char.toLowerCase()];
        if (replacements) {
            const useReplacement = Math.random() > 0.333;
            if (useReplacement) {
                if (typeof replacements === "string")
                    bonifiedText += replacements;
                else {
                    bonifiedText +=
                        replacements[
                            Math.floor(Math.random() * replacements.length)
                        ];
                }
            } else bonifiedText += char;
        } else bonifiedText += char;
    }
    return bonifiedText;
}

const text = getText(argv);
const bonifiedText = bonify(text);
console.log(bonifiedText);
