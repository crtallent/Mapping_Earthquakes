# Mapping_Earthquakes

## Overview of Mapping_Earthquakes

In this project, we are tasked with showing the differences between the magnitudes of earthquakes around the world for the last seven days (as of February 21, 2022).  In order to accomplish this task, we pulled GeoJSON earthquake data from the [USGS website](https://www.usgs.gov/programs/earthquake-hazards/earthquakes), and retrieved geographical coordinates and earthquake magnitudes.  This data was then added to a map, so that the data could be visuallized at a glance. JavaScript and the D3.js library were used to pull the data into an interactive Mapbox map plotted through the Leaflet library.

## Resources

- Software: JavaScript 1.7, Mapbox v2.7.0, Leaflet 1.7.1
- Data Sources: [GeoJSON files](https://github.com/crtallent/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/js/challenge_logic.js)

## Feautures

Three map layers were added so that the user can filter earthquake data as follows:

1. A view of all earthquakes within the last seven days
2. A view of all the major earthquakes (magnitudes greater than 4.5) within the last seven days
3. A view of the tectonic plates across the world

Additionally, the user can toggle the filters to see any combination of the above, or choose to toggle all filters off to just see the world map.  Map view preferences are included as well:

1. Streets View (default)
2. Satellite View
3. Day View
4. Night View
5. Light View 
6. Dark View

## Images

### 

Default map showing all filters toggled on:

<img src="https://github.com/crtallent/Mapping_Earthquakes/blob/main/Earthquake_Challenge/Images/Street%20Map.png"/>

Dark map showing only tectonic plates filter:

<img src="https://github.com/crtallent/Mapping_Earthquakes/blob/main/Earthquake_Challenge/Images/Dark%20plates%20only.png/>

Satellite map showing earthquake data:

<img src="https://github.com/crtallent/Mapping_Earthquakes/blob/main/Earthquake_Challenge/Images/Sat%20EQ%20only.png"/>
                                                                                                                     


