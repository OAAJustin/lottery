def reduce_to_single_digit(num):
    """Reduce a number to a single digit by summing its digits repeatedly."""
    while num >= 10:
        num = sum(int(digit) for digit in str(num))
    return num

# Lists of months and days
months = list(range(1, 13))  # 1 to 12
days = list(range(1, 32))   # 1 to 31

# Initialize a list to store results
results = []

# Calculate the reduced value for each month and day pair
for month in months:
    for day in days:
        sum_value = month + day
        reduced_value = reduce_to_single_digit(sum_value)
        results.append({
            'month': month,
            'day': day,
            'sum': sum_value,
            'reduced_value': reduced_value
        })

# Print results
for result in results:
    print(result)