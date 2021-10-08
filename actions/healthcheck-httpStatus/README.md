# healthcheck-httpStatus

This action checks the URL endpoint.

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