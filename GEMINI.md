# Gemini Collaboration Guidelines

This document outlines the guidelines for collaborating with the Gemini CLI on the "React + Tailwind CSS Habit Tracker" project.

## 1. Tech Stack

*   **Framework:** React
*   **Styling:** Tailwind CSS
*   **Build Tool:** Vite

All generated code should be compatible with this stack.

## 2. Coding Style

*   **Components:** Use functional components with hooks (`useState`, `useEffect`, etc.).
*   **Props:** Use prop destructuring.
*   **Styling:** Use Tailwind CSS classes directly in the `className` attribute.

## 3. Commit Message Convention

Use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

*   **`feat`:** A new feature.
*   **`fix`:** A bug fix.
*   **`refactor`:** A code change that neither fixes a bug nor adds a feature.
*   **`docs`:** Documentation only changes.
*   **`style`:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
*   **`chore`:** Changes to the build process or auxiliary tools and libraries such as documentation generation.

## 4. AI Prompting Strategy

Use clear and concise prompts to instruct Gemini.

*   **Generate Component:** "Create a React functional component '[ComponentName].jsx' for 'src/components' using Tailwind. It needs..."
*   **Refactor Component:** "Refactor '[ComponentName].jsx'. It now receives..."
*   **Fix Bug:** "Fix a bug in '[ComponentName].jsx' where..."
*   **Add Feature:** "Add a new feature to '[ComponentName].jsx' that..."
*   **Style Component:** "Apply responsive design to '[ComponentName].jsx'..."
