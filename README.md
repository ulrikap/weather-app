# Magnificent weather app

Application to display the weather from different cities around the world

## Requirements

- Node 18 >=
- pnpm 7 >=

## Synopsis

The application is made with NextJS and Zustand as the main drivers. Datafetching is handled natively without any extra frameworks, except for the automatic caching provided by NextJS. Zustand handles global state (although very clunky when paired with NextJS).

## APIs

APIs used to display information in this application

### Unsplash

Used to fetch a simple image of each location on the details screen

### Openweatherapi

Displays all the weather information shown on the pages

## How to run

From root
* pnpm install
* pnpm dev

## Notes
* Made as a recruitment challenge for Handelsbanken Digital Unit

## Current Limitations
* Does not account for city names written in other languages than english. The api can support this, but out of scope for now.
* Does not test UI components with Cypress, only logic with Jest
* Design is basic and is mainly driven by boxes and grids. Does however support mobile well.