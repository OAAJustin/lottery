import requests
from bs4 import BeautifulSoup
import re
import pandas as pd

# Fetch the webpage
url = "https://www.lottery.net/connecticut/play-3-day/numbers/2024"
response = requests.get(url)
response.raise_for_status()

# Parse the webpage
soup = BeautifulSoup(response.text, 'html.parser')

# Initialize a list to store the results
lottery_results = []

# Find the table with the class 'prizes archive'
results_table = soup.find('table', class_='prizes archive')

if results_table:
    rows = results_table.find_all('tr')[1:]  # Skip the header row
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            date = cells[0].text.strip()
            winning_number = cells[1].text.strip()

            # Use regular expression to extract the integers
            cleaned_number = ''.join(re.findall(r'\d+', winning_number))
            
            # Separate the last digit as the wild ball
            winning_play_3_day = cleaned_number[:-1]
            wild_ball = cleaned_number[-1]

            lottery_results.append({
                'date': date, 
                'winning_play_3_day': winning_play_3_day,
                'wild_ball': wild_ball
            })

# Create a DataFrame from the list of dictionaries
df = pd.DataFrame(lottery_results)

# Export the DataFrame to an Excel file
output_file = 'lottery_results.xlsx'
df.to_excel(output_file, index=False)

print(f"Data exported to {output_file}")

# Optional: Print the DataFrame
print(df)
