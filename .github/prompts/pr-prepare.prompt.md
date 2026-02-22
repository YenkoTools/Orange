# Prepare Pull Request

Generate a comprehensive PR description based on all commits in the current branch since branching from main.

**Instructions:**
1. Get current branch name: `git rev-parse --abbrev-ref HEAD`
2. Collect all commits on current branch: `git log origin/main..HEAD --oneline`
3. Get overall statistics: `git diff origin/main...HEAD --shortstat`
4. Get detailed file changes: `git diff origin/main...HEAD --stat`
5. Extract CHANGELOG.md entries for this branch (if applicable)
6. Aggregate all commit messages and changes
7. Generate comprehensive PR description using the template structure

**What to Include:**

1. **Summary**: One-line overview of the PR's purpose
2. **Statistics**: Aggregate changes across all commits
   - Total files changed
   - Total lines added
   - Total lines deleted
   - Net change
3. **Commits**: List all commits with AB# references
4. **Changes Overview**: Categorize changes by type:
   - Modified files with descriptions
   - New files with purposes
   - Deleted files with reasons
5. **Impact**: Overall impact of all changes in the branch
6. **Testing**: What testing has been performed
7. **Checklist**: Standard PR review checklist

**Output Format:**

Use the structure from `.github/pull_request_template.md` and fill in with actual data from the branch.

**Context:**
- This is for project: SeaHawk
- https://github.com/YenkoTools/SeaHawk
- Follow conventions from `.github/copilot-instructions.md`
- Aggregate information from all commits in the branch
- Focus on the overall story of what the branch accomplishes

**Note:** This generates a description for the entire PR, not just a single commit. It should tell the complete story of what changed and why.
