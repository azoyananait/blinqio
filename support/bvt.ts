import { createBlinqTest } from "@dev-blinq/bvt-playwright-js";

export const test = createBlinqTest({
  environmentsFilePath: new URL("../config/environments.json", import.meta.url),
  testDataSeedFilePath: new URL("../data/test-data.json", import.meta.url),
});

// Re-exported so spec files can import every Blinq helper from a single path.
export { toMatcherValue } from "@dev-blinq/bvt-playwright-js";
