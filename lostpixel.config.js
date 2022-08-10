module.exports = {
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
    pageUrl: "http://172.17.0.1:3000",
  },
  generateOnly: true,
  failOnDifference: true,
};
