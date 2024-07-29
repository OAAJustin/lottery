import requests
from bs4 import BeautifulSoup

def find_table_id(url):
    response = requests.get(url)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        wrapper = soup.find('div', id='wrapper')
        
        if wrapper:
            container = wrapper.find('div', class_='container')
            
            if container:
                gridview = container.find('div', id='gridview')
                
                if gridview:
                    scrollable_wrapper = gridview.find('div', class_='jcf-scrollable-wrapper')
                    
                    if scrollable_wrapper:
                        scrollable = scrollable_wrapper.find('div', class_='jcf-scrollable')
                        
                        if scrollable:
                            table = scrollable.find('table')
                            
                            if table:
                                table_id = table.get('id', 'No ID')
                                print(f"Table ID: {table_id}")
                            else:
                                print("No table found within the 'jcf-scrollable' class.")
                        else:
                            print("No 'jcf-scrollable' class found within the 'jcf-scrollable-wrapper' class.")
                    else:
                        print("No 'jcf-scrollable-wrapper' class found within the 'gridview' id.")
                else:
                    print("No 'gridview' id found within the 'container' class.")
            else:
                print("No 'container' class found within the 'wrapper' id.")
        else:
            print("No 'wrapper' id found in the body.")
    else:
        print(f"Failed to retrieve webpage. Status code: {response.status_code}")

# URL of the page to scrape
url = "https://www.ctlottery.org/WinningNumbers/Play3"
find_table_id(url)
