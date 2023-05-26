import { render } from "@testing-library/react"
import React from "react"

import { describe, it } from "vitest"

import Select from "./Select"

describe("Select", () => {
  it("should render", () => {
    render(<Select />)
  })
})
