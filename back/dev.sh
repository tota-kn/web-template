#!/bin/sh

DIR=$(dirname "$0")

tmux split-window -h
tmux send-keys "cd ${DIR}/../front && pnpm run dev" C-m

tmux split-window -h
tmux send-keys "cd ${DIR} && pnpm run dev:esbuild" C-m

tmux split-window -h
tmux send-keys "cd ${DIR} && pnpm run dev:tsc" C-m

tmux split-window -h
tmux send-keys "cd ${DIR} && pnpm run dev:sam" C-m

tmux split-window -h
tmux send-keys "cd ${DIR} && pnpm run dev:test" C-m

tmux select-layout tiled