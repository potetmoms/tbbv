import os
import json

# Path to your images folder
images_folder = "images"

# Get the list of files in the folder
image_files = [
    os.path.join(images_folder, filename)
    for filename in os.listdir(images_folder)
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg'))
]

# Output JSON file
output_file = "images.json"

# Save the list to images.json
with open(output_file, "w") as f:
    json.dump(image_files, f, indent=4)

print(f"Image list saved to {output_file}.")

