# FortinetHW

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Install node modules
Run `npm i` to install dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Answer to follow up questions
1. How would you improve the rendering of the DOM if this is a large dataset containing around 500,000 items?
   Do not show the whole table directly. I would split the table into several pages like 100 rows per page. So we only render 100 rows each time whcih can improve rendering performance.
2. Could you improve your code to allow each row to adjust its height dynamically according to the content?
   This has already been handled when rendering, the height is dynamicly decided by content. However, we can set a height, if the height is larger than the original height, the cell will expand to the height we set.
   This will take into effect only when we set `display : iinline-block` or `block` for the table.