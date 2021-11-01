/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRunner: 'jasmine2',
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    testMatch: [
        "<rootDir>/test/pageObject/*.test.ts" //*Parallel jest execution between two tests of pageObject*//
    ],
    bail: true,
    bail: 1

}

//*For sequential, jest -i shoud be used in package.json file in scripts tag*//
//source: jest doc --jestrunband//
//For a particular test execution = jest filename.test.ts//