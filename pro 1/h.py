# import requests

# def get_repo_size(username, repository):
#     url = f'https://api.github.com/repos/{username}/{repository}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         data = response.json()
#         size = data['size']
#         print(f'The size of the repository {username}/{repository} is {size} KB')
#     else:
#         print(f'Error: Unable to get repository information. Status code: {response.status_code}')

# # Replace 'google' and 'material-design-icons' with the GitHub username and repository name
# get_repo_size('google', 'material-design-icons')

import requests

def get_repo_size(username, repository):
    url = f'https://api.github.com/repos/{username}/{repository}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        size_kb = data['size']
        size_gb = size_kb / 1024
        print(f'The size of the repository {username}/{repository} is {size_gb} GB')
    else:
        print(f'Error: Unable to get repository information. Status code: {response.status_code}')

# Replace 'google' and 'material-design-icons' with the GitHub username and repository name
get_repo_size('google', 'material-design-icons')