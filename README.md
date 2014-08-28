USOpen-Streaming-UI
===================

Resize the US Open LIVE streaming flash player.

I am a tennis fan, and while I appreciate the efforts of the US Open to provide quality live streams of the event, they use a pop out window that cannot easily be resized. 
The provided UI supports fullscreen, but I have been having issues using this with my ChromeCast.

The following resolutions are supported:
  * 1024 x 576
  * 1280 x 720
  * 1920 x 1080

If you'd like to see more resolutions provided, please create a ticket. 

## Usage 
  * Install [node.js](http://www.nodejs.org/) 
  * Download the 0.1.0 release and unzip into a directory.
  * Open a CLI(bash/powershell/cmd.exe etc.) and change your working directory to the one referenced above.
  * Run `node index.js`
  * Open your browser to [`http://localhost:5050/`](http://localhost:5050/)
  
## Note
All this does is provide an interface to send different flashvars to the SWF residing on the US Open's server.
