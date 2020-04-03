const themeConfig = {
  showDarkModeSwitch: false,
  fonts: {
    body: '"HelsinkiGrotesk", Helvetica, Arial, MS Gothic, Meiryo, Osaka',
    heading: '"HelsinkiGrotesk", Helvetica, Arial, MS Gothic, Meiryo, Osaka',
    monospace: "Menlo, monospace"
  }
};

const menu = [
  "Helsinki Developer Portal",
  {
    name: "APIs",
  },
  "Best practices",
];

export default {
  dest: "/public",
  public: "/static",
  typescript: true,
  files: "docs/**/*.{md,markdown,mdx}",
  title: "Helsinki Developer Portal",
  themeConfig,
  menu
};
