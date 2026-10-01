# Expo Product Explorer

A small Expo product catalogue with live text search and category filters. The project was scaffolded with the blank JavaScript template for Expo SDK 57.

## Run locally

```sh
npm ci
npx expo start
```

Install Expo Go on a phone and scan the QR code shown by Expo CLI, or use `npx expo start --android` with an Android emulator. Replace `Your Name` and `Your Roll No.` in `App.js` with your own assignment details before capturing screenshots.

## Expo MCP with Codex

Expo's official remote MCP endpoint is `https://mcp.expo.dev/mcp`. With Codex installed, run these commands from a terminal:

```sh
codex mcp add expo --url https://mcp.expo.dev/mcp
codex mcp login expo
```

Complete Expo OAuth in the browser, open Codex from this project directory, and ask it to inspect `package.json` and report the Expo SDK version. Official guides: [Expo MCP](https://docs.expo.dev/mcp/) and [Codex and Expo](https://docs.expo.dev/agents/codex/).

## Continuous integration

The GitHub Actions workflow in `.github/workflows/expo-ci.yml` runs `npm ci` and `npx expo-doctor@latest` on pushes to `main` or `feature/products` and on pull requests to `main`.

## Submission captures

Put your own project-folder, Expo QR, running mobile app, and successful GitHub Actions screenshots in `Screenshot/` using the filenames listed in `Screenshot/README.md`. Also record and add your own project video (30 seconds maximum); this workspace cannot make a genuine recording of your phone or your GitHub account.