# **Aviation Accidents Visualization Project**

----

### **Installation:**

----

If the computer has Anaconda, Jupyter Notebook, and a recent version of Python, the IPython notebooks already have the following dependencies installed: datetime, io, json, matplotlib, math, numpy, pandas, pathlib, random, re, requests, requests_html, scipy.

In addition to those modules, the IPython notebooks need the following to execute: holoviews, hvplot, geoviews, geopy, aspose-words, dataframe-image, BeautifulSoup, Splinter, airportsdata, countryinfo, country-converter, SQLite, SQLAlchemy, Flask, and CORS.

Here are the requisite Terminal commands for the installation of these peripheral modules (SQLite is already installed on macOS):

pip3 install holoviews

pip3 install hvplot

pip3 install geoviews

pip3 install geopy

pip3 install aspose-words

pip3 install dataframe-image

pip3 install beautifulsoup4

pip3 install splinter

pip3 install -U airportsdata

pip3 install countryinfo

pip3 install country-converter

pip3 install sqlalchemy

pip3 install Flask

pip3 install -U flask-cors

----

### **Usage:**

----

The IPython notebooks, PyAviationAccidentsExtract.ipynb, PyAviationAccidentsTransformFirst.ipynb, PyAviationAccidentsTransformSecond.ipynb, and PyAviationAccidentsLoad.ipynb as well as the Flask API, PyAviationAccidentFlaskAPI.py, write and read the files in the Resources Folder and some will not run without them.  The IPython Notebook and Flask API must have the following Python scripts in the same folder with them:

PyAviationAccidentFlaskAPI.py

PyAviationAccidentsFunctions.py

PyConstants.py

PyFunctions.py

PyLogConstants.py

PyLogFunctions.py

PyLogSubRoutines.py

PySubroutines.py

To start the Flask API, execute the following command in the source folder using Terminal in MacOS or its MS Windows equivalent:

flask --app PyAviationAccidentFlaskAPI.py run

If the folders, Resources, Logs, and Images are not present, the IPython notebook will create them.  The Resources folder holds CSV input and output files files; the Logs folder contains debug and log files from testing the IPython Notebooks; and the Images folder has the PNG image files of the IPython Notebooks' tables and plots. The HTML, CSS, Javascript, and webpage image files are arranged in the Visualization folder and requires the Flask API server to be running (flask --app PyAviationAccidentFlaskAPI.py run). The IPython notebook, PyAviationAccidentsLoad.ipynb, creates the SQLite file, AviationAccidentsDatabase.sqlite, in the Visualization folder. To begin visualization, run the index.html file in any browser. The SQL folder contains table creation scripts and Entity-Relationship Diagrams for the current and future database.

To place a IPython notebook in Log Mode, Debug Mode, or Image Mode set the parameter for the appropriate subroutine in coding cell #2 to True. In Debug Mode, the IPython notebook displays the debug information and writes it to a debug file in the Logs folder; the same is true in Log Mode for log information sent to a log file. If the program is in Log Mode but NOT Debug Mode, it displays no debug information, but writes that information to the log file. If the program is in Image Mode, it writes all DataFrames, hvplot maps, and matplotlib plots to PNG files in the Images Folder.

----

### **Resource Summary:**

----

#### Source code

PyAviationAccidentsExtract.ipynb, PyAviationAccidentsTransformFirst.ipynb, PyAviationAccidentsTransformSecond.ipynb, and PyAviationAccidentsLoad.ipynb, PyAviationAccidentFlaskAPI.py, index.html, indexAccidentVisualization.html, indexAccidentHeatmap.html, style.css, aviationAccidentsHeatmap.js, aviationAccidentsVisualization.js, config.js, leaflet-heat.js

#### Input files

UpdatedAviationAccidentsData.csv, UpdatedAviationAccidentsNarratives.csv, AccidentLocations.csv, DepartureAirports.csv, DatabaseTableAircraftDamage.csv, DestinationAirports.csv, DatabaseTableAircraftOperators.csv, DatabaseTableAircraftTypes.csv, DatabaseTableAirports.csv, DatabaseTableAviationAccidents.csv, DatabaseTableCountry.csv, DatabaseTableDepartureAirports.csv, DatabaseTableDestinationAirports.csv, DatabaseTableFlightPhase.csv, DatabaseTableNatureOfFlight.csv, AviationAccidentsDatabase.sqlite

#### Output files

