#!/bin/sh -l

echo "curl -o /dev/null -s -w '%{http_code}\n' --user $2 $1"
http_code=$(curl -o /dev/null -s -w "%{http_code}\n" --user $2 $1)

echo $http_code
if [ $? -ne 0 ]; then
    exit 1
fi