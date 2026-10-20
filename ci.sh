#!/usr/bin/env bash
set -e

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
build_dir="${script_dir}/build"

mkdir -p "${build_dir}"
cd "${build_dir}"

cmake ..
cmake --build . --config Release
ctest -C Release --output-on-failure
