#!/bin/sh

getsha256() {
    echo -n "$1" | sha256sum | cut -d" " -f1
}

home="/etc/config/clash/clash-zashboard"

if [ -f /tmp/ppgw.ini ]; then
    echo 1 >/etc/watch
    . /tmp/ppgw.ini 2>/dev/tty0
    secret="$clash_web_password"
    stamp=$(date +%s)$(cat /dev/urandom | tr -cd 'a-zA-Z0-9' | head -c 64)
    echo "{\"stamp\": \"$stamp\"}" >"$home/stamp.json"
    reload_touch="$home/reload.json"
    cp "$home/stamp.json" "$reload_touch"
    inotifywait -e access -e close_nowrite "$reload_touch"
    rm "$home/stamp.json"
    rm "$reload_touch"
    rm /etc/watch
    /usr/bin/ppg.sh reload
fi
