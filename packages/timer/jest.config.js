module.exports = {
    roots: [
        "<rootDir>"
    ],
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
}
