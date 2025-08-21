#!/bin/bash

# Docker run script for website projects
# Usage: ./docker-run.sh <website-name> [dev]
# Example: ./docker-run.sh main
# Example: ./docker-run.sh colorcraft dev

if [ -z "$1" ]; then
    echo "Usage: $0 <website-name> [dev]"
    echo "Available websites:"
    ls -1 ../websites/
    exit 1
fi

WEBSITE_NAME=$1
WEBSITE_PATH="../websites/$WEBSITE_NAME"
MODE=${2:-prod}

# Check if website directory exists
if [ ! -d "$WEBSITE_PATH" ]; then
    echo "Error: Website '$WEBSITE_NAME' not found in websites/ directory"
    echo "Available websites:"
    ls -1 ../websites/
    exit 1
fi

echo "Running website: $WEBSITE_NAME"
echo "Path: $WEBSITE_PATH"
echo "Mode: $MODE"

if [ "$MODE" = "dev" ]; then
    echo "Starting in development mode..."
    WEBSITE_PATH=$WEBSITE_PATH docker-compose --profile dev up website-dev --build
else
    echo "Starting in production mode..."
    WEBSITE_PATH=$WEBSITE_PATH docker-compose up website --build
fi