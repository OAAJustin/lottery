def generate_mirrored_numbers(input_number):
    # Ensure input is a three-digit number as a string
    input_number = f"{int(input_number):03}"
    
    # Mapping of digits to their mirrors
    mirror_map = {'0': '5', '1': '6', '2': '7', '3': '8', '4': '9', '5': '0', '6': '1', '7': '2', '8': '3', '9': '4'}
    
    # Print input number
    print(f"Input Number: {input_number}")
    
    # Find all possible mirrors
    mirrors = []
    for i in range(2):
        for j in range(2):
            for k in range(2):
                mirror = (mirror_map[input_number[0]] if i == 1 else input_number[0]) + \
                         (mirror_map[input_number[1]] if j == 1 else input_number[1]) + \
                         (mirror_map[input_number[2]] if k == 1 else input_number[2])
                mirrors.append(mirror)
    
    # Remove duplicates and the input number itself
    mirrors = list(set(mirrors))
    if input_number in mirrors:
        mirrors.remove(input_number)
    
    # Print mirrors
    for mirror in mirrors:
        print(mirror)
    
    return mirrors

if __name__ == '__main__':
    # Input a three-digit number
    input_number = input("Enter a three-digit number: ")
    mirrored_numbers = generate_mirrored_numbers(input_number)
    print(f"All Possible Mirrored Numbers Excluding Input: {mirrored_numbers}")
