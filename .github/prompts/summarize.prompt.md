# Summarize Changes Since Last Commit

Please analyze and summarize all unstaged and staged changes in my workspace.

**Instructions:**
1. Review all current changes (staged and unstaged)
2. Collect statistics using `git diff --shortstat` and `git diff --cached --shortstat`
3. Generate a comprehensive summary that includes:
   - **Statistics**: Files changed, lines added, lines deleted, net change
   - **Overview**: Brief description of the overall changes
   - **Deleted Files**: List of removed files with reason
   - **Modified Files**: List of modified files with brief descriptions of changes
   - **New Files**: List of new files created
   - **Impact**: Bullet points describing the impact/significance of changes
4. Format the summary in a way that's suitable for use as a commit message
5. Use present tense (e.g., "Add feature" not "Added feature")

**Summary Format:**
```
[One-line summary of the changes]

### Statistics
- Files Changed: [number]
- Lines Added: [+number]
- Lines Deleted: [-number]
- Net Change: [+/- number]

### Deleted Files
- File path - reason for deletion

### Modified Files
- File path - what changed

### New Files
- File path - purpose

### Impact
- Bullet point about impact
```

**Output:**
Provide the summary in a format I can easily copy-paste into my commit message. Focus on clarity and conciseness.

**Context:**
- This is for project: SeaHawk
- https://github.com/YenkoTools/SeaHawk
- Follow conventions from `.github/copilot-instructions.md`
- Provide sources and references to specific files/line numbers when relevant
