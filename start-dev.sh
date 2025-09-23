#!/bin/sh
if [ -f yarn.lock ]; then
  exec yarn dev
elif [ -f package-lock.json ]; then
  exec npm run dev
elif [ -f pnpm-lock.yaml ]; then
  exec pnpm dev
else
  exec npm run dev
fi
