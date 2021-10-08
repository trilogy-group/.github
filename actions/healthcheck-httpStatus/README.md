# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `url`

**Required** The url to test

## `credentials`

**Required** credentials in the format `user:password`

## Example usage

uses: trilogy-group/.github/actions/healthcheck-httpStatus@actions
with:
  url: https://www.example.com/api/v2/users
  credentials: user:password