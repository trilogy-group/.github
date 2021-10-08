#!/bin/sh -l

set -e
set -o pipefail
echo ">>> Running Healthcheck command"
echo ""
bash -c "set -e;  set -o pipefail; curl -o /dev/null -s -w "%{http_code}\n" --user $2 $1"