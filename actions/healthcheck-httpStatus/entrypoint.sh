#!/bin/sh -l

http_code=$(curl -o /dev/null -s -w "%{http_code}\n" --user $2 $1)

echo $http_code
if [ $ret -ne 0 ]; then
    exit 1
fi