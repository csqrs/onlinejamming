# Online Jamming

This is a collection of resources/information about online jamming, i.e. platforms that enable people to play music together online in "real" time. There's a list of URLs to discussions etc. as well as documentation of stuff I've done. The focus is on enabling the activity rather than further disseminating the results. However, I'll include some discussion about streaming to public platforms. I've been meaning to write some of this up for a while, but have been pushed to get started by having to come up with a workshop for [Lawnya Vawnya](https://lawnyavawnya.com/). This workshop is a co-presentation of [The Sound Symposium](https://www.soundsymposium.com/).

## Platforms covered

* [Jitsi](https://jitsi.org/)
* [Zoom](https://zoom.us/)
* [Mumble/Murmur](https://www.mumble.info/)
* [Jack Trip](https://www.jacktrip.org/)
* [Openvidu](https://openvidu.io/)
* [Icecast](https://icecast.org/)
* [Supercollider](https://supercollider.github.io/)

## Is this really possible?

Yes, it is possible, and can be a lot of fun! But you will likely have to give in to the laws of physics and embrace the latency. And getting used to listening in this context can take some work.

The technical hurdles can be significant, though it really depends on what you want to achieve.

Something like Mumble/Murmur is quite easy to set up. But it is only audio. A cloud service like Zoom is very easy and might work well, but you have little control over some aspects, such as how far you are from the server, which has a significant effect on latency.

On the other hand, running a Jitsi service on your own server in your own town can make latency less of an issue, but it is not trivial to set up and manage.

There are a number of excellent discussions of latency, audio quality and whatnot on line, so I won't go into the details here. See the resources section below. What we will do in this workshop is try and show you what it's actually like.

## Introduction to the platforms

Many teleconference tools are capable, technically, of doing what we need, though virtually all have done very little to target music playing as a 'market'. The underlying technology of [many platforms](https://www.webrtcworld.com/webrtc-list.aspx) is [WebRTC](https://webrtc.org/), with the amazing [Opus](https://opus-codec.org/) codec for sound. Mumble/Murmur uses Opus too. But the target user base is people who talk. And this means that the default configuration does many things to the streams that make playing music hard:

* Automatic Gain Control
* Automatic Echo Cancellation
* High Pass Filter
* Noise Suppression
* Audio Processing

Thankfully there are some platforms that make disabling these relatively easy, notably Jitsi and Zoom. So we will be demonstrating these in this workshop. If we get time we will try to show some audio only, namely Mumble/Murmur. And as a demonstration of really embracing the latency, hopefully we will try some Icecast. I put Supercollider on the list because although it is not a streaming audio platform it has a client/server architecture that is incredibly open to distant shared music making.

## Teleconference platforms

### Jitsi

This is an open source platform that is very easy to use, for participants, as well as relatively easy to host yourself. It's what I landed on as my platform of choice mostly because I'm a sysadmin and have the resources to be able to host it myself, and wanted to have a platform that would be relatively easy for people with little technical skill and/or less bandwidth to use.

One of the rules of both latency and audio quality is, the more bandwidth you have the better. In fact it's often said that it's not worth trying to do this over WiFi, for example. But the Opus codec is capable of incredibly powerful adaptive encoding, which means that on the fly, it adjusts the quality of the audio stream (k/s) seamlessly, and independently for each participant. We have done some jams where at least one of the participants was on WiFi and it was fine.

In order to demonstrate the effect of how close you are to your server, however, we are going to do two short jams, one on my private server and one on the publicly available servers, hosted somewhere in the US. This will also demonstrate how to disable the above audio processing. [ Introduce the participants: [Ellen Waterman](http://www.ellenwaterman.ca/), [Michael Waterman](https://mannlichercarcano.blogspot.com/), Wallace Hammond, Craig Squires. ]

## Audio only platforms

## The takeaway

## Resources
