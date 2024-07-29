import pandas as pd

# Lists of months and days
months = list(range(1, 13))  # 1 to 12
days = list(range(1, 32))   # 1 to 31

# Initialize a list to store results
results = []

# Calculate the ones place value for each month and day pair
for month in months:
    for day in days:
        sum_value = month + day
        ones_place_value = sum_value % 10  # Get the ones place digit
        results.append({
            'month': month,
            'day': day,
            'sum': sum_value,
            'ones_place_value': ones_place_value
        })

# Create a DataFrame from the list of dictionaries
df = pd.DataFrame(results)

# Export the DataFrame to an Excel file
output_file = 'month_day_sums.xlsx'
df.to_excel(output_file, index=False)

print(f"Data exported to {output_file}")

# Optional: Print the DataFrame
print(df)
