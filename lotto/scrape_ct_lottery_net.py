import requests
from bs4 import BeautifulSoup
import re
import pandas as pd
from dateutil import parser

# URLs for Play 3 Day Numbers (2018-2024)
day_urls = {
    "2018": "https://www.lottery.net/connecticut/play-3-day/numbers/2018",
    "2019": "https://www.lottery.net/connecticut/play-3-day/numbers/2019",
    "2020": "https://www.lottery.net/connecticut/play-3-day/numbers/2020",
    "2021": "https://www.lottery.net/connecticut/play-3-day/numbers/2021",
    "2022": "https://www.lottery.net/connecticut/play-3-day/numbers/2022",
    "2023": "https://www.lottery.net/connecticut/play-3-day/numbers/2023",
    "2024": "https://www.lottery.net/connecticut/play-3-day/numbers/2024"
}

# URLs for Play 3 Night Numbers (2018-2024)
night_urls = {
    "2018": "https://www.lottery.net/connecticut/play-3-night/numbers/2018",
    "2019": "https://www.lottery.net/connecticut/play-3-night/numbers/2019",
    "2020": "https://www.lottery.net/connecticut/play-3-night/numbers/2020",
    "2021": "https://www.lottery.net/connecticut/play-3-night/numbers/2021",
    "2022": "https://www.lottery.net/connecticut/play-3-night/numbers/2022",
    "2023": "https://www.lottery.net/connecticut/play-3-night/numbers/2023",
    "2024": "https://www.lottery.net/connecticut/play-3-night/numbers/2024"
}

# Function to fetch lottery data, add ones place value, and save to an Excel file
def fetch_lottery_data(urls, output_file):
    all_lottery_results = []

    with pd.ExcelWriter(output_file, engine='xlsxwriter') as writer:
        for year, url in urls.items():
            response = requests.get(url)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')
            lottery_results = []

            results_table = soup.find('table', class_='prizes archive')

            if results_table:
                rows = results_table.find_all('tr')[1:]  # Skip the header row
                for row in rows:
                    cells = row.find_all('td')
                    if len(cells) >= 2:
                        date_text = cells[0].text.strip()
                        winning_number = cells[1].text.strip()

                        # Use dateutil's parser to handle various date formats
                        date = parser.parse(date_text)
                        month = date.month
                        day = date.day

                        # Calculate the ones place value
                        ones_place_value = (month + day) % 10

                        # Extract the first three digits
                        winning_play_3 = ''.join(re.findall(r'\d', winning_number)[:3])

                        # Append the result to the year's list
                        lottery_results.append({
                            'date': date_text, 
                            'winning_play_3': winning_play_3,
                            'ones_place_value': ones_place_value
                        })

                        # Append the result to the overall list
                        all_lottery_results.append({
                            'year': year,
                            'date': date_text, 
                            'winning_play_3': winning_play_3,
                            'ones_place_value': ones_place_value
                        })

            df_year = pd.DataFrame(lottery_results)
            df_year.to_excel(writer, sheet_name=year, index=False)

            print(f"Data for {year} added to the Excel file.")

        # Create a DataFrame for all the results
        df_all = pd.DataFrame(all_lottery_results)
        df_all.to_excel(writer, sheet_name='All_Data', index=False)

        print(f"All data added to the 'All_Data' sheet.")

    print(f"Data exported to {output_file}")

# Fetch and store Play 3 Day Numbers with the ones place value
fetch_lottery_data(day_urls, 'play3_day_numbers_2018_2024_with_ones_place.xlsx')

# Fetch and store Play 3 Night Numbers with the ones place value
fetch_lottery_data(night_urls, 'play3_night_numbers_2018_2024_with_ones_place.xlsx')
