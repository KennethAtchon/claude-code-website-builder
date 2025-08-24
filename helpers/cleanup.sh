#!/bin/bash

# Script to clean node_modules and .next directories from all subfolders
# Run from anywhere - it will look in the parent directory of /helpers

# Get the directory containing this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Go to parent directory (root of the project)
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "Cleaning node_modules and .next directories in: $ROOT_DIR"
echo "================================================"

# Find and remove node_modules directories
echo "Removing node_modules directories..."
find "$ROOT_DIR" -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true

# Find and remove .next directories  
echo "Removing .next directories..."
find "$ROOT_DIR" -name ".next" -type d -exec rm -rf {} + 2>/dev/null || true

echo "Cleanup complete!"