import { setProjectAnnotations } from "@storybook/experimental-nextjs-vite"
import { beforeAll } from "vitest"

import * as projectAnnotations from "./preview"

// This is an important step to apply the right configuration when testing your stories.
// More detail at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations])

beforeAll(project.beforeAll)
