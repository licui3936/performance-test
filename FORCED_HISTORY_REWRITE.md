# Forced History Rewrite — Important

On 2026-01-30 this repository had large `node_modules` contents (including Electron binaries) removed from history using BFG and the cleaned history was force-pushed to `origin/main`.

What changed
- All `node_modules` folders were removed from the git history to eliminate files exceeding GitHub's 100 MB limit.

Required actions for other clones
- If you have a local clone of this repo, DO NOT try to merge or rebase the old history.
- Recommended (safe) steps to sync your clone:

```bash
# Option A — reclone (recommended)
rm -rf <your-local-clone>
git clone https://github.com/licui3936/performance-test.git

# Option B — update existing clone (danger: discards local commits not pushed)
git fetch origin
git reset --hard origin/main
```

Notes
- This rewrite is destructive to history. Any commits referencing the deleted blobs will change SHA-1 ids.
- If you need any files preserved that were removed, let the maintainer know before resetting.

Maintainer: repo owner
Date: 2026-01-30
