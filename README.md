# ArtShop v1 Backend


## Installation
```bash
cd artshop-v1-backend
npm install

## Démarrage du serveur  de développement
npm run dev

## Démarrage des tests
npm run test
```

# ejs

[Read the ejs doc](https://ejs.co/#install)


# curl --json
```plain
 --json <data>
              (HTTP) Sends the specified JSON data in a POST request to the
              HTTP server. --json works as a shortcut for passing on these
              three options:

              --data [arg]
              --header "Content-Type: application/json"
              --header "Accept: application/json"

              There is no verification that the passed in data is actual JSON
              or that the syntax is correct.

              If you start the data with the letter @, the rest should be a file name to read the data from, or a single dash (-) if you
              want curl to read the data from stdin. Posting data from a file
              named 'foobar' would thus be done with --json @foobar and to instead read the data from stdin, use --json @-.

              If this option is used more than once on the same command line,
              the additional data pieces are concatenated to the previous
              before sending.

              The headers this option sets can be overridden with -H, --header
              as usual.

              --json can be used several times in a command line

              Examples:
               curl --json '{ "drink": "coffe" }' https://example.com
               curl --json '{ "drink":' --json ' "coffe" }' https://example.com
               curl --json @prepared https://example.com
               curl --json @- https://example.com < json.txt

````

# curl --junk-session-cookies

```plain
-j, --junk-session-cookies
              (HTTP) When curl is told to read cookies from a given file, this
              option makes it discard all "session cookies". This has the same
              effect as if a new session is started. Typical browsers discard
              session cookies when they are closed down.

              Providing --junk-session-cookies multiple times has no extra
              effect.  Disable it again with --no-junk-session-cookies.

              Example:
               curl --junk-session-cookies -b cookies.txt https://example.com

              See also -b, --cookie and -c, --cookie-jar.
```

