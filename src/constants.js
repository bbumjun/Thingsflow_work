import { Octokit } from "@octokit/core";

export const personalToken = "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";

export const octokit = new Octokit({ auth: personalToken });
