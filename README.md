# Luna: Your AI Coding Assistant

Luna is a VS Code extension designed to enhance your coding experience with AI-powered assistance. It provides features such as code completion, code generation, code explanation, and more, all within your favorite editor.

<div align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=YOUR_EXTENSION_ID" target="_blank"><img src="https://img.shields.io/badge/Download%20on%20VS%20Marketplace-blue?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="Download on VS Marketplace"></a>
  <a href="https://github.com/YOUR_GITHUB_ORG/YOUR_REPO/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop" target="_blank"><img src="https://img.shields.io/badge/Feature%20Requests-yellow?style=for-the-badge" alt="Feature Requests"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=YOUR_EXTENSION_ID&ssr=false#review-details" target="_blank"><img src="https://img.shields.io/badge/Rate%20%26%20Review-green?style=for-the-badge" alt="Rate & Review"></a>
  <a href="YOUR_DOCUMENTATION_LINK" target="_blank"><img src="https://img.shields.io/badge/Documentation-6B46C1?style=for-the-badge&logo=readthedocs&logoColor=white" alt="Documentation"></a>
</div>

## What Can Luna Co-Pilot Do?

- **🚀 Generate Code** from natural language descriptions
- **🔧 Refactor & Debug** existing code
- **📝 Write & Update** documentation
- **🤔 Answer Questions** about your codebase
- **🔄 Automate** repetitive tasks
- **🏗️ Create** new files and projects

## Installation

### From VS Code Marketplace

1.  Open Visual Studio Code.
2.  Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3.  Search for "Luna Co-Pilot".
4.  Click "Install".

### From Source

1.  Clone the repository:

    ```bash
    git clone https://github.com/Luna-Base-AI/luna-co-pilot.git
    ```

    Make sure you have [Node.js](https://nodejs.org/) and npm installed.

2.  Open the project in VS Code.
3.  Run `npm install` to install the dependencies.
4.  Press `F5` to start the extension in development mode.

## Usage

Once installed, Luna automatically provides code suggestions and assistance as you type. You can also use the following commands:

- `Luna: Explain Code`: Explains the selected code block. (Run `Luna Explain` in command palette)
- `Luna: Generate Code`: Generates code based on a description. (Run `Luna Generate` in command palette)
- `Luna: Start Task`: Starts a predefined coding task. (Run `Luna Task` in command palette)

Refer to the extension settings for a full list of available commands and configurations.

## Configuration

Luna can be configured through the VS Code settings (File > Preferences > Settings). Some of the available options include:

- API Provider: Choose your preferred AI provider (e.g., Anthropic, Gemini).
- API Key: Set your API key for the selected provider.
- Temperature: Adjust the temperature for code generation.
- Sliding Window: Configure the sliding window for context tracking.

## Contributing

Contributions are welcome! We encourage you to contribute to Luna and help make it even better.

### Contributing Guidelines

- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Write clear and concise commit messages.
- Test your changes thoroughly.
- Adhere to the code style guidelines used in the project.

### Code Style

- Use consistent indentation (e.g., 2 spaces).
- Write clear and concise code.
- Follow the principles of clean code.

### Testing

- Write unit tests for your changes.
- Ensure that all tests pass before submitting a pull request.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all. Please review our [Code of Conduct](link-to-code-of-conduct).

## FAQ

**Q: How do I configure Luna to use a specific AI provider?**

A: You can configure the AI provider in the VS Code settings (File > Preferences > Settings). Search for "Luna" to find the available options.

**Q: How do I generate code using Luna?**

A: Use the `Luna: Generate Code` command from the command palette (Ctrl+Shift+P or Cmd+Shift+P). Enter a description of the code you want to generate, and Luna will generate the code for you.

## Roadmap

- Implement support for more AI providers.
- Add more code generation templates.
- Improve the code explanation feature.
- Integrate with more coding tools and services.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

Luna uses the following libraries and resources:

- [esbuild](https://esbuild.github.io/): For fast builds.
- [TypeScript](https://www.typescriptlang.org/): For type-safe development.
- [VS Code Extension API](https://code.visualstudio.com/api): For extending VS Code functionality.
- [OpenRouter](https://openrouter.ai/): For routing requests to different AI providers.

## Support

If you encounter any issues or have questions, please:

- Check the [FAQ](link-to-faq).
- Open an issue on [GitHub](link-to-github-issues).
- Contact us at [support@example.com](mailto:support@example.com).

---
