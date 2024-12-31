#!/bin/sh

tmux split-window -h
tmux send-keys "pnpm run dev:esbuild" C-m

tmux split-window -h
tmux send-keys "pnpm run dev:tsc" C-m

tmux split-window -h
tmux send-keys "pnpm run dev:sam" C-m

tmux split-window -h
tmux send-keys "pnpm run dev:test" C-m

tmux select-layout tiled