AviationAccidentsData1.csv, AviationAccidentsNarratives1.csv, UpdatedAviationAccidentsData.csv, UpdatedAviationAccidentsNarratives.csv, AccidentLocations.csv, DepartureAirports.csv, DatabaseTableAircraftDamage.csv, DestinationAirports.csv, DatabaseTableAircraftOperators.csv, DatabaseTableAircraftTypes.csv, DatabaseTableAirports.csv, DatabaseTableAviationAccidents.csv, DatabaseTableCountry.csv, DatabaseTableDepartureAirports.csv, DatabaseTableDestinationAirports.csv, DatabaseTableFlightPhase.csv, DatabaseTableNatureOfFlight.csv, AviationAccidentsDatabase.sqlite

#### SQL script

Project3GroupCreateTableSchemata.sql, Project3GroupFutureCreateTableSchemata.sql

#### Software

 Flask, Jupyter Notebook, Matplotlib, Numpy, Pandas, Python 3.11.4, SQLite

![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

----

### **GitHub Repository Branches:**

----

#### main branch 

|&rarr; [./PyAviationAccidentFlaskAPI.py](./PyAviationAccidentFlaskAPI.py)

|&rarr; [./PyAviationAccidentsConfig.py](./PyAviationAccidentsConfig.py)

|&rarr; [./PyAviationAccidentsConstants.py](./PyAviationAccidentsConstants.py)

|&rarr; [./PyAviationAccidentsExtract.ipynb](./PyAviationAccidentsExtract.ipynb)

|&rarr; [./PyAviationAccidentsFunctions.py](./PyAviationAccidentsFunctions.py)

|&rarr; [./PyAviationAccidentsLoad.ipynb](./PyAviationAccidentsLoad.ipynb)

|&rarr; [./PyAviationAccidentsTransformFirst.ipynb](./PyAviationAccidentsTransformFirst.ipynb)

|&rarr; [./PyAviationAccidentsTransformSecond.ipynb](./PyAviationAccidentsTransformSecond.ipynb)

|&rarr; [./PyConstants.py](./PyConstants.py)

|&rarr; [./PyFunctions.py](./PyFunctions.py)

|&rarr; [./PyLogConstants.py](./PyLogConstants.py)

|&rarr; [./PyLogFunctions.py](./PyLogFunctions.py)

|&rarr; [./PyLogSubRoutines.py](./PyLogSubRoutines.py)

|&rarr; [./PySubRoutines.py](./PySubRoutines.py)

|&rarr; [./README.TECHNICAL.md](./README.TECHNICAL.md)

|&rarr; [./README.md](./README.md)

|&rarr; [./Images/](./Images/)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDepartureAirport20202022.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDepartureAirport20202022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDepartureAirport19702022100Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDepartureAirport19702022100Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport1970s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport1970s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport1980s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport1980s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport1990s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport1990s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport2000s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport2000s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport2010s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport2010s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport20202022.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport20202022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport19702022100Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperDestinationAirport19702022100Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperFlightPhase1970202210Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperFlightPhase1970202210Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight1970s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight1970s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight1980s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight1980s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight1990s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight1990s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight2000s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight2000s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight2010s30Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight2010s30Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight20202022.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight20202022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight19702022100Fatalities.png](./Images/PyAviationAccidentsAnalysisFatalitiesperNatureofFlight19702022100Fatalities.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFlightCasualtyRateDistributionperYear19702022.png](./Images/PyAviationAccidentsAnalysisFlightCasualtyRateDistributionperYear19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisFlightCasualtyRateMeanperYear19702022.png](./Images/PyAviationAccidentsAnalysisFlightCasualtyRateMeanperYear19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisTable121AviationAccidents19702022.png](./Images/PyAviationAccidentsAnalysisTable121AviationAccidents19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisTable122DepartureAirports19702022.png](./Images/PyAviationAccidentsAnalysisTable122DepartureAirports19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisTable123DestinationAirports19702022.png](./Images/PyAviationAccidentsAnalysisTable123DestinationAirports19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsAnalysisTotalAviationFatalitiesvsYear19702022.png](./Images/PyAviationAccidentsAnalysisTotalAviationFatalitiesvsYear19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsExtractTable131AviationAccidentScrapedData19722022First.png](./Images/PyAviationAccidentsExtractTable131AviationAccidentScrapedData19722022First.png)
  
  &emsp; |&rarr; [./Images/PyAviationAccidentsExtractTable132AviationAccidentScrapedData19722022Last.png](./Images/PyAviationAccidentsExtractTable132AviationAccidentScrapedData19722022Last.png)
  
  &emsp; |&rarr; [./Images/PyAviationAccidentsExtractTable133AviationAccidentNarratives19722022First.png](./Images/PyAviationAccidentsExtractTable133AviationAccidentNarratives19722022First.png)
  
  &emsp; |&rarr; [./Images/PyAviationAccidentsExtractTable134AviationAccidentNarratives19722022Last.png](./Images/PyAviationAccidentsExtractTable134AviationAccidentNarratives19722022Last.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable11AviationAccidents19702022DatabaseTable.png](./Images/PyAviationAccidentsLoadTable11AviationAccidents19702022DatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable12CountryDatabaseTable.png](./Images/PyAviationAccidentsLoadTable12CountryDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable13AircraftTypesDatabaseTable.png](./Images/PyAviationAccidentsLoadTable13AircraftTypesDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable14AircraftOperatorsDatabaseTable.png](./Images/PyAviationAccidentsLoadTable14AircraftOperatorsDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable15AircraftDamageDatabaseTable.png](./Images/PyAviationAccidentsLoadTable15AircraftDamageDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable16FlightPhaseDatabaseTable.png](./Images/PyAviationAccidentsLoadTable16FlightPhaseDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable17NatureofFlightDatabaseTable.png](./Images/PyAviationAccidentsLoadTable17NatureofFlightDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable18AirportsDatabaseTable.png](./Images/PyAviationAccidentsLoadTable18AirportsDatabaseTable.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable19DepartureAirports19702022Table.png](./Images/PyAviationAccidentsLoadTable19DepartureAirports19702022Table.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable110DestinationAirports19702022Table.png](./Images/PyAviationAccidentsLoadTable110DestinationAirports19702022Table.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable111AviationAccidentsLocations19702022Table.png](./Images/PyAviationAccidentsLoadTable111AviationAccidentsLocations19702022Table.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsLoadTable112AviationAccidentsNarratives19702022Table.png](./Images/PyAviationAccidentsLoadTable112AviationAccidentsNarratives19702022Table.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable121AviationAccidents19702022.png](./Images/PyAviationAccidentsTransformFirstTable121AviationAccidents19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable122AviationAccidentsNarratives19722022.png](./Images/PyAviationAccidentsTransformFirstTable122AviationAccidentsNarratives19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable241UpdatedAviationAccidents19722022.png](./Images/PyAviationAccidentsTransformFirstTable241UpdatedAviationAccidents19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable242UpdatedAviationAccidentsNarratives19722022.png](./Images/PyAviationAccidentsTransformFirstTable242UpdatedAviationAccidentsNarratives19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable331AviationAccidentsCleanData19722022.png](./Images/PyAviationAccidentsTransformFirstTable331AviationAccidentsCleanData19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable421DepartureAirportsforeachAccident19722022.png](./Images/PyAviationAccidentsTransformFirstTable421DepartureAirportsforeachAccident19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable441DestinationAirportsforeachAccident19722022.png](./Images/PyAviationAccidentsTransformFirstTable441DestinationAirportsforeachAccident19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformFirstTable461AviationAccidentLocations19722022.png](./Images/PyAviationAccidentsTransformFirstTable461AviationAccidentLocations19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable31FinalAviationAccidentsDataFrame19702022.png](./Images/PyAviationAccidentsTransformSecondTable31FinalAviationAccidentsDataFrame19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable32CountryDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable32CountryDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable33AircraftTypesDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable33AircraftTypesDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable34AircraftOperatorsDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable34AircraftOperatorsDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable35AircraftDamageDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable35AircraftDamageDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable36FlightPhaseDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable36FlightPhaseDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable37NatureofFlightDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable37NatureofFlightDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable38AirportsDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable38AirportsDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable39DepartureAirportsDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable39DepartureAirportsDataFrame.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable121UpdatedAviationAccidents19702022.png](./Images/PyAviationAccidentsTransformSecondTable121UpdatedAviationAccidents19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable122AviationAccidentNarratives19702022.png](./Images/PyAviationAccidentsTransformSecondTable122AviationAccidentNarratives19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable123DepartureAirportsforeachAccident19702022.png](./Images/PyAviationAccidentsTransformSecondTable123DepartureAirportsforeachAccident19702022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable124DestinationAirportsforeachAccident19722022.png](./Images/PyAviationAccidentsTransformSecondTable124DestinationAirportsforeachAccident19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable125AviationAccidentLocations19722022.png](./Images/PyAviationAccidentsTransformSecondTable125AviationAccidentLocations19722022.png)

  &emsp; |&rarr; [./Images/PyAviationAccidentsTransformSecondTable310DestinationAirportsDataFrame.png](./Images/PyAviationAccidentsTransformSecondTable310DestinationAirportsDataFrame.png)

  &emsp; |&rarr; [./Images/README.md](./Images/README.md)

