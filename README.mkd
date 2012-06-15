# philipbjorge.com

These are the source files for the new version of my [personal web site][mysite].

## Licensing
Original writing and images are released under the [Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License][cc].

Otherwise, all other code and graphics should retain their respective licenses. 

### Final Notes on Licensing
I'm attempting to act in good faith with regards to all licensing issues. Please contact me with questions or concerns and I will do my best to resolve them.

## "Building" My Site

### Download the source

Using git, clone this repository onto your own system:

    git clone https://github.com/philipbjorge/philipbjorge.com.git

### Installation

This site uses the [wok static website generator][woksite] created by [Mike Cooper][mikesite]. You can install it on your system using [pip][pip]:

    sudo pip install wok

### Generating the site

Make sure you're in the root project directory, and run wok:

    wok

By default, files will be generated in the `output` directory in the project root. Point your web server at the directory, and you're set!

Alternatively, you can use wok's built-in web server:

    wok --server

[mysite]: http://www.philipbjorge.com
[woksite]: https://github.com/mythmon/wok
[mikesite]: https://github.com/mythmon
[pip]: http://pypi.python.org/pypi/pip
[cc]: http://creativecommons.org/licenses/by-nc-nd/3.0/