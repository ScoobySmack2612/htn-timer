module.exports = {
    roots: [
        "<rootDir>"
    ],
    testMatch: [
        "__test__/**/*.+(ts|tsx)",
        "**/?(*.)+(test).+(ts|tsx)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    }
}