|&rarr; [./Logs/](./Logs/)

  &emsp; |&rarr; [./Logs/20231028PyAviationAccidentsExtractDebug.txt](./Logs/20231028PyAviationAccidentsExtractDebug.txt)

  &emsp; |&rarr; [./Logs/20231028PyAviationAccidentsExtractLog.txt](./Logs/20231028PyAviationAccidentsExtractLog.txt)

  &emsp; |&rarr; [./Logs/20231028PyAviationAccidentsTransformFirstDebug.txt](./Logs/20231028PyAviationAccidentsTransformFirstDebug.txt)

  &emsp; |&rarr; [./Logs/20231028PyAviationAccidentsTransformFirstLog.txt](./Logs/20231028PyAviationAccidentsTransformFirstLog.txt)
    
  &emsp; |&rarr; [./Logs/20231028PyAviationAccidentsTransformSecondDebug.txt](./Logs/20231028PyAviationAccidentsTransformSecondDebug.txt)

  &emsp; |&rarr; [./Logs/20231028PyAviationAccidentsTransformSecondLog.txt](./Logs/20231028PyAviationAccidentsTransformSecondLog.txt)
    
  &emsp; |&rarr; [./Logs/20231030PyAviationAccidentsLoadDebug.txt](./Logs/20231030PyAviationAccidentsLoadDebug.txt)

  &emsp; |&rarr; [./Logs/20231030PyAviationAccidentsLoadLog.txt](./Logs/20231030PyAviationAccidentsLoadLog.txt)

  &emsp; |&rarr; [./Logs/20231108PyAviationAccidentsAnalysisDebug.txt](./Logs/20231108PyAviationAccidentsAnalysisDebug.txt)

  &emsp; |&rarr; [./Logs/20231108PyAviationAccidentsAnalysisLog.txt](./Logs/20231108PyAviationAccidentsAnalysisLog.txt)

  &emsp; |&rarr; [./Logs/README.md](./Logs/README.md)

|&rarr; [./Presentation/](./Presentation/)
    
  &emsp; |&rarr; [./Presentation/AviationAccidentsPresentation.pdf](./Presentation/AviationAccidentsPresentation.pdf)

  &emsp; |&rarr; [./Presentation/AviationAccidentsPresentation.pptx](./Presentation/AviationAccidentsPresentation.pptx)

  &emsp; |&rarr; [./Presentation/README.md](./Presentation/README.md)

|&rarr; [./Resources/](./Resources/)

  &emsp; |&rarr; [./Resources/AccidentLocations.csv](./Resources/AccidentLocations.csv)

  &emsp; |&rarr; [./Resources/AviationAccidentsData1.csv](./Resources/AviationAccidentsData1.csv)

  &emsp; |&rarr; [./Resources/AviationAccidentsNarratives1.csv](./Resources/AviationAccidentsNarratives1.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableAircraftDamage.csv](./Resources/DatabaseTableAircraftDamage.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableAircraftOperators.csv](./Resources/DatabaseTableAircraftOperators.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableAircraftTypes.csv](./Resources/DatabaseTableAircraftTypes.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableAirports.csv](./Resources/DatabaseTableAirports.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableAviationAccidents.csv](./Resources/DatabaseTableAviationAccidents.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableCountry.csv](./Resources/DatabaseTableCountry.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableDepartureAirports.csv](./Resources/DatabaseTableDepartureAirports.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableDestinationAirports.csv](./Resources/DatabaseTableDestinationAirports.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableFlightPhase.csv](./Resources/DatabaseTableFlightPhase.csv)

  &emsp; |&rarr; [./Resources/DatabaseTableNatureOfFlight.csv](./Resources/DatabaseTableNatureOfFlight.csv)

  &emsp; |&rarr; [./Resources/DepartureAirports.csv](./Resources/DepartureAirports.csv)

  &emsp; |&rarr; [./Resources/DestinationAirports.csv](./Resources/DestinationAirports.csv)

  &emsp; |&rarr; [./Resources/UpdatedAviationAccidentsData.csv](./Resources/UpdatedAviationAccidentsData.csv)

  &emsp; |&rarr; [./Resources/UpdatedAviationAccidentsNarratives.csv](./Resources/UpdatedAviationAccidentsNarratives.csv)

  &emsp; |&rarr; [./Resources/README.md](./Resources/README.md)

|&rarr; [./SQL/](./SQL/)
    
  &emsp; |&rarr; [./SQL/Project3Group3EntityRelationshipDiagram.png](./SQL/Project3Group3EntityRelationshipDiagram.png)

  &emsp; |&rarr; [./SQL/Project3Group3EntityRelationshipFutureDiagram.png](./SQL/Project3Group3EntityRelationshipFutureDiagram.png)

  &emsp; |&rarr; [./SQL/Project3GroupCreateTableSchemata.sql](./SQL/Project3GroupCreateTableSchemata.sql)

  &emsp; |&rarr; [./SQL/Project3GroupFutureCreateTableSchemata.sql](./SQL/Project3GroupFutureCreateTableSchemata.sql)

  &emsp; |&rarr; [./SQL/README.md](./SQL/README.md)

|&rarr; [./Visualization/](./Visualization/)

  &emsp; |&rarr; [./Visualization/AviationAccidentsDatabase.sqlite](./Visualization/AviationAccidentsDatabase.sqlite)

  &emsp; |&rarr; [./Visualization/index.html](./Visualization/index.html)

  &emsp; |&rarr; [./Visualization/indexAccidentHeatmap.html](./Visualization/indexAccidentHeatmap.html)

  &emsp; |&rarr; [./Visualization/indexAccidentVisualization.html](./Visualization/indexAccidentVisualization.html)

  &emsp; |&rarr; [./Visualization/README.md](./Visualization/README.md)

|&rarr; [./Visualization/img/](./Visualization/img/)

  &emsp; |&rarr; [./Visualization/img/marker-icon-2x-blue.png](./Visualization/img/marker-icon-2x-blue.png)

  &emsp; |&rarr; [./Visualization/img/marker-icon-2x-orange.png](./Visualization/img/marker-icon-2x-orange.png)

  &emsp; |&rarr; [./Visualization/img/marker-shadow.png](./Visualization/img/marker-shadow.png)

|&rarr; [./Visualization/static/](./Visualization/static/)

|&rarr; [./Visualization/static/css/](./Visualization/static/css/)

  &emsp; |&rarr; [./Visualization/static/css/style.css](./Visualization/static/css/style.css)

|&rarr; [./Visualization/static/js/](./Visualization/static/js/)

  &emsp; |&rarr; [./Visualization/static/js/aviationAccidentsHeatmap.js](./Visualization/static/js/aviationAccidentsHeatmap.js)

  &emsp; |&rarr; [./Visualization/static/js/aviationAccidentsVisualization.js](./Visualization/static/js/aviationAccidentsVisualization.js)

  &emsp; |&rarr; [./Visualization/static/js/config.js](./Visualization/static/js/config.js)

  &emsp; |&rarr; [./Visualization/static/js/leaflet-heat.js](./Visualization/static/js/leaflet-heat.js)

----

### **References:**

----

[Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

[D3 Selection documentation)](https://devdocs.io/d3~5-selection/)

[D3.json() documentation](https://devdocs.io/d3~5/d3-request#json)

[ETL (Extract, Transform, Load)](https://www.bmc.com/blogs/what-is-etl-extract-transform-load-etl-explained/)

[Flask API documentation](https://flask.palletsprojects.com/en/2.3.x/api/)

[JavaScript Arrow Function MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[JavaScript Object.key, values, entries documentation](https://javascript.info/keys-values-entries)

[Jupyter Notebook Documentation](https://jupyter-notebook.readthedocs.io/en/stable/)

[Matplotlib Documentation](https://matplotlib.org/stable/index.html)

[Numpy documentation](https://numpy.org/doc/1.26/)

[Pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html)

[Plotly JavaScript Open Source Graphing Library](https://plotly.com/javascript/)

[Python Documentation](https://docs.python.org/3/contents.html)

[SQLite documentation](https://www.sqlite.org/docs.html)

[Splinter documentation](https://splinter.readthedocs.io/en/latest/)

[Visual Studio Code Documentation](https://code.visualstudio.com/docs)

----

### **Authors and Acknowledgment:**

Arame Diasse, Jackie Ochuida, Nicholas George, Rajib Maji, Stephen Grantham, Theresa Bravo, Vishnu Pillai

----

### Copyright

N. James George © 2023. All Rights Reserved.
