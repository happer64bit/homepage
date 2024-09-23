---
title: "Froop: The new static files sharing cli"
summery: Froop is a project which aim is to share the file steamlessly and securely on the network event it's private or public.
tags: ["golang"]
keywords: ["golang", "news", "programming", "cli", "command-line"]
publishedDate: 2024-09-23
---

# Froop: The new static files sharing cli

Froop is a project which aim is to share the file steamlessly and securely on the network event it's private or public.

Froop is 54.43x times faster than `python -m http.server`.

![Froop vs Python http.server Benchmarking](https://i.imgur.com/JV9bBka.png)

## Installation

```sh
go install github.com/happer64bit/froop
```

## Usage

### Start Server

```
froop serve -a <ADDRESS> -p <port>
```

#### With Auth

```
froop serve -a <ADDRESS> -p <port> --auth username:password
```

## Benchmarking

> These benchmarking result are tested by a tool called `oha`.

|  | Froop | http.server |
|---|---|---|
| Total | 22.7559s |1238.5834s |
| Fastest | 00009s | .0121s |
| Success Rate | 100.00% | 98.28% |

## Dontation

If you are looking ahead to support the development of the project, you can donate via crypto.

* TON - `UQBZXR35Z7KYeuwdqfZIDgAl6_wQxTbYuvRqT9I6CVonX0f_`
* SOLANA - `EK48PtUR2vXA7wTzUiNuUpmS6peXWWmmrqncNxFn3sL7`
* ERC20 - `0x6e47eDAdA0A25f38f2c2e3851256E455ed17A8A0`
