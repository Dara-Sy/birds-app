![pumped bird](../img/reps.jpg)

## REPS ON REPS ON REPS


#### READING:
[Express Hello World](http://expressjs.com/en/starter/hello-world.html)

[Express Routing](http://expressjs.com/en/starter/basic-routing.html)


Your app should have the following routes:

* `/` - Root route, would welcome user and introduce the app
* `/birds` - route to all birds in the database, use `res.json()` to send the birds back to the client in json format
* `/birds/type/:type` - would send information about a particular bird with the `type` that the user requested.
* `/birds/id/:id` - would send information about a particular bird with the `id` that the user requested.

You are given mock database in the `/db/birds.js` file :thumbsup:

#### Feeling awesome? 💪 HERE is **Bonus** 🎉:
* Create a separate route `/birds/nyc` to send all data about all birds **from NYC**
> Hint! You would need to use some kind of loop to to through the array of birds objects and only return only the ones that have `city` of NYC as a property. :tada:
