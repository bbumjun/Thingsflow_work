import { Octokit } from "@octokit/core";

export const personalToken = "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";

export const octokit = new Octokit({ auth: personalToken });
