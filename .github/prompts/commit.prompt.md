# Git Commit & Changelog Update

Please help me commit and push my changes following our project's conventions.

**GitHub Issue Number:** [Enter your GitHub Issue number, e.g., 55]

**Instructions:**
1. Run `dotnet format Service/Orange.slnx` to format all code files in the solution according to .editorconfig rules
2. Run `npm run format` in the `Client/` directory to format all AstroJS client code files
3. Add any files changed by the formatter to the changeset
4. Review the staged changes in my workspace
5. Collect statistics using `git diff --cached --shortstat` and `git diff --cached --stat`
6. Generate a comprehensive commit message that:
   - **Header**: Follows the format: `ISSUE#[ISSUE-NUMBER]: [summary]`
   - **Body**: Includes detailed information:
     - `Closes #[ISSUE-NUMBER]` to link and close the GitHub Issue on merge
     - Statistics (files changed, lines added/deleted)
     - Modified/New/Deleted files with brief descriptions
     - Impact of changes
   - Keeps header under 72 characters
   - Uses present tense (e.g., "Add feature" not "Added feature")
   - Is clear and descriptive
7. Update the CHANGELOG.md file in the project root:
   - Add entry under the `## [Unreleased]` section
   - Format: `- [YYYY-MM-DD] ISSUE#[ISSUE-NUMBER]: [summary]`
8. Show me:
   - The proposed commit message (with header and body)
   - The CHANGELOG.md entry to add
   - The git commands to execute

**Commit Message Format:**
```
ISSUE#[number]: [One-line summary under 72 characters]

Closes #[number]

Statistics:
- Files Changed: [number]
- Lines Added: +[number]
- Lines Deleted: -[number]
- Net Change: +/-[number]

Modified Files:
- path/to/file - brief description of changes
- path/to/file - brief description of changes

New Files:
- path/to/file - purpose and description
- path/to/file - purpose and description

Deleted Files:
- path/to/file - reason for deletion

Impact:
- Key impact point 1
- Key impact point 2
- Key impact point 3
```

**Context:**
- Code formatting follows `.editorconfig` rules
- Follow coding instructions from `.github/copilot-instructions.md`
- Ensure commit message header includes Issue ticket: `ISSUE#[number]: message`
- Ensure commit message body includes `Closes #[number]` to link and auto-close the GitHub Issue on merge to the default branch
- Keep summary clear and concise
- Use present tense (e.g., "Add feature" not "Added feature")
- Include detailed body for significant changes
- For small, trivial changes, body is optional

**After I approve, execute these steps:**
1. `dotnet format Service/Orange.slnx`
2. `cd Client && npm run format && cd ..`
3. `git add .`
4. Update CHANGELOG.md
5. `git add CHANGELOG.md`
6. `git commit -m "ISSUE#[number]: [summary]" -m "Closes #[number]" -m "[body with statistics and details]"`
7. `git push`

**Note:** For multi-line commit messages, use multiple `-m` flags or prepare message in a file.