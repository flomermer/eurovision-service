/**

 * @api {get} /points/:year/:dir/:country /points
 * @apiDescription get points from|to country on specific year|all history. <br/> example: points/2018/to/israel
 * @apiGroup Points
 * @apiParam  {Number}  year      get points of specific year. if year>thisYear: get history points.
 * @apiParam  {String}  dir       possible values: "to"|"from".
 * @apiParam  {String}  country   name of country to get points to\from.

 * @apiSampleRequest /points/2018/to/israel

 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

 /**
  * @api {get} /bff /bff
  * @apiDescription get top 3 BFF countries
  * @apiGroup Statistics
  * @apiSuccess {Object} get object of top 3 BFFs

  * @apiSuccessExample {json} Success-Response:
  *     HTTP 200 OK
  *     {
  *       1: ['country','country'],
  *       2: ['country','country'],
  *       3: ['country','country']
  *     }
  * @apiErrorExample {json} List error
  *    HTTP/1.1 500 Internal Server Error
  */

  /**
   * @api {get} /historyWinner /historyWinner
   * @apiDescription get the best eurovision winner & host.
   * @apiGroup Statistics
   * @apiSuccess {Object} details about best eurovision winner & host

   * @apiSuccessExample {json} Success-Response:
   *     HTTP 200 OK
   *     {
   *       historyWinner: {country: 'Ireland', wins: 7}
   *       historyHost:   {city: 'Dublin', times: 6}
   *     }
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */

   /**
    * @api {get} /flags /flags
    * @apiDescription get the best eurovision winner & host.
    * @apiGroup Flags
    * @apiSuccess {Object} get all flags images

    * @apiSuccessExample {json} Success-Response:
    *     HTTP 200 OK
    *     {
    *       Albenia:    "______.png",
    *       Australia:  "______.png",
    *       ....
    *       Serbia:     "______.png"
    *     }
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
    */

    /**
     * @api {get} /flags/participated/:year /flags/participated/:year
     * @apiDescription get the eurovision participated countries on specific year
     * @apiGroup Flags
     * @apiSuccess {Object[]} get all countries participated on specific year

     * @apiSuccessExample {json} Success-Response:
     *     HTTP 200 OK
     *     [
     *       {country: "Albenia"}
     *       {country: "Australia"}
     *       ....
     *       {country: "Serbia"}
     *     ]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */

    /**
     * @api {get} /formula/:year /formula
     * @apiDescription year < thisYear: get eurovision winner song's details on specific year <br/> year > thisYear: get eurovision winners song's details over history
     * @apiGroup SongDetails
     * @apiSuccess {Object} get winner song's statistics.

     * @apiSuccessExample {json} Success-Response formula/2018:
     *     HTTP 200 OK
     *{
      *    "date": "12 May",
      *    "host_city": " Lisbon",
      *    "winner": "Israel",
      *    "song": {
      *        "_id": "5c14e5b4bf2c158609fa7525",
      *        "name": "Toy",
      *        "id": "6n2eIfLj0wOOUkUfNmYzlh",
      *        "artist": [
      *            "Netta"
      *        ],
      *        "date": "2018-05-23",
      *        "key": "D#",
      *        "genres": [
      *            [
      *                "eurovision",
      *                "israeli pop"
      *            ]
      *        ],
      *        "language": "english"
      *    },
      *    "performer": "Netta"
      *}
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */
