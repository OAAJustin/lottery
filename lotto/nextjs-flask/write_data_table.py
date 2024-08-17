import mysql.connector
import pandas as pd

# Database connection configuration
config = {
    'user': 'Justin',
    'password': 'Password!',
    'host': 'localhost',
    'database': 'Vicinanza Studios & Gallery',
}

# Connect to the MySQL database
conn = mysql.connector.connect(**config)

# SQL query to fetch data from a specific table
query = "SELECT * FROM Inventory"

# Load data into a pandas DataFrame
df = pd.read_sql(query, conn)

# Close the database connection
conn.close()

# Generate the HTML table
html_table = df.to_html(classes='table table-striped', index=False)

# Write the HTML table to a file
with open('index.html', 'w') as f:
    f.write("""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vicinanza Studios Database</title>
        <link rel="stylesheet" href="{{ url_for('static', filename='styles/style.css') }}">
    </head>
    <body>
        <div class="container">
            <h1>MySQL Data Table</h1>
    """)
    f.write(html_table)
    f.write("""
        </div>
    </body>
    </html>
    """)

print("HTML table has been created and saved as index.html")
