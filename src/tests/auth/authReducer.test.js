import authReducer from "../../auth/authReducer.js";

describe("Tests on authReducer", () => {
  test("Should return the default state", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });
});
