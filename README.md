# Data-Table
> Data table component for displaying leaderboard in https://www.dhruvaiiitk.tech (Technical Fest website)

![2022-01-13](https://user-images.githubusercontent.com/78961353/149301872-fd8f025c-c3cb-47ef-a2dc-29bd8882f3c1.png)

## Requirements  (Prerequisites)
* [Google Sheets](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiVrfOTtK71AhWBwzgGHTMsB7IQFnoECAUQAQ&url=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2F&usg=AOvVaw1BH_c8RezUn6MjKzXv92te)
* [Opensheet](https://github.com/benborgers/opensheet#readme)

## Features
* Made use of the [datatable](https://datatables.net) api to create the dynamic table
* Styling via inbuilt bootstrap 5 plugin for datatable and basic css
* Converted google sheets data into JSON format via [opensheet](https://github.com/benborgers/opensheet#readme) api

## Usage

1. Create your table in google sheets, Sheet1 (if any other sheet please see [Deployment Notes]) (with the first row dedicated to specifying the column headings followed by actual data)

![2022-01-13 (2)](https://user-images.githubusercontent.com/78961353/149303899-f9e1a635-34d5-41db-8435-86d31661685a.png)<br>

2. Make the sheet public (change it from restricted to anyone with the link and copy the link) eg : https://docs.google.com/spreadsheets/d/139xIKz3YSN7_ehr6Ha4DwpYynq86YlYm8BJDw8HCQlA/edit?usp=sharing , extract the portion after `d/` and before `/edit..` eg : `139xIKz3YSN7_ehr6Ha4DwpYynq86YlYm8BJDw8HCQlA`

3. Place the extracted portion as a query parameter in the link `?val=<id>` eg : https://ishaan5199.github.io/Data-Table/?val=139xIKz3YSN7_ehr6Ha4DwpYynq86YlYm8BJDw8HCQlA

4. If not provided as `val` parameter, dummy table will be displayed.

5. Google Sheet can have n number of columns and rows, for specific splitting and displaying of data in any column, alter after line 19's comment 

## Deployment Notes

1. Returned JSON data from the opensheet api : https://opensheet.elk.sh/139xIKz3YSN7_ehr6Ha4DwpYynq86YlYm8BJDw8HCQlA/Sheet1

2. If working on any other sheet replace `/Sheet1` with your specific sheet on line 3 of init.js file

3. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)  

## Tech Stack / Built With
1. HTML, CSS, JS

## Authors
Ishaan Mahesh
 
 You can find me here at:
[LinkedIn](https://www.linkedin.com/in/ishaan-mahesh/)
