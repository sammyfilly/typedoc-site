import { readFile, writeFile } from "fs/promises";

const inPath = "typedoc/CHANGELOG.md";
const outPath = "guides/changelog.md";

const changelog = await readFile(inPath, "utf-8");

const heading = `
---
layout: "guide"
tags: guide
title: "Changelog"
menuOrder: 100
---
`.trim();

const page = changelog
    .replace("# Unreleased", heading)
    .replace(
        /#(\d+)/g,
        "[#$1](https://github.com/TypeStrong/typedoc/issues/$1)"
    );

await writeFile(outPath, page);
