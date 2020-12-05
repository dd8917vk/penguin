import re
s = 'index.html'
regex = r'index[\d].html'

match = re.search(r'index[\d].html', s)
if match:
    print(match.group())
else:
    print('no match')

link = '<a class="link" href="htmlman8/swapon.8.html" target="_top">swapoff(8)</a>'
string = 'swapoff'

if string in link:
    print('yes')

# search = re.findall(string, link)
# if (search):
#     print('match')
# else:
#     print('no match')