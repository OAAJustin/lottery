import pandas as pd
from sqlalchemy import create_engine
from dateutil import parser

# File paths for the Excel files
day_file_path = 'C:\\Users\\Justin\\dev\\projects\\lottery\\lotto\\nextjs-flask\\play3_day_numbers_2018_2024_with_ones_place.xlsx'
night_file_path = 'C:\\Users\\Justin\\dev\\projects\\lottery\\lotto\\nextjs-flask\\play3_night_numbers_2018_2024_with_ones_place.xlsx'
# Create the MySQL Engine
engine = create_engine('mysql+mysqlconnector://administrator:admin@localhost/tenex')

# Function to preprocess dates and numbers and import data into MySQL
def import_excel_to_sql(file_path, table_name):
    try:
        df = pd.read_excel(file_path, sheet_name=None)  # Read all sheets

        with engine.connect() as connection:
            for sheet_name, data in df.items():
                # Convert the 'date' column to datetime format if it exists
                if 'date' in data.columns:
                    data['date'] = pd.to_datetime(data['date']).dt.date

                # Ensure that the 'winning_play_3' column is treated as a string with leading zeros
                if 'winning_play_3' in data.columns:
                    data['winning_play_3'] = data['winning_play_3'].astype(str).str.zfill(3)

                # Insert the data into the SQL table
                data.to_sql(name=table_name, con=connection, if_exists='append', index=False)
                print(f'Data from {sheet_name} in {file_path} inserted successfully into MySQL table {table_name}')

    except Exception as e:
        print(f'Error inserting data from {file_path} into MySQL table {table_name}: {str(e)}')

# Import the day numbers into the PLAY_3_Day table
import_excel_to_sql(day_file_path, 'PLAY_3_Day')

# Import the night numbers into the PLAY_3_Night table
import_excel_to_sql(night_file_path, 'PLAY_3_Night')