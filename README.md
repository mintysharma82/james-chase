# Virgin Atlantic / Virgin Atlantic Holidays ~ Holiday Search Results (Front-end test)

Thank you for your interest in joining our front-end team and taking the time to do the test. We think it will provide a nice and interesting challenge and a good talking point for the next stage of the process.

## Rules

You must write the application in [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) with [NextJS](https://nextjs.org/). This is all set up and ready to use inside this project.

We have used [new App Router](https://nextjs.org/docs/app/building-your-application/routing) in Next to make the test a bit more interesting and mix rendering on the client and server.

For the test you should adhere to the following conditions:

- The code must be your own work. If you have a strong case to use a small code snippet of someone else's e.g. a
  boilerplate function, it must be clearly commented and attributed to the original author
  - **checked** the star component inline svg is copy from the live site (just the URLs) and I have also checked the styles (none of the styles is copy over as you can see CSS is very limited) as I did not know the font size and colors used etc. I have not taken anything that you would not get from wireframes.
- You must include any unit tests you think are appropriate - Cypress is set up for you already
  - **checked** I have however used Jest as I have basic knowledge of cypress but it would have been more time consuming for me. Please run command `yarn run test:watch` to view the coverage. I have provided as much testing as I could given it is not live code, as there was no mention of coverage percentage (All new files are covered).
- Give consideration to performance and accessibility. Lighthouse scores are high - please keep them that way
  - **checked** the only issue is that there are more than 80 hotels displayed on the page, and pagination was not part of the requirements. If we enable pagination, the performance will be even better. We can also hide the filters on initial load and I was limited in terms of time, so decided not to do it as part of test... in live environment I will do it for sure. The image of last lighthouse check is available in public folder (public/images/lighthouse.png)
- Code must be clear, concise and human readable - **checked**
- We do not want to see how well you can use a UI framework. This is a test and we want to see what you can create so please avoid Bootstrap, Material UI etc - **checked**
- Simple CSS has been included but please use whatever CSS flavour you like: LESS, Emotion, Styled Components etc - **checked**

## What it should do

Build the 'search results page' which connects to our holiday search API to display a list of holidays for a given location and departure date. Select what data items (example listed below) you think should be included on the page. You can use the [live website](https://www.virginholidays.co.uk) and a holiday search as an example but feel free to change things up.

Add the ability to filter the results by:

1. Price per person **available**
1. Hotel facilities **available**
1. Star rating **available**

The call to the API has been made inside the SearchResultsComponent and some example links are provided on the home route.

Typings for the POST request body and response are provided in `src/types/booking.ts` file.

The endpoint will return data relating to the holiday packages available. The key properties you should be interested in are in the typings. Please note, our endpoint will return much more data, but you are free to ignore this!

Results can be slow to load so you will need to handle this in your code how ever you wish but a basic `loading.tsx` file has been added.

## Supplying your code

Please **create and commit your code into a public Github repository** and supply the link to the recruiter for review.

Thanks for your time, we look forward to hearing from you!

## Running the app

`yarn dev` to start serving the application in development mode. You can check a production ready build by running `yarn build && yarn start`. Please refer to the NextJS documentation for more details.

`yarn cypress:open` to run the Cypress test. We have provided a passing test already for the composition service but would like to see some more. **checked** I have done end to end testing with cypress (out of self interest) and hence I have included a very basic end to end test.

Built on node `v20.1.0`.

## Notes

The items in individual filters are OR based. So if you select two price ranges, items in both price ranges will be shown. Filters themselves are AND based. If you select 3 stars filter and a price range, than item meeting both constraints will be shown. I have also taken only a few amenities into consideration as I believe it will be a controlled list.

This was atest and I might have had a look at a few more things if it was live code.
