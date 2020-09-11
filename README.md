# Online Jamming

This is a collection of resources/information about online jamming, i.e. platforms that enable people to play music together online in "real" time. There's a list of URLs to discussions etc. as well as documentation of stuff I've done. The focus is on enabling the activity rather than further diseminating the results. However, I'll include some discussion about streaming to public platforms.

## Platforms covered

* Jitsi
* Zoom
* Mumble/Murmur
* Jack Trip
* Openvidu
* Icecast
* Supercolider

## Is this really possible?

Yes, it is possible, and can be a lot of fun! But you will likely have to give in to the laws of physics and embrace the latency.

The technical hurdles can be significant, though it really depends on what you want to achieve.

Something like Mumble/Murmer is quite easy to set up. But it is only audio. A cloud service like Zoom is very easy and might work well, but you have little control over some aspects, such as how far you are from the server, which has a significant effect on latency.

On the other hand, running a Jitsi service on your own server in your own town can make latency less of an issue, but it is not trivial to set up and manage.

## Introduction to the platforms

Many teleconference tools are capable, technically, of doing what we need, though virtually all have done very little to target music playing as a 'market'. The underlying technology of many platforms is WebRTC, with the amazing Opus codec for sound. Mumble/Murmur uses Opus too. But the target user base is people who talk. And this means
