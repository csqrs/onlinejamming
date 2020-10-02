# Material relevant to Jitsi technical things.

See [ Jitsi in a container ](https://github.com/jitsi/docker-jitsi-meet) for the easiest way to run your own server. I use 'podman' on CentOS 8, instead of Docker, and that requires some minor tweaks. The config in this directory has audio processing disabled, p2p disabled, local recording enabled, and most comments and whatnot stripped. The original version gets created when you follow [ these ](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker) instructions and run the 'docker-compose' command for the first time.

`jitsi-config.js` becomes `/some/dir/.jitsi-meet-cfg/web/config.js` in your installation location.
