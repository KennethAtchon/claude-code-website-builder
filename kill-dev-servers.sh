#!/bin/bash

# Script to kill development servers on common ports and Vite processes
echo "🔍 Searching for and terminating development servers..."

# Ports to check
ports=(3000 3001 3002)

# Function to kill processes by port
kill_by_port() {
    local port=$1
    echo "Checking port $port..."
    
    # Find processes using the port
    pids=$(lsof -ti:$port 2>/dev/null)
    
    if [ -n "$pids" ]; then
        echo "🔴 Killing processes on port $port: $pids"
        echo $pids | xargs kill -9 2>/dev/null
    else
        echo "✅ No processes found on port $port"
    fi
}

# Kill processes on specified ports
for port in "${ports[@]}"; do
    kill_by_port $port
done

# Kill Vite processes by name
echo ""
echo "🔍 Searching for Vite processes..."

# Find node processes that might be running Vite
vite_pids=$(ps aux | grep -E "(vite|dev)" | grep -v grep | awk '{print $2}')

if [ -n "$vite_pids" ]; then
    echo "🔴 Killing Vite processes: $vite_pids"
    echo $vite_pids | xargs kill -9 2>/dev/null
else
    echo "✅ No Vite processes found"
fi

# Also check for any remaining node processes on development ports
echo ""
echo "🔍 Final cleanup - checking for any remaining Node.js processes on dev ports..."

for port in "${ports[@]}"; do
    remaining_pids=$(lsof -ti:$port 2>/dev/null)
    if [ -n "$remaining_pids" ]; then
        echo "🔴 Force killing remaining processes on port $port: $remaining_pids"
        echo $remaining_pids | xargs kill -9 2>/dev/null
    fi
done

echo ""
echo "✅ Development server cleanup complete!"