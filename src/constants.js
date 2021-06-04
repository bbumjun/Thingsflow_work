import { Octokit } from "@octokit/core";

export const personalToken = "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";

export const octokit = new Octokit({ auth: personalToken });
