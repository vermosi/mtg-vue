#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build; push-dir --dir=dist --branch=gh-pages --cleanup