/* eslint-disable no-unused-vars, no-var */

var config = {
    // Connection
    //

    hosts: {
        // XMPP domain.
        domain: 'meet.jitsi',

        // XMPP MUC domain. FIXME: use XEP-0030 to discover it.
        muc: 'muc.meet.jitsi',
    },

    // BOSH URL. FIXME: use XEP-0156 to discover it.
    bosh: '/http-bind',

    // Websocket URL
    // websocket: 'wss://meet.jitsi/xmpp-websocket',

    // The name of client node advertised in XEP-0115 'c' stanza
    clientNode: 'http://jitsi.org/jitsimeet',

    // The real JID of focus participant - can be overridden here
    focusUserJid: 'focus@auth.meet.jitsi',


    //p2pEnabled: false - forces use of server even when only two members of a meeting
    p2p: {
        enabled: false
    },
    // Testing / experimental features.
    //

    testing: {
        // P2P test mode disables automatic switching to P2P when there are 2
        // participants in the conference.
        //p2pTestMode: false
        p2pTestMode: true

    },


    // Media
    //

    // Audio

    enableNoAudioDetection: true,

    enableNoisyMicDetection: true,

    // Video

    // Desktop sharing

    // The ID of the jidesha extension for Chrome.
    desktopSharingChromeExtId: null,

    // The media sources to use when using screen sharing with the Chrome
    // extension.
    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],

    // Required version of Chrome extension
    desktopSharingChromeMinExtVersion: '0.1',

    // Recording

    // Misc

    // Default value for the channel "last N" attribute. -1 for unlimited.
    channelLastN: -1,

    // UI
    //

    // Whether to use a welcome page or not. In case it's false a random room
    // will be joined when no room is specified.
    enableWelcomePage: true,

    // If true all users without a token will be considered guests and all users
    // with token will be considered non-guests. Only guests will be allowed to
    // edit their profile.
    enableUserRolesBasedOnToken: false,

    // Stats
    //

    // Privacy
    //

    // Peer-To-Peer mode: used (if enabled) when there are just 2 participants.
    //

    p2p: {
        // Enables peer to peer mode. When enabled the system will try to
        // establish a direct connection when there are exactly 2 participants
        // in the room. If that succeeds the conference will stop sending data
        // through the JVB and use the peer to peer connection instead. When a
        // 3rd participant joins the conference will be moved back to the JVB
        // connection.
        //enabled: true,
        enabled: false,

        // Use XEP-0215 to fetch STUN and TURN servers.
        // useStunTurn: true,

        // The STUN servers that will be used in the peer to peer connections
        stunServers: [

            // { urls: 'stun:meet.jitsi:4446' },
            { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' }
        ],

        // If set to true, it will prefer to use H.264 for P2P calls (if H.264
        // is supported).
        preferH264: true

    },

    analytics: {
        // The Google Analytics Tracking ID:
        // googleAnalyticsTrackingId: 'your-tracking-id-UA-123456-1'

    },

    // Information about the jitsi-meet instance we are connecting to, including
    // the user region as seen by the server.
    deploymentInfo: {
        // shard: "shard1",
        // region: "europe",
        // userRegion: "asia"
    },

    // Local Recording
    //

    localRecording: {
    // Enables local recording.
    // Additionally, 'localrecording' (all lowercase) needs to be added to
    // TOOLBAR_BUTTONS in interface_config.js for the Local Recording
    // button to show up on the toolbar.
    //
         enabled: true,
    //

    // The recording format, can be one of 'ogg', 'flac' or 'wav'.
         format: 'flac'
    //

    },

     // Jitsi for online jamming: make these audio quality options default
     // - means we have to be careful about feedback and so on...
     stereo: true,
     disableAEC: true,
     disableAGC: true,
     disableAP: true,
     disableHPF: true,
     disableNS: true,


    // Allow all above example options to include a trailing comma and
    // prevent fear when commenting out the last value.
    makeJsonParserHappy: 'even if last key had a trailing comma'

    // no configuration value should follow this line.
};

/* eslint-enable no-unused-vars, no-var */
