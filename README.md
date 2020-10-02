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

[ Introduce the participants: [Ellen Waterman](http://www.ellenwaterman.ca/), [Michael Waterman](https://mannlichercarcano.blogspot.com/), Wallace Hammond, Craig Squires. ]

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

One of the rules of both latency and audio quality is, the more bandwidth you have the better. In fact it's often said that it's not worth trying to do this over WiFi, for example. But the Opus codec is capable of incredibly powerful adaptive encoding, which means that on the fly, it adjusts the quality of the audio stream (kb/s) seamlessly, and independently for each participant. We have done some jams where at least one of the participants was on WiFi and it was fine.

In order to demonstrate the effect of how close you are to your server, however, we are going to do three short jams, one on my private server, which has the processing turned off by default, and two on the publicly available servers, hosted somewhere in the US, one with the default processing enabled and then with it disabled. This will also demonstrate how to disable the above audio processing in Jitsi.

NOTE: almost none of these platforms have mixing facilities. That is, there is no way, e.g., for one of the participants to have control over the audio levels of the other particpants. Jack Trip is a huge and notable exception to this. More on that shortly. But this lack means all participants must:

* be able to hear themselves in the application audio, not just physically (headphones)
* listen and adjust their own volume so that they can hear everyone

[ How to disable audio processing in Jitsi (from April 2020) ](https://community.jitsi.org/t/higher-audio-quality/31441)

Create a meeting, but copy and paste the following after the name of the meeting:

`#config.p2p.enabled=false&config.disableAP=true&config.disableAEC=true&config.disableNS=true&config.disableAGC=true&config.disableHPF=true&config.stereo=true`

Note: you cannot type this into the meeting creation box. It won't let you. So you have to put the whole string in the URL box:

`https://meet.jit.si/ThisIsMyCoolMusicMeeting#config.p2p.enabled=false&config.disableAP=true&config.disableAEC=true&config.disableNS=true&config.disableAGC=true&config.disableHPF=true&config.stereo=true`

It's a bit awkward, but it works. On my server I disable all these in the server configuration file, a copy of which is available in the Jitsi directory of this repository.

Recording what you do in Jitsi is complicated. I don't run the standard recording facility. I do enable the 'local recording' feature, which allows recorging at the site of each participant, just the sound of that participant. You then have to get those files in one place. But they are in sync, so you can mix after the fact. What we do these days is run [ OBS ](https://obsproject.com/) and record only. The results are remarkably good!

### Zoom

This is a comercial package/platform, though it has a generous free layer too. Ellen uses this alot for her online jamming. So she is going to lead us in this example meeing.

When I started researching how to do this back in March/April 2020, Zoom was the only widely available teleconference package that had the ability to turn off audio processing easily, which made it very popular. The company has responded very well to this, and has enhanced this aspect of the software considerably.

## Audio only platforms

### Jack Trip

This is the grand daddy of online music making. It is an amazing platform, coming out of CCRMA at Stanford, and has been on the go for years. However, it is not easy to set up and does require significant bandwidth, e.g. institutional grade.

* peer to peer
* full 'CD' quality audio

When I started researching this in the Spring of 2020, this was still true. However, very recently a project has emerged whose goal is to make Jack Trip "accessible to the masses". It's still in Beta. But you should definitely keep an eye on those developments.

### Mumble/Murmur

This is a powerful online chat platform for gamers. It's primary purpose is to be an "back channel" for teams who are playing online games, so they can talk to each other and coordinate their activities. You know how fast things happen in games. Hence this platform is highly optimized for low latency. It uses the Opus codec and is peer to peer. I have not had a chance to realy work with this much. But it is really promising for music, if you are willing to work with audio only.

### Icecast/Shoutcast

If you have ever listened to online streaming radio, this is what you are using. The server hosts web links that function like pipes that stream audio from the source to the destination. In general the server does very little processing and functions mostly as a hub. The issue for using this for jamming is latency.

* Get a streaming tool
   * [ Butt ](https://danielnoethen.de/butt/)
   * [ Liquid Soap ](https://www.liquidsoap.info/)
* Set up a server ([ Icecast ](https://icecast.org/) or [ Shoutcast ](https://www.shoutcast.com/))
   * Or find one that will host your streams, like a community radio station.
* Get someone else also to set up a stream to some server, doesn't have to be the same one.
* Open your partner's stream in your browser
* Jam along!

You can use OBS to mix multiple streams. Real radio stations do just that.

The drawback: there can be several seconds, up to e.g. 15, between when you play and when the stream arrives at its destination. However, this is really the grand daddy: Michael and Mannlicher Carcano have been doing this for decades...

### SuperCollider

This is a computer music platform beloved of the "live coding" movement. The thing that makes it relevant here is that it has a client/server architecture. You can run a server on one machine and connect to it from other computers as clients, and these sets of instructions can be generated and mixed on the server. You aren't actually streaming audio, but instructions to the DSP engine on the server about what sound to produce.

## The takeaway

* Embrace the latency!
* Listen: make sure you can hear everyone in your headphones/speakers and adjust your own volume.

Here in St. John's we haven't had much trouble with latency, using our local server. However, the lack of mixing facilites has been a challenge.

## Resources
