export const config = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  pageShots: {
    pages: [
      { path: "/a", name: "a", id: "a" },
      { path: "/b", name: "b", id: "b" },
      { path: "/c", name: "c", id: "c" },
      { path: "/d", name: "d", id: "d" },
    ],
    pageUrl: "http://localhost:3000",
  },
  generateOnly: true,
  failOnDifference: true,
};
