/****************************************************************************
 *
 *  File Name:  earthquakesHeatmapLogic.js
 *
 *  File Description:
 *      This Javascript file contains the function and subroutine calls 
 *      for the html file, index.html. Here is a list of the functions
 *      and subroutines:
 *  
 *      FetchJsonDataFromURLFunction
 *      ReturnUpdatedDropdownMenuArrayFunction
 * 
 *      AddOptionToDropdownMenuSubroutine
 *      PopulateDropdownMenuWithArraySubroutine
 *      PopulateDropdownMenusSubroutine
 *      PopulateMagnitudeDropdownMenuSubroutine
 *      PopulateDepthDropdownMenuSubroutine
 * 
 *      DisplayOverlayLayerSubroutine
 *      DisplayHeatmapSubroutine
 *      DisplayMapMarkersSubroutine
 * 
 *      ChangeTimePeriodSubroutine
 *      ChangeMagnitudeSubroutine
 *      ChangeDepthSubroutine
 * 
 *      InitializeWebPageSubroutine
 *      
 *
 *  Date        Description                             Programmer
 *  ----------  ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

// These variables hold the URLs for the earthquake data sets.
let earthquakesPastThirtyDaysUrlString = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';

let earthquakesPastSevenDaysUrlString = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

let earthquakesPastDayUrlString = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

let earthquakesPastHourUrlString = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';


// These objects are the three overlay layers: heatmap and earthquakes.
let heatmapOverlayLayerGroup
        = L.layerGroup();

let earthquakesOverlayLayerGroup
        = L.layerGroup();


// These lines of code declare the four map tile layers: outdoors, grayscale,
// satellite, and dark.
const outdoorsMapTileLayer 
      = L.tileLayer
        (
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
            {
                attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
                tileSize: 512,
                maxZoom: 18,
                zoomOffset: -1,
                id: 'mapbox/outdoors-v11',
                accessToken: API_KEY
            }
        );

const grayscaleMapTileLayer 
      = L.tileLayer
        (
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
            {
                attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
                tileSize: 512,
                maxZoom: 18,
                zoomOffset: -1,
                id: 'mapbox/light-v10',
                accessToken: API_KEY
            }
        );

const satelliteMapTileLayer 
      = L.tileLayer
        (
            'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
            {
                attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
                maxZoom: 18,
                id: 'mapbox.satellite',
                accessToken: API_KEY
            }
        );

const darkMapTileLayer 
      = L.tileLayer 
        (
            'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
            {
                attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
                maxZoom: 18,
                id: 'dark-v10',
                accessToken: API_KEY
            }
        );


// This Dictionary contains the base map tile layers.
const baseMapTileLayerDictionary
        = {
            'Grayscale Map': grayscaleMapTileLayer,
            'Outdoors Map': outdoorsMapTileLayer,
            'Satellite Map': satelliteMapTileLayer,
            'Dark Map': darkMapTileLayer
          };

// This Dictionary contains three map overlay layers: heatmap and earthquakes.
const overlayLayerGroupDictionary 
        = {
                'Heatmap': heatmapOverlayLayerGroup,
                'Earthquakes': earthquakesOverlayLayerGroup
          };

// This map object is the current map and initially displays the grayscale map with the 
// two overlay layers.
let currentMapObject 
        = L.map
            ('mapid', 
                {
                    center: [30.0, 0.0],
                    zoom: 2.5,
                    layers: [grayscaleMapTileLayer,
                             heatmapOverlayLayerGroup,
                             earthquakesOverlayLayerGroup]
                }
            );

// This control layer displays the map and overlay options.
L.control
    .layers
    (   
        baseMapTileLayerDictionary, 
        overlayLayerGroupDictionary, 
        {collapsed: true}
    )
    .addTo(currentMapObject);


// These dictionaries hold the blueprint and current values for the dropdown menus.
const timePeriodDropdownMenuOptionsDictionary
        = {'Past 30 Days': earthquakesPastThirtyDaysUrlString, 
           'Past 7 Days': earthquakesPastSevenDaysUrlString, 
           'Past Day': earthquakesPastDayUrlString, 
           'Past Hour': earthquakesPastHourUrlString};

const magnitudeDropDownMenuOptionsDictionary
        = {'Magnitude': [-20.0, 20.0],
           '<2.5': [-20.0, 2.4], 
           '2.5-5.4': [2.5, 5.4], 
           '5.5-6.0': [5.5, 6.0], 
           '7.0-7.9': [7.0, 7.9], 
           '8.0+': [8.0, 20.0]};

const depthDropDownMenuOptionsDictionary
        = {'Depth': [-10.0, 1000.0],
           '-10-10': [-10.0, 9.9], 
           '10-30': [10.0, 29.9], 
           '30-50': [30.0, 49.9], 
           '50-70': [50.0, 69.9], 
           '70-90': [70.0, 89.9], 
           '90+': [90.0, 1000.0]};

let currentDropdownMenuDictionary
        = {'period': 'Past 30 Days',
           'magnitude': 'Magnitude',
           'depth': 'Depth'};


/****************************************************************************
 *
 *  Function Name:  FetchJsonDataFromURLFunction
 *
 *  Function Description:  
 *      This function is the first stage for retrieving the aviation 
 *      accidents data set from the specified URL.
 *
 *
 *  Function Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          urlString
 *                          This parameter is the URL for the source data.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

async function FetchJsonDataFromURLFunction 
                (urlString) 
{
    var dataD3JsonObject 
            = null;
  
    try 
    {
        dataD3JsonObject 
            = await 
                d3.json
                    (urlString);
    }
    catch (error) 
    {
        console.error
            (error);
    }
 
    return dataD3JsonObject;
} // This right brace ends the block for the function, 
// FetchJsonDataFromURLFunction.


/****************************************************************************
 *
 *  Function Name:  ReturnUpdatedDropdownMenuArrayFunction
 *
 *  Function Description:  
 *      This function returns an updated array of dropdown menu options
 *      based on the current criteria.
 *
 *
 *  Function Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  Dictionary
 *          earthquakeFeaturesDictionaryArray
 *                          This parameter is the current earthquake data
 *                          set.
 *  Dictionary
 *          dropDownMenuOptionsDictionary
 *                          This parameter is the current dropdown menu's
 *                          full options.
 *  String
 *          dropdownMenuIDString
 *                          This parameter is the ID for the current
 *                          dropdown menu.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function ReturnUpdatedDropdownMenuArrayFunction
            (earthquakeFeaturesDictionaryArray,
             dropDownMenuOptionsDictionary,
             dropdownMenuIDString
                = 'selectMagnitude')
{
    var dropdownMenuStringArray
            = [];
    
    var conditionFloat;

    for (var key in dropDownMenuOptionsDictionary) 
    {
        if (key != Object.keys(dropDownMenuOptionsDictionary).shift())
        {
            for (var i = 0; i < earthquakeFeaturesDictionaryArray.length; i++)
            {
                if (dropdownMenuIDString === 'selectMagnitude')
                {
                    conditionFloat
                        = Number(earthquakeFeaturesDictionaryArray[i].properties.mag)
                            .toFixed(1);
                }
                else
                {
                    conditionFloat
                        = Number(earthquakeFeaturesDictionaryArray[i].geometry.coordinates[2])
                            .toFixed(1);
                }

                if (conditionFloat >= dropDownMenuOptionsDictionary[key][0]
                    && conditionFloat <= dropDownMenuOptionsDictionary[key][1])
                {
                    dropdownMenuStringArray.push(key);
            
                    break;
                }
            }
        }
    }

    return dropdownMenuStringArray;
} // This right brace ends the block for the function, 
// ReturnUpdatedDropdownMenuArrayFunction.


/****************************************************************************
 *
 *  Subroutine Name:  AddOptionToDropdownMenuSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine adds one option to a dropdown menu.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          selectElementObject
 *                          This parameter is the dropdown menu object.
 *  String
 *          optionString
 *                          This parameter is the new option for the
 *                          dropdownn menu.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function AddOptionToDropdownMenuSubroutine
            (selectElementObject,
             optionString)
{
    var documentElementObject
        = document
            .createElement
                ('option');

    documentElementObject.textContent 
        = optionString;

    documentElementObject.value 
        = optionString;

    selectElementObject
        .appendChild
            (documentElementObject);
} // This right brace ends the block for the subroutine, 
// AddOptionToDropdownMenuSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  PopulateDropdownMenuWithArraySubroutine
 *
 *  Subroutine Description:  
 *      This subroutine populates a dropdown menu with an Array.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          dropdownMenuIDString
 *                          This parameter is the dropdown menu ID.
 *  String
 *           dropdownMenuStringArray
 *                          This parameter is an Array for the dropdown
 *                          menu.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function PopulateDropdownMenuWithArraySubroutine
            (dropdownMenuIDString,
             dropdownMenuStringArray)
{
    var selectElementObject 
            = document
                .getElementById
                    (dropdownMenuIDString);

    var lastElementIndexInteger
            = selectElementObject.options.length - 1;

    for (var i = lastElementIndexInteger; i > 0; i--) 
    {
        selectElementObject.remove(i);
    }

    for (var j = 0; j < dropdownMenuStringArray.length; j++) 
    {
        AddOptionToDropdownMenuSubroutine
            (selectElementObject,
             dropdownMenuStringArray[j]);
    }
} // This right brace ends the block for the subroutine, 
// PopulateDropdownMenuWithArraySubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  PopulateDropdownMenusSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine initially populates all the dropdown menus.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  n/a     n/a             n/a
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function PopulateDropdownMenusSubroutine()
{
    var timePeriodDropdownArray
            = Object
                .keys (timePeriodDropdownMenuOptionsDictionary)
                .slice (1);

    PopulateDropdownMenuWithArraySubroutine
        ('selectTimePeriod',
         timePeriodDropdownArray);

    currentDropdownMenuDictionary['period'] = 'Past 30 Days';

    PopulateMagnitudeDropdownMenuSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']]);

    PopulateDepthDropdownMenuSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']]);
} // This right brace ends the block for the subroutine, 
// PopulateDropdownMenusSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  PopulateMagnitudeDropdownMenuSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine populates the magnitude dropdown menu.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          localUrlString
 *                          This parameter is the current earthquake URL.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function PopulateMagnitudeDropdownMenuSubroutine
            (localUrlString)
{
    FetchJsonDataFromURLFunction
        (localUrlString)
            .then
            (
                (earthquakesGeoJsonDictionary => 
                    {
                        var currentEarthquakeFeaturesDictionaryArray
                                = earthquakesGeoJsonDictionary
                                    .features;

                        var magnitudeDropdownMenuStringArray
                                = ReturnUpdatedDropdownMenuArrayFunction
                                    (currentEarthquakeFeaturesDictionaryArray,
                                     magnitudeDropDownMenuOptionsDictionary);
                        
                        PopulateDropdownMenuWithArraySubroutine
                            ('selectMagnitude',
                             magnitudeDropdownMenuStringArray);
                    }
                )
            );
} // This right brace ends the block for the subroutine, 
// PopulateMagnitudeDropdownMenuSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  PopulateDepthDropdownMenuSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine populates the depth dropdown menu.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          localUrlString
 *                          This parameter is the current earthquake URL.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function PopulateDepthDropdownMenuSubroutine
            (localUrlString)
{
    FetchJsonDataFromURLFunction
        (localUrlString)
            .then
            (
                (earthquakesGeoJsonDictionary => 
                    {
                        var currentEarthquakeFeaturesDictionaryArray
                                = earthquakesGeoJsonDictionary
                                    .features;

                        var depthDropdownMenuStringArray
                                = ReturnUpdatedDropdownMenuArrayFunction
                                    (currentEarthquakeFeaturesDictionaryArray,
                                     depthDropDownMenuOptionsDictionary,
                                     'selectDepth');

                        PopulateDropdownMenuWithArraySubroutine
                            ('selectDepth',
                             depthDropdownMenuStringArray);
                    }
                )
            );
}  // This right brace ends the block for the subroutine, 
// PopulateDepthDropdownMenuSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  DisplayOverlayLayerSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine checks whether the overlay layer is currently
 *      displayed and updates the overlay layer accordingly.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  Overlay Layer Group
 *          overlayLayerGroup
 *                          This parameter is the current overlay layer group.
 *  Boolean
 *          layerExistsBoolean
 *                          This parameter indicates whether the overlay layer
 *                          is currently displayed or not.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function DisplayOverlayLayerSubroutine
            (overlayLayerGroup,
             layerExistsBoolean)
{
    if (layerExistsBoolean == false)
    {
        currentMapObject.removeLayer(overlayLayerGroup);
    }
    else
    {
        overlayLayerGroup.addTo(currentMapObject); 
    }
} // This right brace ends the block for the subroutine, 
// DisplayOverlayLayerSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  DisplayHeatmapSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine displays the heatmap.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          localUrlString
 *                          This parameter is the current earthquake URL.
 *  String
 *          magnitudeDictionaryKeyString
 *                          This parameter is the identifier for the 
 *                          current magnitude dropdown option.
 *  String
 *          depthDictionaryKeyString
 *                          This parameter is the identifier for the 
 *                          current depth dropdown option.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function DisplayHeatmapSubroutine
            (localUrlString,
             magnitudeDictionaryKeyString,
             depthDictionaryKeyString)
{
    var layerExistsBoolean
            = true;

    if (currentMapObject.hasLayer(heatmapOverlayLayerGroup) == false)
    {
        layerExistsBoolean = false;
    }

    heatmapOverlayLayerGroup.clearLayers();

    heatmapOverlayLayerGroup.addTo(currentMapObject);

    FetchJsonDataFromURLFunction 
        (localUrlString)
            .then
            (
                (earthquakesGeoJsonDictionary => 
                    {
                        var currentEarthquakeFeaturesDictionaryArray
                                = earthquakesGeoJsonDictionary
                                    .features
                                    .filter
                                        (featuresKey =>
                                            (Number(featuresKey.properties.mag).toFixed(1) 
                                                >= magnitudeDropDownMenuOptionsDictionary
                                                    [magnitudeDictionaryKeyString][0]
                                             && Number(featuresKey.properties.mag).toFixed(1) 
                                                <= magnitudeDropDownMenuOptionsDictionary
                                                    [magnitudeDictionaryKeyString][1]))
                                    .filter
                                        (featuresKey =>
                                            (Number(featuresKey.geometry.coordinates[2]).toFixed(1) 
                                                >= depthDropDownMenuOptionsDictionary
                                                    [depthDictionaryKeyString][0]
                                             && Number(featuresKey.geometry.coordinates[2]).toFixed(1) 
                                                <= depthDropDownMenuOptionsDictionary
                                                    [depthDictionaryKeyString][1]));

                        var heatLocationArray
                                = [];
                    
                        for (var i = 0; 
                             i < currentEarthquakeFeaturesDictionaryArray.length; 
                             i++)
                        {
                            heatLocationArray
                                .push
                                (
                                    [currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[1],
                                     currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[0],
                                     (1 + currentEarthquakeFeaturesDictionaryArray[i].properties.mag) * 4.0
                                    ]
                                )
                        }

                        L.heatLayer
                            (heatLocationArray, 
                                {
                                    minOpacity: 0.2,
                                    radius: 40,
                                    blur: 40,
                                    gradient: {0.15: 'blue', 
                                               0.25: 'green', 
                                               0.4: 'orange', 
                                               0.5: 'orangered', 
                                               0.65: 'red', 
                                               1.0: 'darkred'}
                                }
                            ).addTo(heatmapOverlayLayerGroup);
                             
                        DisplayOverlayLayerSubroutine
                            (heatmapOverlayLayerGroup,
                             layerExistsBoolean);
                        
                    }
                )
            );
} // This right brace ends the block for the subroutine, 
// DisplayHeatmapSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  DisplayMapMarkersSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine checks displays the earthquake markers.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          localUrlString
 *                          This parameter is the current earthquake URL.
 *  String
 *          magnitudeDictionaryKeyString
 *                          This parameter is the identifier for the 
 *                          current magnitude dropdown option.
 *  String
 *          depthDictionaryKeyString
 *                          This parameter is the identifier for the 
 *                          current depth dropdown option.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function DisplayMapMarkersSubroutine
            (localUrlString,
             magnitudeDictionaryKeyString,
             depthDictionaryKeyString)
{
    var layerExistsBoolean
            = true;

    if (currentMapObject.hasLayer(earthquakesOverlayLayerGroup) == false)
    {
        layerExistsBoolean = false;
    }

    earthquakesOverlayLayerGroup.clearLayers();

    earthquakesOverlayLayerGroup.addTo(currentMapObject);

    FetchJsonDataFromURLFunction 
        (localUrlString)
            .then
            (
                (earthquakesGeoJsonDictionary => 
                    {
                        var currentEarthquakeFeaturesDictionaryArray
                                = earthquakesGeoJsonDictionary
                                    .features
                                    .filter
                                        (featuresKey =>
                                            (Number(featuresKey.properties.mag).toFixed(1) 
                                                >= magnitudeDropDownMenuOptionsDictionary
                                                    [magnitudeDictionaryKeyString][0]
                                             && Number(featuresKey.properties.mag).toFixed(1) 
                                                <= magnitudeDropDownMenuOptionsDictionary
                                                    [magnitudeDictionaryKeyString][1]))
                                    .filter
                                        (featuresKey =>
                                            (Number(featuresKey.geometry.coordinates[2]).toFixed(1) 
                                                >= depthDropDownMenuOptionsDictionary
                                                    [depthDictionaryKeyString][0]
                                             && Number(featuresKey.geometry.coordinates[2]).toFixed(1) 
                                                <= depthDropDownMenuOptionsDictionary
                                                    [depthDictionaryKeyString][1]));

                        for (var i = 0; 
                             i < currentEarthquakeFeaturesDictionaryArray.length; 
                             i++)
                        {   
                            L.circle
                            (
                                ([currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[1],
                                  currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[0]]), 
                                 {
                                    radius: 50000.0,
                                    fillColor: 'maroon',
                                    fillOpacity: 1.0,
                                    color: 'black',
                                    stroke: true,
                                    weight: 0.5
                                }
                            )
                            .bindPopup
                            (
                                `<div class="map-popup"><a href="${currentEarthquakeFeaturesDictionaryArray[i].properties.url}">
                                    ${currentEarthquakeFeaturesDictionaryArray[i].properties.title}</a></div><br>
                                <div class="map-popup-exp">
                                <span>Location: </span> ${currentEarthquakeFeaturesDictionaryArray[i].properties.place} <br>
                                <span>Date: </span> ${new Intl.DateTimeFormat().format(new Date(currentEarthquakeFeaturesDictionaryArray[i].properties.time))} <br>
                                <span>Magnitude: </span> ${Number(currentEarthquakeFeaturesDictionaryArray[i].properties.mag).toFixed(2)} <br>
                                <span>Depth: </span> ${Number(currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[2]).toFixed(2)} km <br>
                                <span>Latitude: </span> ${Number(currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[1]).toFixed(4)} <br>
                                <span>Longitude: </span> ${Number(currentEarthquakeFeaturesDictionaryArray[i].geometry.coordinates[0]).toFixed(4)}
                                </div>`
                            )
                            .addTo(earthquakesOverlayLayerGroup);
                             
                            DisplayOverlayLayerSubroutine
                                (earthquakesOverlayLayerGroup,
                                 layerExistsBoolean);
                        }
                    }
                )
            );
} // This right brace ends the block for the subroutine, 
// DisplayMapMarkersSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  ChangeTimePeriodSubroutine
 *
 *  Subroutine Description:  
 *      This function is the callback for changes in the time period 
 *      dropdown menu.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          dropdownIDString
 *                          This parameter is the ID for the current
 *                          dropdown menu.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function ChangeTimePeriodSubroutine
            (dropdownIDString)
{
    currentDropdownMenuDictionary['period']
        = dropdownIDString;

    currentDropdownMenuDictionary['magnitude'] 
        = 'Magnitude';

    currentDropdownMenuDictionary['depth'] 
        = 'Depth';
        
    PopulateMagnitudeDropdownMenuSubroutine
        (timePeriodDropdownMenuOptionsDictionary[dropdownIDString]);

    PopulateDepthDropdownMenuSubroutine
        (timePeriodDropdownMenuOptionsDictionary[dropdownIDString]);

    DisplayHeatmapSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [dropdownIDString],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);

    DisplayMapMarkersSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [dropdownIDString],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);
} // This right brace ends the block for the subroutine, 
// ChangeTimePeriodSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  ChangeMagnitudeSubroutine
 *
 *  Subroutine Description:  
 *      This function is the callback for changes in the magnitude
 *      dropdown menu.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          dropdownIDString
 *                          This parameter is the ID for the current
 *                          dropdown menu.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function ChangeMagnitudeSubroutine
            (dropdownIDString)
{   
    currentDropdownMenuDictionary['magnitude'] 
        = dropdownIDString;

    DisplayHeatmapSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);
    
    DisplayMapMarkersSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);
} // This right brace ends the block for the subroutine, 
// ChangeMagnitudeSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  ChangeDepthSubroutine
 *
 *  Subroutine Description:  
 *      This function is the callback for changes in the depth dropdown
 *      menu.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  String
 *          dropdownIDString
 *                          This parameter is the ID for the current
 *                          dropdown menu.
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function ChangeDepthSubroutine
            (dropdownIDString)
{
    currentDropdownMenuDictionary['depth'] 
        = dropdownIDString;

    DisplayHeatmapSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);

    DisplayMapMarkersSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);
} // This right brace ends the block for the subroutine, 
// ChangeDepthSubroutine.


/****************************************************************************
 *
 *  Subroutine Name:  InitializeWebPageSubroutine
 *
 *  Subroutine Description:  
 *      This subroutine initializes the Aviation Accidents Visualization
 *      Toolkit by populating the drop down menus and setting up the
 *      legend, dropdown menus, and map layers.
 *
 *
 *  Subroutine Parameters:
 *
 *  Type    Name            Description
 *  -----   -------------   ----------------------------------------------
 *  n/a     n/a             n/a
 *
 * 
 *  Date        Description                             Programmer
 *  --------    ------------------------------------    ------------------
 *  10/26/2023  Initial Development                     N. James George
 *
 ****************************************************************************/

function InitializeWebPageSubroutine() 
{
    PopulateDropdownMenusSubroutine();

    DisplayHeatmapSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);

    DisplayMapMarkersSubroutine
        (timePeriodDropdownMenuOptionsDictionary
            [currentDropdownMenuDictionary['period']],
         currentDropdownMenuDictionary['magnitude'],
         currentDropdownMenuDictionary['depth']);
} // This right brace ends the block for the subroutine, 
// InitializeWebPageSubroutine.


InitializeWebPageSubroutine();