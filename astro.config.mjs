import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
  site: isGitHubPages
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "https://www.stmaryhenbury.org.uk",
  base: isGitHubPages && repoName ? `/${repoName}` : "/",
  integrations: [tailwind()],
});
