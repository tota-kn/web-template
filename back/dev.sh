#!/bin/sh

tmux split-window -h
tmux send-keys "pnpm run dev:build" C-m

tmux split-window -h
tmux send-keys "pnpm run dev:sam" C-m

tmux split-window -h
tmux send-keys "pnpm run dev:test" C-m

tmux select-layout tiled