#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PIDS=()

cleanup() {
  for pid in "${PIDS[@]:-}"; do
    if kill -0 "$pid" >/dev/null 2>&1; then
      kill "$pid" >/dev/null 2>&1 || true
    fi
  done
}

wait_for_remote() {
  local url="$1"
  local name="$2"

  for _ in {1..60}; do
    if curl -sf "$url" >/dev/null 2>&1; then
      return 0
    fi

    sleep 1
  done

  echo "Timed out waiting for ${name} at ${url}" >&2
  exit 1
}

trap cleanup EXIT INT TERM

npm --prefix "$ROOT_DIR/apps/profile-react" run serve:federation &
PIDS+=("$!")

npm --prefix "$ROOT_DIR/apps/blog-vue" run serve:federation &
PIDS+=("$!")

wait_for_remote "http://localhost:5174/assets/remoteEntry.js" "profile remote"
wait_for_remote "http://localhost:5175/assets/remoteEntry.js" "blog remote"

npm --prefix "$ROOT_DIR/apps/host" run dev &
PIDS+=("$!")

wait -n "${PIDS[@]}"
