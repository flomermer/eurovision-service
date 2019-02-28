define({ "api": [
  {
    "type": "get",
    "url": "/flags",
    "title": "/flags",
    "description": "<p>get the best eurovision winner &amp; host.</p>",
    "group": "Flags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "get",
            "description": "<p>all flags images</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  Albenia:    \"______.png\",\n  Australia:  \"______.png\",\n  ....\n  Serbia:     \"______.png\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apidoc.js",
    "groupTitle": "Flags",
    "name": "GetFlags"
  },
  {
    "type": "get",
    "url": "/flags/participated/:year",
    "title": "/flags/participated/:year",
    "description": "<p>get the eurovision participated countries on specific year</p>",
    "group": "Flags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "get",
            "description": "<p>all countries participated on specific year</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n[\n  {country: \"Albenia\"}\n  {country: \"Australia\"}\n  ....\n  {country: \"Serbia\"}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apidoc.js",
    "groupTitle": "Flags",
    "name": "GetFlagsParticipatedYear"
  },
  {
    "type": "get",
    "url": "/points/:year/:dir/:country",
    "title": "/points",
    "description": "<p>get points from|to country on specific year|all history. <br/> example: points/2018/to/israel</p>",
    "group": "Points",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>get points of specific year. if year&gt;thisYear: get history points.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dir",
            "description": "<p>possible values: &quot;to&quot;|&quot;from&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>name of country to get points to\\from.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/points/2018/to/israel"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apidoc.js",
    "groupTitle": "Points",
    "name": "GetPointsYearDirCountry"
  },
  {
    "type": "get",
    "url": "/formula/:year",
    "title": "/formula",
    "description": "<p>year &lt; thisYear: get eurovision winner song's details on specific year <br/> year &gt; thisYear: get eurovision winners song's details over history</p>",
    "group": "SongDetails",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "get",
            "description": "<p>winner song's statistics.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response formula/2018:",
          "content": "    HTTP 200 OK\n{\n   \"date\": \"12 May\",\n   \"host_city\": \" Lisbon\",\n   \"winner\": \"Israel\",\n   \"song\": {\n       \"_id\": \"5c14e5b4bf2c158609fa7525\",\n       \"name\": \"Toy\",\n       \"id\": \"6n2eIfLj0wOOUkUfNmYzlh\",\n       \"artist\": [\n           \"Netta\"\n       ],\n       \"date\": \"2018-05-23\",\n       \"key\": \"D#\",\n       \"genres\": [\n           [\n               \"eurovision\",\n               \"israeli pop\"\n           ]\n       ],\n       \"language\": \"english\"\n   },\n   \"performer\": \"Netta\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apidoc.js",
    "groupTitle": "SongDetails",
    "name": "GetFormulaYear"
  },
  {
    "type": "get",
    "url": "/bff",
    "title": "/bff",
    "description": "<p>get top 3 BFF countries</p>",
    "group": "Statistics",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "get",
            "description": "<p>object of top 3 BFFs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  1: ['country','country'],\n  2: ['country','country'],\n  3: ['country','country']\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apidoc.js",
    "groupTitle": "Statistics",
    "name": "GetBff"
  },
  {
    "type": "get",
    "url": "/historyWinner",
    "title": "/historyWinner",
    "description": "<p>get the best eurovision winner &amp; host.</p>",
    "group": "Statistics",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "details",
            "description": "<p>about best eurovision winner &amp; host</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  historyWinner: {country: 'Ireland', wins: 7}\n  historyHost:   {city: 'Dublin', times: 6}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apidoc.js",
    "groupTitle": "Statistics",
    "name": "GetHistorywinner"
  }
] });
