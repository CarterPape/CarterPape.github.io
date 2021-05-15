import sys, re, pyperclip

references = re.split(r"(?=\n\[\^?[^\]]+\]:)", pyperclip.paste())
references = sorted(references, key=lambda s: s.lower())
pyperclip.copy("".join(references))
print("it's in ur clipboard")
