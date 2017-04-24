![pumped bird](../img/reps.jpg)

## REPS ON REPS ON REPS

Using `express-quotes` app, and the [cheatsheet]('https://git.generalassemb.ly/nyc-wdi-ada/HW_U02_D06_EXPRESS_INTRO_-_SQL/blob/master/cheatsheet.md') (Yeap, I'm that nice today ...) as a guide, build your own application **from scratch**.

Your app should have the following routes:

* `/` - Root route, would welcome user and introduce the app
* `/birds` - route to render all birds in the database
* `/birds/type/:type` - would render information about a particular bird with the `type` that the user requested.
* `/birds/id/:id` - would render information about a particular bird with the `id` that the user requested.

You are given mock database in the `/db/birds.js` file :thumbsup:

#### Feeling awesome? 💪 HERE is **Bonus** 🎉:
* Create a separate route `/birds/nyc` to render all birds from NYC
> Hint! You would need to use some kind of loop to to through the array of birds objects and only return only the ones that have `city` of NYC as a property. :tada:
